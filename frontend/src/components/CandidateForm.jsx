// Candidate application form -> POST /candidate-apply (auth-gated). Accessible labels.
import { useEffect, useState } from "react";
import { api } from "../lib/api.js";

export default function CandidateForm() {
  const [auth, setAuth] = useState("checking"); // checking | in | out
  const [user, setUser] = useState(null);
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    api("/auth/me").then(({ ok, data }) => {
      if (ok) { setUser(data.user); setAuth("in"); } else setAuth("out");
    });
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = Object.fromEntries(f.entries());
    body.skills = String(body.skills || "").split(",").map((s) => s.trim()).filter(Boolean);
    body.graduationYear = body.graduationYear ? Number(body.graduationYear) : undefined;
    setState("sending"); setError("");
    const { ok, data } = await api("/candidate-apply", { method: "POST", body });
    if (ok && data.ok) setState("ok");
    else { setState("error"); setError(data.error || "Something went wrong."); }
  }

  if (auth === "checking") return <p className="muted">Checking your session…</p>;
  if (auth === "out") return (
    <div className="card">
      <p>Please sign in with Google to apply.</p>
      <a className="btn btn-primary" href="/login">Continue with Google</a>
    </div>
  );
  if (state === "ok") return (
    <div className="card" style={{ borderColor: "var(--success-mark)" }}>
      <h3 style={{ marginTop: 0, color: "var(--success)" }}>Application submitted ✓</h3>
      <p className="muted">Next step: take the AI/ML Foundations Assessment — 30 questions, 30 minutes, 85% to pass.</p>
      <a className="btn btn-primary" href="/candidates/assessment">Go to assessment</a>
    </div>
  );

  return (
    <form className="card" onSubmit={onSubmit}>
      <p className="muted" style={{ marginTop: 0 }}>Signed in as <strong>{user?.email}</strong></p>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div><label htmlFor="ca-name">Full name *</label><input id="ca-name" name="fullName" required minLength={2} maxLength={100} defaultValue={user?.name || ""} /></div>
        <div><label htmlFor="ca-phone">Phone</label><input id="ca-phone" name="phone" /></div>
        <div><label htmlFor="ca-edu">Experience *</label><select id="ca-edu" name="education" required defaultValue=""><option value="" disabled>Select…</option><option>Fresher</option><option>Experienced</option></select></div>
        <div><label htmlFor="ca-year">Graduation year</label><input id="ca-year" name="graduationYear" type="number" min={1970} max={2100} /></div>
        <div><label htmlFor="ca-degree">Degree</label><input id="ca-degree" name="degree" placeholder="e.g. B.Tech CSE" /></div>
        <div><label htmlFor="ca-linkedin">LinkedIn</label><input id="ca-linkedin" name="linkedin" placeholder="https://linkedin.com/in/…" /></div>
      </div>
      <label htmlFor="ca-skills">Skills (comma-separated)</label>
      <input id="ca-skills" name="skills" placeholder="Python, ML, NLP, prompt engineering" />
      {state === "error" && <p style={{ color: "var(--error)" }} role="alert">{error}</p>}
      <button className="btn btn-primary" style={{ marginTop: 18 }} disabled={state === "sending"}>
        {state === "sending" ? "Submitting…" : "Submit application"}
      </button>
      <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>Anvi Innovate never charges a fee at any stage. Questions? Email <a href="mailto:hello@anviinnovate.com">hello@anviinnovate.com</a>.</p>
    </form>
  );
}
