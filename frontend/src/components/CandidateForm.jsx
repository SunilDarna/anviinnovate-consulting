// Candidate profile: details + skills + preferences + resume upload (PDF/DOC/DOCX).
// Resume goes straight to a private S3 bucket via a presigned URL; we store the key.
import { useEffect, useState } from "react";
import { api } from "../lib/api.js";

const EXT_TYPE = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export default function CandidateForm() {
  const [auth, setAuth] = useState("checking"); // checking | in | out
  const [user, setUser] = useState(null);
  const [cand, setCand] = useState(null);
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    api("/me/overview").then(({ ok, status, data }) => {
      if (status === 401) return setAuth("out");
      if (ok) { setUser(data.user); setCand(data.candidate); setAuth("in"); } else setAuth("out");
    });
  }, []);

  async function uploadResume(file) {
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    const contentType = file.type || EXT_TYPE[ext];
    if (!EXT_TYPE[ext]) throw new Error("Resume must be a PDF, DOC or DOCX file.");
    const { ok, data } = await api("/candidate/resume-url", { method: "POST", body: { contentType, filename: file.name } });
    if (!ok) throw new Error(data.error || "Could not start upload.");
    const put = await fetch(data.uploadUrl, { method: "PUT", headers: { "Content-Type": contentType }, body: file });
    if (!put.ok) throw new Error("Resume upload failed. Please try again.");
    return { resumeKey: data.key, resumeName: file.name };
  }

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = Object.fromEntries(f.entries());
    body.skills = String(body.skills || "").split(",").map((s) => s.trim()).filter(Boolean);
    body.graduationYear = body.graduationYear ? Number(body.graduationYear) : undefined;
    setState("sending"); setError("");
    try {
      if (resume) Object.assign(body, await uploadResume(resume));
      const { ok, data } = await api("/candidate-apply", { method: "POST", body });
      if (ok && data.ok) setState("ok");
      else { setState("error"); setError(data.error || "Something went wrong."); }
    } catch (err) {
      setState("error"); setError(err.message || "Something went wrong.");
    }
  }

  if (auth === "checking") return <p className="muted">Loading…</p>;
  if (auth === "out") return (
    <div className="card">
      <p>Sign in with Google to create your candidate profile.</p>
      <a className="btn btn-primary" href="/login">Continue with Google</a>
    </div>
  );
  if (state === "ok") return (
    <div className="card" style={{ borderColor: "var(--success-mark)" }}>
      <h3 style={{ marginTop: 0, color: "var(--success)" }}>Profile submitted ✓</h3>
      <p className="muted">Thanks — our team will review your profile and get back to you about deployment opportunities.</p>
      <p className="muted">Want to strengthen your skills? Explore training and certification with our partner <a href="https://bxup.in/" target="_blank" rel="noopener noreferrer">bxup.in</a>.</p>
      <a className="btn btn-ghost" href="/account">Go to your account</a>
    </div>
  );

  return (
    <form className="card" onSubmit={onSubmit}>
      <p className="muted" style={{ marginTop: 0 }}>Signed in as <strong>{user?.email}</strong>{cand && " · updating your profile"}</p>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div><label htmlFor="ca-name">Full name *</label><input id="ca-name" name="fullName" required minLength={2} maxLength={100} defaultValue={cand?.fullName || user?.name || ""} /></div>
        <div><label htmlFor="ca-phone">Phone</label><input id="ca-phone" name="phone" defaultValue={user?.phone || ""} /></div>
        <div><label htmlFor="ca-edu">Experience *</label><select id="ca-edu" name="education" required defaultValue={cand?.education || ""}><option value="" disabled>Select…</option><option>Fresher</option><option>Experienced</option></select></div>
        <div><label htmlFor="ca-year">Graduation year</label><input id="ca-year" name="graduationYear" type="number" min={1970} max={2100} defaultValue={cand?.graduationYear || ""} /></div>
        <div><label htmlFor="ca-linkedin">LinkedIn</label><input id="ca-linkedin" name="linkedin" placeholder="https://linkedin.com/in/…" defaultValue={cand?.linkedin || ""} /></div>
        <div><label htmlFor="ca-resume">Resume (PDF, DOC, DOCX)</label><input id="ca-resume" type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files?.[0] || null)} />
          {cand?.resumeName && !resume && <p className="muted" style={{ fontSize: 13, margin: "4px 0 0" }}>On file: {cand.resumeName}</p>}</div>
      </div>
      <label htmlFor="ca-skills">Skills (comma-separated)</label>
      <input id="ca-skills" name="skills" placeholder="Python, ML, NLP, RAG, prompt engineering" defaultValue={(cand?.skills || []).join(", ")} />
      <label htmlFor="ca-pref">Preferences</label>
      <textarea id="ca-pref" name="preferences" rows={3} maxLength={1000} placeholder="Roles or areas you're most interested in (e.g. GenAI apps, data annotation, remote/on-site, availability)…" defaultValue={cand?.preferences || ""} />
      {state === "error" && <p style={{ color: "var(--error)" }} role="alert">{error}</p>}
      <button className="btn btn-primary" style={{ marginTop: 18 }} disabled={state === "sending"}>
        {state === "sending" ? "Submitting…" : cand ? "Update profile" : "Submit profile"}
      </button>
      <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>Anvi Innovate never charges a fee at any stage. Questions? Email <a href="mailto:hello@anviinnovate.com">hello@anviinnovate.com</a>.</p>
    </form>
  );
}
