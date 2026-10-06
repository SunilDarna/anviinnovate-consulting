#!/usr/bin/env python3
"""Renders the GTM readiness research into a prioritised HTML report."""
import json, io, html, collections
V="1.0"
d=json.load(io.open("gtm-research-raw.json",encoding="utf-8"))
mods, verdicts = d["modules"], d["verdicts"]
e=lambda x: html.escape(str(x),quote=False)
PRI=[("P0-blocker","P0 — blocker","p0"),("P1-before-launch","P1 — before launch","p1"),
     ("P2-first-90-days","P2 — first 90 days","p2"),("P3-later","P3 — later","p3")]
vc=collections.Counter(v["status"] for v in verdicts)
nf=sum(len(m["findings"]) for m in mods); nr=sum(len(m["recommendations"]) for m in mods)
nu=sum(len(m.get("unverified",[])) for m in mods)
P=[];a=P.append
a(f"""<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Go-to-market readiness review v{V} — Anvi Innovate</title><style>
:root{{--ink:#0B1F3A;--accent:#2563EB;--surface:#f8fafc;--card:#fff;--text:#0f172a;--muted:#475569;
--border:#e2e8f0;--ok:#15803d;--warn:#b45309;--danger:#b91c1c;--shadow:0 1px 3px rgba(15,23,42,.05),0 8px 24px rgba(15,23,42,.05)}}
*{{box-sizing:border-box}}body{{margin:0;font-family:Inter,-apple-system,"Segoe UI",Roboto,sans-serif;
background:var(--surface);color:var(--text);line-height:1.6;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
main{{max-width:1120px;margin:0 auto;padding:42px 24px 90px}}
h1,h2,h3{{color:var(--ink);line-height:1.22;letter-spacing:-.02em}}
h1{{font-size:2.2rem;margin:.1em 0 .2em}}h2{{font-size:1.45rem;margin:0 0 .35em;padding-bottom:8px;border-bottom:2px solid var(--border)}}
h3{{font-size:1.05rem;margin:22px 0 6px}}section{{margin-top:46px}}p{{max-width:88ch}}a{{color:var(--accent)}}
.hero{{background:radial-gradient(1100px 420px at 15% -25%,#1e40af 0%,#0B1F3A 62%);color:#fff;border-radius:20px;padding:38px 32px;box-shadow:var(--shadow)}}
.hero h1{{color:#fff}}.hero p{{color:#c7d2fe;max-width:80ch;font-size:1.04rem}}
.pill{{display:inline-block;padding:3px 11px;border-radius:999px;background:#eff6ff;color:var(--accent);font-size:12px;font-weight:600;margin:0 4px 4px 0}}
.hero .pill{{background:rgba(255,255,255,.13);color:#c7d2fe}}
.card{{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;box-shadow:var(--shadow)}}
.grid{{display:grid;gap:14px}}.g4{{grid-template-columns:repeat(4,1fr)}}.g2{{grid-template-columns:1fr 1fr}}
@media(max-width:900px){{.g4,.g2{{grid-template-columns:1fr}}}}
.muted{{color:var(--muted)}}.stat b{{display:block;font-size:1.6rem;color:var(--ink)}}.stat span{{font-size:12.5px;color:var(--muted)}}
.note{{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;font-size:13.5px;color:#1e3a8a;margin-top:13px}}
.warnbox{{background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:13px 16px;font-size:13.5px;color:#713f12;margin-top:13px}}
.danger{{background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:13px 16px;font-size:13.5px;color:#7f1d1d;margin-top:13px}}
.ok{{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:13px 16px;font-size:13.5px;color:#14532d;margin-top:13px}}
.rec{{border-left:4px solid var(--border);background:#fff;border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin-top:11px;box-shadow:var(--shadow)}}
.rec.p0{{border-left-color:var(--danger)}}.rec.p1{{border-left-color:var(--warn)}}.rec.p2{{border-left-color:var(--accent)}}.rec.p3{{border-left-color:var(--muted)}}
.tag{{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:2px 8px;border-radius:5px}}
.t0{{background:#fee2e2;color:#991b1b}}.t1{{background:#fef3c7;color:#92400e}}.t2{{background:#eff6ff;color:#1e40af}}.t3{{background:#f1f5f9;color:#334155}}
.f{{padding:11px 0;border-bottom:1px solid #eef2f7;font-size:13.8px}}.f:last-child{{border-bottom:none}}
.f b{{color:var(--ink)}}.src{{font-size:12px;color:var(--muted);display:block;margin-top:4px}}
.conf{{font-size:10.5px;font-weight:700;padding:1px 6px;border-radius:4px;margin-left:6px}}
.ch{{background:#dcfce7;color:#166534}}.cm{{background:#fef3c7;color:#92400e}}.cl{{background:#f1f5f9;color:#475569}}
.printbtn{{position:fixed;right:20px;bottom:20px;background:var(--accent);color:#fff;border:none;padding:12px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;box-shadow:0 8px 24px rgba(37,99,235,.35);z-index:99}}
footer{{margin-top:56px;padding-top:20px;border-top:1px solid var(--border);color:var(--muted);font-size:13px}}
@media print{{.printbtn{{display:none}}body{{background:#fff}}main{{max-width:none;padding:0}}.card,.rec{{break-inside:avoid}}h2{{break-after:avoid}}}}
</style></head><body><button class="printbtn" onclick="window.print()">Save as PDF / Print</button><main>
<div class="hero"><span class="pill">Go-to-market readiness</span><span class="pill">v{V}</span><span class="pill">7 October 2026</span>
<h1>Before you go to market</h1>
<p>An evidence-based review of anviinnovate.com — the offer, the market it is entering, the economics, the
competition and the regulatory position. {nf} sourced findings across 10 domains, every load-bearing number
and regulatory claim put through adversarial verification.</p></div>

<div class="grid g4" style="margin-top:20px">
<div class="card stat"><b>{nf}</b><span>sourced findings across 10 domains</span></div>
<div class="card stat"><b>{nr}</b><span>prioritised recommendations</span></div>
<div class="card stat"><b style="color:var(--ok)">{vc['confirmed']}</b><span>claims confirmed under verification</span></div>
<div class="card stat"><b style="color:var(--warn)">{vc['corrected']+vc['reject']}</b><span>corrected or rejected</span></div>
</div>
<div class="warnbox"><strong>How to read this.</strong> {vc['unverifiable']} claims came back
<em>unverifiable</em> — largely regulatory ones, because verifiers were instructed that trade press alone is
not sufficient for law and tax and that an official source is required. Treat those as leads for your lawyer,
not as facts. {nu} further items are listed as unverified by the researchers themselves.</div>""")

# Verdict
a("""<section><h2>The verdict</h2>
<div class="danger"><strong>Do not launch the site as it stands.</strong> Not because the idea is wrong — the
model is aimed at a real and growing demand pocket — but because three things on the live site would actively
cost you credibility with the exact buyer you are targeting, and two structural risks are unpriced.</div>
<div class="ok"><strong>What is right.</strong> The buyer you have implicitly chosen is the correct one. GCCs
are 68–71% of revenue at both listed Indian staffing leaders, and Hyderabad is a genuine GCC market. AI/ML is
the fastest-growing hiring category in India. The technical depth of the role tracks is real and current, which
most staffing competitors cannot match.</div>
<div class="warnbox"><strong>What is unresolved.</strong> Your supply is freshers. GCC fresher share is falling
(21% → 16% of planned hiring), and India's largest IT employers have cut fresher intake hard. The evidence does
not say freshers are unsellable — it says they are unsellable <em>as freshers</em>. The offer has to be
restated around what the buyer is short of, which is 1–5 year AI-capable engineers.</div></section>""")

# Site-specific issues
a("""<section><h2>What is wrong on the live site today</h2>
<p class="muted">These are specific, checkable, and fixable this week.</p>
<div class="rec p0"><span class="tag t0">P0</span> <b>The only market statistic you cite describes the wrong market.</b>
<p style="font-size:13.6px;margin:8px 0 0">Both the homepage and <code>/about</code> cite Grand View Research's
global <em>AI training dataset</em> market — USD 8.60bn by 2030, 21.9% CAGR. That is the data-annotation market:
labelling images and text. It is Scale AI's and iMerit's market, not yours. It is also <em>global</em>, and
smaller than India's staffing market alone, so it simultaneously misidentifies your category and understates
your opportunity. A GCC procurement reader who checks it concludes you have mis-read your own market.</p></div>
<div class="rec p0"><span class="tag t0">P0</span> <b>Your positioning line is one word from a far larger competitor's.</b>
<p style="font-size:13.6px;margin:8px 0 0">Verified live on 7 Oct 2026 — Andela's H1 is
<em>"The Human Layer Powering Production AI"</em>. Yours is <em>"The skilled human layer behind AI"</em>.
Entering a category on a funded competitor's distinctive phrase forfeits recall at precisely the moment a buyer
is forming a shortlist.</p></div>
<div class="rec p0"><span class="tag t0">P0</span> <b>"Deploy in days, not months" is unsourced, and you have better material.</b>
<p style="font-size:13.6px;margin:8px 0 0">TCS has publicly stated freshers need roughly nine months of training
before project work. That is a citable third-party anchor that makes your claim concrete instead of a vendor
assertion. Restate it as a two-part, defensible commitment — shortlist within N hours from the bench, onboarded
in N weeks after the client's own interview — and back it with a written replacement clause.</p></div>
<div class="rec p1"><span class="tag t1">P1</span> <b>Nine role tracks reads as having none.</b>
<p style="font-size:13.6px;margin:8px 0 0">India's largest staffing firm sustains its entire niche contract
business on roughly 7,129 associates with about 1,100 open mandates at any time. Nine tracks off a single
pre-trained bench is not credible at your scale, and the shortfall buyers actually report is concentrated in
AI/ML operations, data, and platform engineering.</p></div>
<div class="rec p1"><span class="tag t1">P1</span> <b>Zero first-party numbers, where competitors lead with them.</b>
<p style="font-size:13.6px;margin:8px 0 0">Revature leads with 25,000+ trained and 200+ enterprises; Andela with
17K engineers and 200K trained. You need no clients to publish: people trained, bench headcount by track, lab
hours, median days from request to shortlist, assessment pass rates. All first-party, all defensible.</p></div>
</section>""")
# Domains
a("<section><h2>The evidence, by domain</h2>")
for m in mods:
    a(f"<h3>{e(m['domain'])}</h3><div class='card' style='margin-top:8px'>")
    for f in m["findings"][:9]:
        c={"high":"ch","medium":"cm","low":"cl"}[f["confidence"]]
        a(f"<div class='f'><b>{e(f['claim'])}</b><span class='conf {c}'>{f['confidence']}</span>"
          f"<div style='margin-top:4px'>{e(f['detail'])}</div>"
          f"<span class='src'>{e(f['source'])} · {e(f['asOf'])} · <a href='{e(f['url'])}' target='_blank' rel='noopener'>source</a></span></div>")
    a("</div>")
a("</section>")
# Actions
a("<section><h2>What to do, in order</h2>")
for key,label,cls in PRI:
    rs=[(m,r) for m in mods for r in m["recommendations"] if r["priority"]==key]
    if not rs: continue
    a(f"<h3>{label} <span class='muted' style='font-weight:400'>({len(rs)})</span></h3>")
    for m,r in rs:
        a(f"<div class='rec {cls}'><span class='tag t{cls[-1]}'>{r['effort']}</span> "
          f"<b>{e(r['action'])}</b><p style='font-size:13.3px;margin:7px 0 0' class='muted'>{e(r['why'])}</p>"
          f"<span class='src'>{e(m['domain'])}</span></div>")
a("</section>")
a(f"""<footer><strong>Go-to-market readiness review v{V}</strong> · Anvi Innovate · compiled 7 October 2026.<br>
Research is a point-in-time snapshot; Indian labour, tax and staffing regulation changes frequently. Nothing
here is legal or tax advice — the regulatory findings are leads to take to a qualified adviser, and the
verifiers explicitly could not confirm many of them against official sources.<br>
Regenerate with <code>python3 build_report.py</code></footer></main></body></html>""")
io.open(f"gtm-readiness-v{V}.html","w",encoding="utf-8").write("".join(P))
print(f"OK  gtm-readiness-v{V}.html  ({nf} findings, {nr} recommendations)")
