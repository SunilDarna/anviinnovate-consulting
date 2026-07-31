// Client account: company profile + hiring demands (with inline status/edit).
import { useEffect, useState } from "react";
import { api } from "../lib/api.js";

const LEAD_STATUS_TONE = { Open: "#2563EB", Filled: "#15803D", Cancelled: "#64748B" };
const TIMELINES = ["Immediate", "2–4 wks", "1–3 mo", "Flexible"];

function Badge({ children, tone }) {
  return <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 999, fontSize: 13, fontWeight: 600,
    color: tone, background: (tone || "#475569") + "18" }}>{children}</span>;
}

export default function AccountDashboard() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    api("/me/overview").then(({ ok, status, data }) => {
      if (status === 401) { window.location.href = "/login"; return; }
      if (ok) setData(data); else setErr(true);
    });
  }, []);

  if (err) return <p style={{ color: "var(--error)" }}>Couldn't load your account. Please refresh.</p>;
  if (!data) return <p className="muted">Loading your account…</p>;

  return (
    <div style={{ display: "grid", gap: 20 }}>
      <ProfileCard user={data.user} />
      <section className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h3 style={{ margin: 0 }}>Your demands {data.leads.length > 0 && <span className="muted" style={{ fontWeight: 400 }}>· {data.leads.length} total, {data.leads.filter(l => l.status === "Open").length} open</span>}</h3>
          <a className="btn btn-primary" href="/clients">New demand</a>
        </div>
        {data.leads.length === 0 ? (
          <p className="muted" style={{ marginBottom: 0 }}>You haven't submitted any hiring demands yet. <a href="/clients">Request talent →</a></p>
        ) : (
          <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
            {data.leads.map((l) => <LeadRow key={l.leadId} lead={l} />)}
          </div>
        )}
      </section>
    </div>
  );
}

function ProfileCard({ user }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ displayName: user.displayName || "", phone: user.phone || "", company: user.company || "", linkedin: user.linkedin || "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const name = user.displayName || user.name || user.email;

  async function save(e) {
    e.preventDefault();
    setSaving(true); setSaved(false);
    const { ok } = await api("/profile", { method: "POST", body: form });
    setSaving(false);
    if (ok) { setSaved(true); setEditing(false); }
  }

  return (
    <section className="card">
      <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        {user.picture
          ? <img src={user.picture} alt="" width="56" height="56" style={{ borderRadius: "50%" }} />
          : <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ink)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 22 }}>{(name || "?")[0].toUpperCase()}</div>}
        <div style={{ flex: 1, minWidth: 180 }}>
          <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{name}</h2>
          <p className="muted" style={{ margin: 0 }}>{user.email}{user.company ? ` · ${user.company}` : ""}</p>
        </div>
        {!editing && <button className="btn btn-ghost" onClick={() => setEditing(true)}>Edit profile</button>}
      </div>

      {!editing ? (
        <div className="muted" style={{ marginTop: 14, display: "grid", gap: 4 }}>
          {user.company && <div><strong>Company:</strong> {user.company}</div>}
          {user.phone && <div><strong>Phone:</strong> {user.phone}</div>}
          {user.linkedin && <div><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noopener noreferrer">{user.linkedin}</a></div>}
          {saved && <div style={{ color: "var(--success)" }}>Profile updated ✓</div>}
        </div>
      ) : (
        <form onSubmit={save} style={{ marginTop: 12 }}>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div><label htmlFor="p-name">Contact name</label><input id="p-name" value={form.displayName} onChange={(e) => setForm({ ...form, displayName: e.target.value })} maxLength={80} /></div>
            <div><label htmlFor="p-company">Company</label><input id="p-company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={120} /></div>
            <div><label htmlFor="p-phone">Phone</label><input id="p-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} /></div>
            <div><label htmlFor="p-linkedin">LinkedIn</label><input id="p-linkedin" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} maxLength={200} /></div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            <button className="btn btn-primary" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
            <button type="button" className="btn btn-ghost" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </section>
  );
}

function LeadRow({ lead }) {
  const [l, setL] = useState(lead);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ status: l.status, skills: l.skills, resourceCount: l.resourceCount, timeline: l.timeline, notes: l.notes || "" });
  const [saving, setSaving] = useState(false);

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    const { ok, data } = await api("/client-lead/update", { method: "POST", body: { leadId: l.leadId, ...form, resourceCount: Number(form.resourceCount) } });
    setSaving(false);
    if (ok && data.lead) { setL({ ...l, ...data.lead }); setEditing(false); }
  }
  async function setStatus(status) {
    const { ok, data } = await api("/client-lead/update", { method: "POST", body: { leadId: l.leadId, status } });
    if (ok && data.lead) { setL({ ...l, status: data.lead.status }); setForm((f) => ({ ...f, status: data.lead.status })); }
  }

  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <div>
          <strong>{l.company}</strong> · {l.resourceCount} resource(s) · {l.timeline}<br />
          <span className="muted" style={{ fontSize: 14 }}>{l.skills}</span>
        </div>
        <Badge tone={LEAD_STATUS_TONE[l.status]}>{l.status}</Badge>
      </div>
      {!editing ? (
        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 14 }} onClick={() => setEditing(true)}>Edit</button>
          {l.status !== "Open" && <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 14 }} onClick={() => setStatus("Open")}>Mark open</button>}
          {l.status !== "Filled" && <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 14 }} onClick={() => setStatus("Filled")}>Mark filled</button>}
          {l.status !== "Cancelled" && <button className="btn btn-ghost" style={{ padding: "8px 14px", fontSize: 14 }} onClick={() => setStatus("Cancelled")}>Cancel</button>}
        </div>
      ) : (
        <form onSubmit={save} style={{ marginTop: 12 }}>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div><label>Status</label><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>{["Open", "Filled", "Cancelled"].map(s => <option key={s}>{s}</option>)}</select></div>
            <div><label>No. of resources</label><input type="number" min={1} max={999} value={form.resourceCount} onChange={(e) => setForm({ ...form, resourceCount: e.target.value })} /></div>
            <div><label>Timeline</label><select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>{TIMELINES.map(t => <option key={t}>{t}</option>)}</select></div>
            <div><label>Skills</label><input value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} maxLength={500} /></div>
          </div>
          <label>Notes</label>
          <textarea rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} maxLength={2000} />
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button className="btn btn-primary" disabled={saving}>{saving ? "Saving…" : "Save changes"}</button>
            <button type="button" className="btn btn-ghost" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
