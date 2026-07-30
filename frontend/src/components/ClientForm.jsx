// Client Demand lead form -> POST /client-lead. Honeypot + accessible labels.
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
    <div className="card" style={{ borderColor: "var(--success-mark)" }}>
      <h3 style={{ marginTop: 0, color: "var(--success)" }}>Request received ✓</h3>
      <p className="muted">Thanks — our team will review your requirements and reply within one business day. A confirmation email is on its way.</p>
    </div>
  );

  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true"><label htmlFor="cf-website">Leave blank</label><input id="cf-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div><label htmlFor="cf-company">Company *</label><input id="cf-company" name="company" required minLength={2} maxLength={120} /></div>
        <div><label htmlFor="cf-name">Your name *</label><input id="cf-name" name="name" required minLength={2} maxLength={80} /></div>
        <div><label htmlFor="cf-email">Work email *</label><input id="cf-email" name="email" type="email" required /></div>
        <div><label htmlFor="cf-phone">Phone</label><input id="cf-phone" name="phone" /></div>
        <div><label htmlFor="cf-count">No. of resources *</label><input id="cf-count" name="resourceCount" type="number" min={1} max={999} required /></div>
        <div><label htmlFor="cf-timeline">Timeline</label><select id="cf-timeline" name="timeline" defaultValue="Flexible">{TIMELINES.map((t) => <option key={t}>{t}</option>)}</select></div>
      </div>
      <label htmlFor="cf-skills">Domain / skills needed *</label>
      <input id="cf-skills" name="skills" required minLength={2} maxLength={500} placeholder="e.g. LLM fine-tuning, RAG, data annotation" />
      <label htmlFor="cf-notes">Notes</label>
      <textarea id="cf-notes" name="notes" rows={3} maxLength={2000} placeholder="Anything else we should know?" />
      {state === "error" && <p style={{ color: "var(--error)" }} role="alert">{error}</p>}
      <button className="btn btn-primary" style={{ marginTop: 18 }} disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Submit request"}
      </button>
      <p className="muted" style={{ fontSize: 13, marginBottom: 0 }}>We reply within one business day. Your details are never shared. Prefer email? Write to <a href="mailto:hello@anviinnovate.com">hello@anviinnovate.com</a>.</p>
    </form>
  );
}
