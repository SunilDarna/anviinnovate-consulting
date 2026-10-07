import { useEffect, useState, useCallback } from "react";
import { api } from "../lib/api.js";

const inr = (n) => (n == null ? "—" : "₹" + Number(n).toLocaleString("en-IN"));
const when = (s) => (s ? new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—");
const TONE = {
  submitted: "#64748b", shortlisted: "#2563eb", interviewing: "#b45309",
  offered: "#7c3aed", placed: "#15803d", rejected: "#b91c1c",
};

function Pill({ children, tone }) {
  return <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 999, fontSize: 12,
    fontWeight: 600, background: "#f1f5f9", color: tone || "#334155" }}>{children}</span>;
}
function Card({ title, children, right }) {
  return (
    <div className="card" style={{ marginTop: 16 }}>
      {(title || right) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
          {title && <h3 style={{ margin: 0 }}>{title}</h3>}
          {right}
        </div>
      )}
      {children}
    </div>
  );
}
function Stat({ n, l }) {
  return (
    <div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)" }}>{n}</div>
      <p className="muted" style={{ margin: 0, fontSize: 13 }}>{l}</p>
    </div>
  );
}
const Empty = ({ children }) => <p className="muted" style={{ fontSize: 14, margin: "10px 0 0" }}>{children}</p>;

export default function Portal() {
  const [me, setMe] = useState(null);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const r = await api("/portal/me");
      if (r.status === 401) { setLoading(false); return; }
      if (!r.ok) { setErr(r.data?.error || "Could not load your account."); setLoading(false); return; }
      setMe(r.data.profile); setStatuses(r.data.statuses || []); setLoading(false);
    })();
  }, []);

  if (loading) return <p className="muted">Loading…</p>;
  if (!me) return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Please sign in</h3>
      <p className="muted" style={{ marginBottom: 12 }}>Sign in to raise requirements and track your pipeline.</p>
      <a className="btn btn-primary" href="/login">Sign in</a>
    </div>
  );
  if (err) return <div className="card"><p className="muted" style={{ margin: 0 }}>{err}</p></div>;

  return (
    <>
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
        <Pill>{me.role}</Pill>
        <span className="muted" style={{ fontSize: 14 }}>{me.email}</span>
      </div>
      {me.role === "admin" && <AdminView statuses={statuses} />}
      {me.role === "partner" && <PartnerView />}
      {me.role === "client" && <ClientView statuses={statuses} />}
    </>
  );
}

/* ── CLIENT ──────────────────────────────────────────────────────────────── */
function ClientView({ statuses }) {
  const [reqs, setReqs] = useState([]);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ role: "", tier: "fde", headcount: 1, engagement: "contract", timeline: "flexible", location: "India", notes: "" });

  const load = useCallback(async () => {
    const r = await api("/portal/requirements");
    if (r.ok) setReqs(r.data.requirements || []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.role.trim()) return;
    setBusy(true);
    const r = await api("/portal/requirements", { method: "POST", body: form });
    setBusy(false);
    if (r.ok) { setForm({ ...form, role: "", notes: "" }); load(); }
  };
  const advance = async (reqId, subId, status) => {
    await api("/portal/submissions/status", { method: "POST", body: { reqId, subId, status } });
    load();
  };

  const totalSubs = reqs.reduce((a, r) => a + (r.submissions?.length || 0), 0);

  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 14 }}>
        <div className="card"><Stat n={reqs.length} l="requirements raised" /></div>
        <div className="card"><Stat n={reqs.filter((r) => r.status === "open").length} l="still open" /></div>
        <div className="card"><Stat n={totalSubs} l="engineers submitted to you" /></div>
      </div>

      <Card title="Raise a requirement">
        <form onSubmit={submit} style={{ marginTop: 10 }}>
          <div className="grid" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
            <label>Role<input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="e.g. RAG / retrieval engineer" /></label>
            <label>Tier
              <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })}>
                <option value="fde">Forward Deployed Engineer</option>
                <option value="trained">Trained engineer</option>
              </select>
            </label>
            <label>Headcount<input type="number" min="1" max="50" value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })} /></label>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 10 }}>
            <label>Engagement
              <select value={form.engagement} onChange={(e) => setForm({ ...form, engagement: e.target.value })}>
                <option value="contract">Contract</option><option value="c2h">Contract to hire</option><option value="permanent">Permanent</option>
              </select>
            </label>
            <label>Timeline
              <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                <option value="immediate">Immediate</option><option value="2-4w">2–4 weeks</option><option value="1-3m">1–3 months</option><option value="flexible">Flexible</option>
              </select>
            </label>
            <label>Location<input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></label>
          </div>
          <label style={{ display: "block", marginTop: 10 }}>Notes<textarea rows="3" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Stack, domain, anything that would disqualify a candidate." /></label>
          <button className="btn btn-primary" style={{ marginTop: 12 }} disabled={busy}>{busy ? "Submitting…" : "Raise requirement"}</button>
        </form>
      </Card>

      <h2 style={{ marginTop: 32 }}>Your requirements</h2>
      {reqs.length === 0 && <Empty>Nothing raised yet. Use the form above and we will shortlist against it.</Empty>}
      {reqs.map((r) => (
        <Card key={r.reqId} title={r.role} right={<Pill tone={r.status === "open" ? "#15803d" : "#64748b"}>{r.status}</Pill>}>
          <p className="muted" style={{ fontSize: 13, margin: "4px 0 0" }}>
            {r.tier === "fde" ? "Forward Deployed Engineer" : "Trained engineer"} · {r.headcount} needed · {r.engagement} · {r.timeline} · {r.location} · raised {when(r.createdAt)}
          </p>
          {r.notes && <p className="muted" style={{ fontSize: 13.5, marginTop: 8 }}>{r.notes}</p>}
          <h4 style={{ margin: "14px 0 6px", fontSize: 14 }}>Submissions ({r.submissions?.length || 0})</h4>
          {!r.submissions?.length && <Empty>No engineers submitted against this yet.</Empty>}
          {r.submissions?.map((s) => (
            <div key={s.subId} style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", padding: "8px 0", borderTop: "1px solid var(--border)" }}>
              <strong style={{ fontSize: 14, minWidth: 150 }}>{s.engName || "Engineer"}</strong>
              <span className="muted" style={{ fontSize: 13 }}>{s.years} yrs</span>
              {s.assessmentScore != null && <span className="muted" style={{ fontSize: 13 }}>score {s.assessmentScore}</span>}
              <Pill tone={TONE[s.status]}>{s.status}</Pill>
              <select value={s.status} onChange={(e) => advance(r.reqId, s.subId, e.target.value)} style={{ marginLeft: "auto", fontSize: 13 }}>
                {statuses.map((st) => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
          ))}
        </Card>
      ))}
    </>
  );
}

/* ── PARTNER ─────────────────────────────────────────────────────────────── */
function PartnerView() {
  const [open, setOpen] = useState([]);
  const [engs, setEngs] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [form, setForm] = useState({ name: "", years: 2, skills: "", assessmentScore: "", noticeDays: 30 });
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const [o, e, p] = await Promise.all([api("/portal/open-requirements"), api("/portal/engineers"), api("/portal/placements")]);
    if (o.ok) setOpen(o.data.requirements || []);
    if (e.ok) setEngs(e.data.engineers || []);
    if (p.ok) setPlacements(p.data.placements || []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const addEngineer = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setBusy(true);
    const r = await api("/portal/engineers", { method: "POST", body: {
      ...form, years: Number(form.years),
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
      assessmentScore: form.assessmentScore === "" ? null : Number(form.assessmentScore),
    } });
    setBusy(false);
    if (r.ok) { setForm({ ...form, name: "", skills: "", assessmentScore: "" }); load(); }
  };
  const submitTo = async (reqId, eng) => {
    await api("/portal/submissions", { method: "POST", body: {
      reqId, engId: eng.engId, engName: eng.name, years: eng.years, assessmentScore: eng.assessmentScore } });
    load();
  };

  const earned = placements.reduce((a, p) => a + (p.commission || 0), 0);

  return (
    <>
      <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 14 }}>
        <div className="card"><Stat n={engs.length} l="engineers you represent" /></div>
        <div className="card"><Stat n={open.length} l="open requirements" /></div>
        <div className="card"><Stat n={placements.length} l="placements" /></div>
      </div>

      <Card title="Add an engineer">
        <form onSubmit={addEngineer} style={{ marginTop: 10 }}>
          <div className="grid" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
            <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>Years<input type="number" min="0" max="30" value={form.years} onChange={(e) => setForm({ ...form, years: e.target.value })} /></label>
            <label>Assessment score<input type="number" min="0" max="100" value={form.assessmentScore} onChange={(e) => setForm({ ...form, assessmentScore: e.target.value })} placeholder="optional" /></label>
            <label>Notice (days)<input type="number" min="0" max="180" value={form.noticeDays} onChange={(e) => setForm({ ...form, noticeDays: e.target.value })} /></label>
          </div>
          <label style={{ display: "block", marginTop: 10 }}>Skills (comma separated)<input value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} placeholder="RAG, evals, agents, vector search" /></label>
          <button className="btn btn-primary" style={{ marginTop: 12 }} disabled={busy}>{busy ? "Saving…" : "Add engineer"}</button>
        </form>
      </Card>

      <h2 style={{ marginTop: 32 }}>Open requirements</h2>
      {open.length === 0 && <Empty>No open requirements right now.</Empty>}
      {open.map((r) => (
        <Card key={r.reqId} title={r.role} right={<Pill>{r.tier === "fde" ? "FDE" : "Trained"}</Pill>}>
          <p className="muted" style={{ fontSize: 13, margin: "4px 0 10px" }}>{r.headcount} needed · {r.engagement} · {r.location} · posted {when(r.createdAt)}</p>
          {engs.length === 0 ? <Empty>Add an engineer above before you can submit.</Empty> : (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              <span className="muted" style={{ fontSize: 13 }}>Submit:</span>
              {engs.filter((e) => e.available !== false).map((e) => (
                <button key={e.engId} className="btn btn-ghost" style={{ fontSize: 13, padding: "6px 12px" }} onClick={() => submitTo(r.reqId, e)}>{e.name}</button>
              ))}
            </div>
          )}
        </Card>
      ))}

      <h2 style={{ marginTop: 32 }}>Your placements</h2>
      {placements.length === 0 ? <Empty>No placements yet.</Empty> : (
        <Card right={<strong style={{ fontSize: 14 }}>{inr(earned)} commission recorded</strong>}>
          {placements.map((p) => (
            <div key={p.plId} style={{ display: "flex", gap: 10, flexWrap: "wrap", padding: "8px 0", borderTop: "1px solid var(--border)", fontSize: 14 }}>
              <strong style={{ minWidth: 150 }}>{p.engName}</strong>
              <span className="muted">CTC {inr(p.annualCtc)}</span>
              <span className="muted">{p.commissionPct}%</span>
              <strong>{inr(p.commission)}</strong>
              <Pill tone={p.invoiceStatus === "paid" ? "#15803d" : "#b45309"}>{p.invoiceStatus}</Pill>
            </div>
          ))}
        </Card>
      )}
    </>
  );
}

/* ── ADMIN ───────────────────────────────────────────────────────────────── */
function AdminView({ statuses }) {
  const [ov, setOv] = useState(null);
  const [reqs, setReqs] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [pl, setPl] = useState({ reqId: "", subId: "", engName: "", partnerId: "", annualCtc: "", commissionPct: 8.33, engagement: "contract" });

  const load = useCallback(async () => {
    const [o, r, p] = await Promise.all([api("/portal/admin/overview"), api("/portal/requirements"), api("/portal/placements")]);
    if (o.ok) setOv(o.data);
    if (r.ok) setReqs(r.data.requirements || []);
    if (p.ok) setPlacements(p.data.placements || []);
  }, []);
  useEffect(() => { load(); }, [load]);

  const record = async (e) => {
    e.preventDefault();
    const r = await api("/portal/placements", { method: "POST", body: { ...pl, annualCtc: Number(pl.annualCtc), commissionPct: Number(pl.commissionPct) } });
    if (r.ok) { setPl({ ...pl, reqId: "", subId: "", engName: "", annualCtc: "" }); load(); }
  };
  const setInvoice = async (plId, invoiceStatus) => {
    await api("/portal/placements/invoice", { method: "POST", body: { plId, invoiceStatus } });
    load();
  };
  const setReqStatus = async (reqId, status) => {
    await api("/portal/requirements/status", { method: "POST", body: { reqId, status } });
    load();
  };

  return (
    <>
      {ov && (
        <>
          <div className="grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: 14 }}>
            <div className="card"><Stat n={ov.openRequirements} l={`open of ${ov.requirements} requirements`} /></div>
            <div className="card"><Stat n={ov.submissions} l="engineers submitted" /></div>
            <div className="card"><Stat n={ov.placements} l="placements" /></div>
            <div className="card"><Stat n={inr(ov.commissionOutstanding)} l="commission outstanding" /></div>
          </div>
          <Card title="Pipeline">
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
              {statuses.map((s) => (
                <div key={s} style={{ minWidth: 104 }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 700, color: TONE[s] }}>{ov.pipeline?.[s] ?? 0}</div>
                  <p className="muted" style={{ margin: 0, fontSize: 12.5 }}>{s}</p>
                </div>
              ))}
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 12 }}>
              Billed {inr(ov.commissionBilled)} · collected {inr(ov.commissionCollected)}
            </p>
          </Card>
        </>
      )}

      <Card title="Record a placement">
        <p className="muted" style={{ fontSize: 13, margin: "4px 0 0" }}>Commission is a percentage of annual CTC. GST at 18% is calculated on top.</p>
        <form onSubmit={record} style={{ marginTop: 10 }}>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            <label>Requirement ID<input required value={pl.reqId} onChange={(e) => setPl({ ...pl, reqId: e.target.value })} /></label>
            <label>Submission ID<input required value={pl.subId} onChange={(e) => setPl({ ...pl, subId: e.target.value })} /></label>
            <label>Engineer<input value={pl.engName} onChange={(e) => setPl({ ...pl, engName: e.target.value })} /></label>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr", marginTop: 10 }}>
            <label>Annual CTC (₹)<input required type="number" value={pl.annualCtc} onChange={(e) => setPl({ ...pl, annualCtc: e.target.value })} /></label>
            <label>Commission %<input required type="number" step="0.01" value={pl.commissionPct} onChange={(e) => setPl({ ...pl, commissionPct: e.target.value })} /></label>
            <label>Partner ID<input value={pl.partnerId} onChange={(e) => setPl({ ...pl, partnerId: e.target.value })} placeholder="optional" /></label>
          </div>
          <button className="btn btn-primary" style={{ marginTop: 12 }}>Record placement</button>
        </form>
      </Card>

      <h2 style={{ marginTop: 32 }}>Billing</h2>
      {placements.length === 0 ? <Empty>No placements recorded yet.</Empty> : (
        <Card>
          {placements.map((p) => (
            <div key={p.plId} style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "9px 0", borderTop: "1px solid var(--border)", fontSize: 14 }}>
              <strong style={{ minWidth: 140 }}>{p.engName || p.plId}</strong>
              <span className="muted">CTC {inr(p.annualCtc)}</span>
              <span className="muted">{p.commissionPct}%</span>
              <strong>{inr(p.commission)}</strong>
              <span className="muted">+GST {inr(p.gst)}</span>
              <select value={p.invoiceStatus} onChange={(e) => setInvoice(p.plId, e.target.value)} style={{ marginLeft: "auto", fontSize: 13 }}>
                {["draft", "raised", "paid", "written-off"].map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          ))}
        </Card>
      )}

      <h2 style={{ marginTop: 32 }}>All requirements</h2>
      {reqs.map((r) => (
        <Card key={r.reqId} title={r.role} right={
          <select value={r.status} onChange={(e) => setReqStatus(r.reqId, e.target.value)} style={{ fontSize: 13 }}>
            {["open", "on-hold", "filled", "closed"].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>}>
          <p className="muted" style={{ fontSize: 13, margin: "4px 0 0" }}>
            <code>{r.reqId}</code> · {r.company || r.ownerEmail} · {r.headcount} needed · {r.submissionCount ?? 0} submitted · {when(r.createdAt)}
          </p>
        </Card>
      ))}
    </>
  );
}
