// Client Demand lead form -> POST /client-lead. Honeypot field + client validation.
import { useState } from "react";
import { api } from "../lib/api.js";

const TIMELINES = ["Immediate", "2–4 wks", "1–3 mo", "Flexible"];

export default function ClientForm() {
  const [state, setState] = useState("idle"); // idle | sending | ok | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = Object.fromEntries(f.entries());
    body.resourceCount = Number(body.resourceCount);
    setState("sending"); setError("");
    const { ok, data } = await api("/client-lead", { method: "POST", body });
    if (ok && data.ok) setState("ok");
    else { setState("error"); setError(data.error || "Something went wrong. Please try again."); }
  }

  if (state === "ok") return (
    <div className="card" style={{ borderColor: "var(--success)" }}>
      <h3 style={{ marginTop: 0, color: "var(--success)" }}>Request received ✓</h3>
      <p className="muted">Thanks — our team will review your requirements and get back to you shortly. A confirmation email is on its way.</p>
    </div>
  );

  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true"><label>Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div><label>Company *</label><input name="company" required minLength={2} maxLength={120} /></div>
        <div><label>Your name *</label><input name="name" required minLength={2} maxLength={80} /></div>
        <div><label>Work email *</label><input name="email" type="email" required /></div>
        <div><label>Phone *</label><input name="phone" required /></div>
        <div><label>No. of resources *</label><input name="resourceCount" type="number" min={1} max={999} required /></div>
        <div><label>Timeline</label><select name="timeline" defaultValue="Flexible">{TIMELINES.map((t) => <option key={t}>{t}</option>)}</select></div>
      </div>
      <label>Domain / skills needed *</label>
      <input name="skills" required minLength={2} maxLength={500} placeholder="e.g. LLM fine-tuning, RAG, data annotation" />
      <label>Notes</label>
      <textarea name="notes" rows={3} maxLength={2000} placeholder="Anything else we should know?" />
      {state === "error" && <p style={{ color: "var(--error)" }}>{error}</p>}
      <button className="btn btn-primary" style={{ marginTop: 18 }} disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Submit request"}
      </button>
    </form>
  );
}
