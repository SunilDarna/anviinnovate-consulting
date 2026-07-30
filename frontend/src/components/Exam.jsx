// Timed 30-question assessment with safety rails: answers autosave to
// sessionStorage, a beforeunload guard, an aria-live timer, and a question
// navigator. Server is authoritative; auto-submits on expiry.
import { useEffect, useRef, useState } from "react";
import { api } from "../lib/api.js";

const fmt = (s) => {
  s = Math.max(0, s);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

export default function Exam() {
  const [phase, setPhase] = useState("loading"); // loading|auth|cooldown|active|submitting|result|error
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState(null);
  const [msg, setMsg] = useState("");
  const submittedRef = useRef(false);

  useEffect(() => {
    api("/assessment/start", { method: "POST" }).then(({ ok, status, data }) => {
      if (status === 401) return setPhase("auth");
      if (status === 403) { setMsg(data.message || "You're in a cooldown period."); return setPhase("cooldown"); }
      if (!ok) { setMsg(data.error || "Could not start the assessment."); return setPhase("error"); }
      setData(data);
      // Rehydrate any answers saved locally for this attempt.
      try {
        const saved = sessionStorage.getItem(`anvi_exam_${data.attemptId}`);
        if (saved) setAnswers(JSON.parse(saved));
      } catch {}
      setRemaining(Math.round((new Date(data.expiresAt) - Date.now()) / 1000));
      setPhase("active");
    });
  }, []);

  // Persist answers locally on every change so a refresh / accidental nav doesn't lose them.
  useEffect(() => {
    if (data?.attemptId && phase === "active") {
      try { sessionStorage.setItem(`anvi_exam_${data.attemptId}`, JSON.stringify(answers)); } catch {}
    }
  }, [answers, data, phase]);

  // Warn before leaving an in-progress attempt.
  useEffect(() => {
    if (phase !== "active") return;
    const h = (e) => { e.preventDefault(); e.returnValue = ""; };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [phase]);

  useEffect(() => {
    if (phase !== "active") return;
    const t = setInterval(() => {
      setRemaining((r) => { if (r <= 1) { clearInterval(t); submit(true); return 0; } return r - 1; });
    }, 1000);
    return () => clearInterval(t);
  }, [phase]); // eslint-disable-line

  async function submit(auto = false) {
    if (submittedRef.current) return;
    if (!auto) {
      const unanswered = data.questions.length - Object.keys(answers).length;
      if (unanswered > 0 && !confirm(`${unanswered} question(s) unanswered. Submit anyway?`)) return;
    }
    submittedRef.current = true;
    setPhase("submitting");
    const { ok, data: res } = await api("/assessment/submit", { method: "POST", body: { attemptId: data.attemptId, answers } });
    if (ok) {
      try { sessionStorage.removeItem(`anvi_exam_${data.attemptId}`); } catch {}
      setResult(res); setPhase("result");
    } else { setMsg(res.error || "Submit failed."); setPhase("error"); submittedRef.current = false; }
  }

  if (phase === "loading") return <p className="muted">Preparing your assessment…</p>;
  if (phase === "auth") return (
    <div className="card"><p>Please sign in to take the assessment.</p><a className="btn btn-primary" href="/login">Continue with Google</a></div>
  );
  if (phase === "cooldown") return (
    <div className="card" style={{ borderColor: "var(--error)" }}><h3 style={{ marginTop: 0 }}>Cooldown active</h3><p className="muted">{msg}</p>
      <a className="btn btn-ghost" href="/training">Explore training modules</a></div>
  );
  if (phase === "error") return <div className="card" style={{ borderColor: "var(--error)" }}><p style={{ color: "var(--error)" }} role="alert">{msg}</p></div>;

  if (phase === "result") {
    const pass = result.pass;
    const cats = result.byCategory || [];
    const weak = new Set(cats.slice(0, 2).map((c) => c.category)); // two lowest (already sorted asc)
    return (
      <div className="card" style={{ borderColor: pass ? "var(--success-mark)" : "var(--error)" }}>
        <h2 style={{ color: pass ? "var(--success)" : "var(--error)" }}>{pass ? "You passed!" : "Not this time"}</h2>
        <p style={{ fontSize: 40, fontWeight: 700, margin: "8px 0" }}>{result.score}%</p>
        <p className="muted">{result.correct} of {result.total} correct · passing score is 85%.</p>

        {cats.length > 0 && (
          <div style={{ margin: "18px 0" }}>
            <h3 style={{ marginBottom: 8 }}>Category breakdown</h3>
            <div style={{ display: "grid", gap: 6 }}>
              {cats.map((c) => {
                const pct = Math.round((c.correct / c.total) * 100);
                const low = weak.has(c.category);
                return (
                  <div key={c.category} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "center",
                    padding: "8px 10px", borderRadius: 8, background: low ? "#FEF2F2" : "#F8FAFC" }}>
                    <span style={{ fontWeight: low ? 600 : 400 }}>{c.category}{low && <span className="muted" style={{ fontWeight: 400 }}> — focus area</span>}</span>
                    <span style={{ fontVariantNumeric: "tabular-nums", color: low ? "var(--error)" : "var(--muted)" }}>{c.correct}/{c.total} · {pct}%</span>
                  </div>
                );
              })}
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>
              Strengthen your focus areas with our <a href="/training">training modules</a> (in collaboration with bxup.in).
            </p>
          </div>
        )}

        {pass
          ? <p>Our team will contact you with next steps for training and deployment. A confirmation email is on its way.</p>
          : <p>You can try again{result.cooldownUntil ? <> after the cooldown — your next attempt unlocks on <strong>{new Date(result.cooldownUntil).toLocaleDateString()}</strong></> : ""}.</p>}
        <a className="btn btn-ghost" href="/account" style={{ marginTop: 8 }}>Back to account</a>
      </div>
    );
  }

  // active / submitting
  const answeredCount = Object.keys(answers).length;
  return (
    <div>
      <div style={{ position: "sticky", top: 64, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "var(--ink)", color: "#fff", padding: "12px 18px", borderRadius: 10, marginBottom: 14 }}>
        <span><strong>{answeredCount}</strong> / {data.questions.length} answered</span>
        <span aria-live="polite" style={{ fontVariantNumeric: "tabular-nums", fontWeight: 700, color: remaining < 120 ? "#FCA5A5" : "#fff" }}>⏱ {fmt(remaining)} left</span>
      </div>

      {/* Question navigator */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {data.questions.map((q, i) => (
          <button key={q.id} onClick={() => document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            aria-label={`Go to question ${i + 1}${answers[q.id] ? ", answered" : ", unanswered"}`}
            style={{ width: 34, height: 34, borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 13,
              border: "1px solid var(--border)", background: answers[q.id] ? "var(--accent)" : "#fff", color: answers[q.id] ? "#fff" : "var(--muted)" }}>
            {i + 1}
          </button>
        ))}
      </div>

      {data.questions.map((q, i) => (
        <div className="card" id={`q-${q.id}`} key={q.id} style={{ marginBottom: 16, scrollMarginTop: 120 }}>
          <p style={{ fontWeight: 600, marginTop: 0 }}><span className="pill" style={{ marginRight: 8 }}>{i + 1}</span>{q.question}</p>
          {["A", "B", "C", "D"].map((L) => (
            <label key={L} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontWeight: 400, cursor: "pointer", padding: "6px 0", margin: 0 }}>
              <input type="radio" name={q.id} value={L} style={{ width: "auto", marginTop: 4 }}
                checked={answers[q.id] === L} onChange={() => setAnswers((a) => ({ ...a, [q.id]: L }))} />
              <span><strong>{L}.</strong> {q.options[L]}</span>
            </label>
          ))}
        </div>
      ))}
      <button className="btn btn-primary" onClick={() => submit(false)} disabled={phase === "submitting"}>
        {phase === "submitting" ? "Submitting…" : "Submit assessment"}
      </button>
    </div>
  );
}
