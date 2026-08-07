#!/usr/bin/env python3
"""
Renders ai-case-studies-v1.0.json (the verified evidence base behind the 102
practice scenarios) into a print-ready HTML catalogue.

Run: python3 build_case_studies.py
"""
import json, os, html, collections

V = "1.0"
HERE = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(HERE, f"ai-case-studies-v{V}.json"), encoding="utf-8"))

UNITS = [("U1","First working AI"),("U2","Python &amp; data for AI"),("U3","SQL &amp; data quality"),
         ("U4","Classical ML"),("U5","Model evaluation"),("U6","Deep learning"),
         ("U7","Transformers &amp; embeddings"),("U8","LLMs &amp; prompting"),("U9","RAG"),
         ("U10","Agents &amp; tools"),("U11","Evaluation &amp; observability"),("U12","Shipping")]

TYPE_LABEL = {"engineering-blog":"Engineering blog","peer-reviewed-paper":"Peer-reviewed paper",
              "arxiv-paper":"arXiv paper","postmortem":"Postmortem","conference-talk":"Conference talk",
              "news-report":"News report","vendor-marketing":"Vendor marketing","other":"Other primary source"}

def e(x): return html.escape(str(x), quote=False)

cases, gaps, meta = D["cases"], D["gaps"], D["meta"]
tc = collections.Counter(c["sourceType"] for c in cases)
rc = collections.Counter(c["reproducible"] for c in cases)

P = []; a = P.append
a(f"""<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Production AI Case Studies v{V} — Anvi Innovate AI Academy</title><style>
:root{{--ink:#0B1F3A;--accent:#2563EB;--surface:#f8fafc;--card:#fff;--text:#0f172a;--muted:#475569;
--border:#e2e8f0;--ok:#15803d;--warn:#b45309;--danger:#b91c1c;
--shadow:0 1px 3px rgba(15,23,42,.05),0 8px 24px rgba(15,23,42,.05);--radius:12px}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
background:var(--surface);color:var(--text);line-height:1.6;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
main{{max-width:1180px;margin:0 auto;padding:44px 24px 90px}}
h1,h2,h3{{color:var(--ink);line-height:1.22;letter-spacing:-.02em}}
h1{{font-size:2.3rem;margin:.1em 0 .2em}}
h2{{font-size:1.5rem;margin:0 0 .35em;padding-bottom:8px;border-bottom:2px solid var(--border)}}
section{{margin-top:50px}} p{{max-width:88ch}} a{{color:var(--accent)}}
.hero{{background:radial-gradient(1100px 420px at 15% -25%,#1e40af 0%,#0B1F3A 62%);color:#fff;
border-radius:20px;padding:40px 34px;box-shadow:var(--shadow)}}
.hero h1{{color:#fff}} .hero p{{color:#c7d2fe;max-width:78ch;font-size:1.05rem}}
.pill{{display:inline-block;padding:3px 11px;border-radius:999px;background:#eff6ff;color:var(--accent);
font-size:12px;font-weight:600;margin:0 4px 4px 0}}
.hero .pill{{background:rgba(255,255,255,.13);color:#c7d2fe}}
.pill.g{{background:#dcfce7;color:#166534}} .pill.o{{background:#fef3c7;color:#92400e}}
.pill.d{{background:#f1f5f9;color:#334155}} .pill.r{{background:#fee2e2;color:#991b1b}}
.card{{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow)}}
.grid{{display:grid;gap:16px}} .g4{{grid-template-columns:repeat(4,1fr)}}
@media(max-width:900px){{.g4{{grid-template-columns:1fr 1fr}}}} @media(max-width:640px){{.g4{{grid-template-columns:1fr}}}}
.muted{{color:var(--muted)}}
.tw{{overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius);background:var(--card);box-shadow:var(--shadow);margin-top:14px}}
table{{border-collapse:collapse;width:100%;font-size:13.4px;min-width:520px}}
th,td{{text-align:left;padding:9px 12px;border-bottom:1px solid var(--border);vertical-align:top}}
thead th{{background:#f1f5f9;font-weight:700;color:var(--ink)}}
tbody tr:last-child td{{border-bottom:none}} tbody tr:nth-child(even){{background:#fbfdff}}
.note{{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#1e3a8a;margin-top:14px}}
.warnbox{{background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#713f12;margin-top:14px}}
.okbox{{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:13px 16px;font-size:13.6px;color:#14532d;margin-top:14px}}
ul.tight{{margin:7px 0;padding-left:21px}} ul.tight li{{margin:5px 0}}
.cs{{background:var(--card);border:1px solid var(--border);border-left:4px solid var(--accent);
border-radius:var(--radius);padding:18px 20px;margin-top:16px;box-shadow:var(--shadow);break-inside:avoid}}
.cs.low{{border-left-color:var(--warn)}}
.cs h3{{margin:2px 0 4px;font-size:1.1rem}}
.lbl{{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);margin-top:12px;display:block}}
.fail{{background:#fef2f2;border:1px solid #fecaca;border-radius:9px;padding:11px 13px;font-size:13.2px;color:#7f1d1d;margin-top:6px}}
.repro{{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:9px;padding:11px 13px;font-size:13.2px;color:#14532d;margin-top:6px}}
.chip{{display:inline-block;background:#f1f5f9;color:#334155;font-size:11.5px;font-weight:500;padding:2px 9px;border-radius:6px;margin:3px 3px 0 0}}
.printbtn{{position:fixed;right:20px;bottom:20px;background:var(--accent);color:#fff;border:none;
padding:12px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;
box-shadow:0 8px 24px rgba(37,99,235,.35);z-index:99}}
footer{{margin-top:60px;padding-top:22px;border-top:1px solid var(--border);color:var(--muted);font-size:13px}}
@media print{{.printbtn{{display:none}}body{{background:#fff}}main{{max-width:none;padding:0}}
.cs,.card,.tw{{break-inside:avoid}}h2{{break-after:avoid}}}}
</style></head><body>
<button class="printbtn" onclick="window.print()">Save as PDF / Print</button><main>
<div class="hero">
<span class="pill">Evidence base</span><span class="pill">v{V}</span>
<span class="pill">{len(cases)} verified cases</span>
<h1>Production AI Case Studies</h1>
<p>The factual basis for the <strong>102 practice scenarios</strong>. Every entry was retrieved from a primary
source and put through adversarial verification: the URL was re-fetched, the quoted metrics were checked against
what the source actually says, and the source type was re-classified where it had been overstated.</p>
<p>The most valuable field in each entry is <strong>what went wrong</strong> — what the team tried first, what
regressed, what had to be rolled back. That is what a scenario is built from.</p></div>

<section><h2>How this was assembled</h2>
<div class="grid g4" style="margin-top:16px">
<div class="card"><span class="muted" style="font-size:12px">HARVESTED</span><div style="font-size:1.7rem;font-weight:700;color:var(--ink)">{meta['harvested']}</div><span class="muted" style="font-size:13px">candidate cases</span></div>
<div class="card"><span class="muted" style="font-size:12px">CONFIRMED AS CLAIMED</span><div style="font-size:1.7rem;font-weight:700;color:var(--ok)">{meta['verified']}</div><span class="muted" style="font-size:13px">URL, metrics and type all held</span></div>
<div class="card"><span class="muted" style="font-size:12px">CORRECTED</span><div style="font-size:1.7rem;font-weight:700;color:var(--warn)">{meta['corrected']}</div><span class="muted" style="font-size:13px">claim rewritten to what the source supports</span></div>
<div class="card"><span class="muted" style="font-size:12px">USABLE</span><div style="font-size:1.7rem;font-weight:700;color:var(--ink)">{len(cases)}</div><span class="muted" style="font-size:13px">after excluding vendor-marketing-only</span></div>
</div>
<div class="warnbox"><strong>What verification actually caught.</strong> Thirty-eight of 112 cases had a claim
rewritten. The recurring problems: a cost saving quoted without the accuracy drop stated in the next clause of the
same post; forward-looking statements ("put us on track to reach 100%") presented as achieved results; two-decimal
figures eyeballed off an unlabelled relative bar chart; headline numbers that came from a company press release
rather than the cited article; and two different experiments conflated into one result. Three sources were
reclassified as vendor marketing and excluded.</div>
<div class="note">Every corrected entry below carries the corrected wording, not the original. Where a source
publishes no numbers, the outcome field says so rather than estimating.</div>
</section>

<section><h2>Coverage</h2>
<div class="tw"><table><thead><tr><th style="width:34%">Source type</th><th style="text-align:right">Cases</th></tr></thead><tbody>""")
for k, v in tc.most_common():
    a(f'<tr><td>{TYPE_LABEL.get(k,k)}</td><td style="text-align:right"><strong>{v}</strong></td></tr>')
a(f"""</tbody></table></div>
<h3 style="margin-top:26px">Reproducibility on an 8 GB laptop</h3>
<p class="muted" style="font-size:13.6px">Judged on whether the <em>core lesson</em> survives shrinking — not whether
the original system does.</p>
<div class="tw"><table><thead><tr><th style="width:34%">Verdict</th><th style="text-align:right">Cases</th><th>Meaning</th></tr></thead><tbody>
<tr><td><span class="pill g">Yes</span></td><td style="text-align:right"><strong>{rc['yes']}</strong></td><td>Reproduces directly at small scale, CPU-only, free tier</td></tr>
<tr><td><span class="pill o">Partial</span></td><td style="text-align:right"><strong>{rc['partial']}</strong></td><td>Core lesson reproduces; some of the original does not</td></tr>
<tr><td><span class="pill r">No</span></td><td style="text-align:right"><strong>{rc['no']}</strong></td><td>Lesson only exists at production scale — used as reading, not as a scenario</td></tr>
</tbody></table></div></section>""")

for uid, uname in UNITS:
    rows = [c for c in cases if c["unit"] == uid]
    if not rows: continue
    a(f'<section id="{uid.lower()}"><h2>{uid} · {uname}</h2><p class="muted">{len(rows)} cases</p>')
    for c in rows:
        cls = " low" if c["sourceQuality"] == "medium" else ""
        rp = {"yes":"g","partial":"o","no":"r"}[c["reproducible"]]
        vs = c.get("verifyStatus","")
        vpill = ('<span class="pill g">verified</span>' if vs=="confirmed"
                 else '<span class="pill o">corrected</span>' if vs=="corrected" else "")
        a(f'<div class="cs{cls}"><h3>{e(c["org"])}</h3>'
          f'<div style="margin:4px 0 8px">'
          f'<span class="pill d">{TYPE_LABEL.get(c["sourceType"],c["sourceType"])}</span>'
          f'<span class="pill d">quality: {c["sourceQuality"]}</span>'
          f'<span class="pill {rp}">reproducible: {c["reproducible"]}</span>{vpill}</div>'
          f'<p style="font-size:13.6px;margin:8px 0 0"><strong>Problem.</strong> {e(c["problem"])}</p>'
          f'<p style="font-size:13.6px;margin:8px 0 0"><strong>Built.</strong> {e(c["built"])}</p>'
          f'<span class="lbl">Stack</span><div>')
        for s in c["stack"]:
            a(f'<span class="chip">{e(s)}</span>')
        a(f'</div><p style="font-size:13.6px;margin:10px 0 0"><strong>Outcome.</strong> {e(c["outcome"])}</p>'
          f'<span class="lbl">What went wrong</span><div class="fail">{e(c["whatWentWrong"])}</div>'
          f'<span class="lbl">Shrinking it to a laptop</span><div class="repro">{e(c["reproNote"])}</div>'
          f'<p style="margin:11px 0 0;font-size:12.8px"><a href="{e(c["sourceUrl"])}" target="_blank" rel="noopener">{e(c["sourceUrl"])}</a></p>'
          f'</div>')
    a("</section>")

a('<section><h2>Gaps — what could not be sourced</h2>'
  '<p>Stated rather than papered over. Each of these was searched for and not found at acceptable quality.</p>'
  '<ul class="tight" style="font-size:13.5px">')
for g in gaps:
    a(f"<li>{e(g)}</li>")
a(f"""</ul>
<div class="warnbox"><strong>The systematic one.</strong> Indian consumer-tech engineering blogs are largely
Medium-hosted and refused automated retrieval. Swiggy, Razorpay and Meesho cases in this catalogue are therefore
cited via curated secondary summaries that quote the original posts, and are marked medium quality accordingly.
Flipkart, Zomato-beyond-logging, Dream11, CRED, PhonePe-beyond-fraud and Indian edtech produced little or nothing
retrievable. This is a limitation of what is publicly published, not of the search.</div>
</section>

<footer><strong>Production AI Case Studies v{V}</strong> · Anvi Innovate AI Academy · evidence base for the
102 practice scenarios.<br>
Retrieved and adversarially verified August 2026. Claims reflect what the linked primary source states as of that
date. Case studies are summarised for educational purposes; the Academy is not affiliated with or endorsed by any
organisation named.<br>
Regenerate with <code>python3 build_case_studies.py</code> · hello@anviinnovate.com</footer>
</main></body></html>""")

open(os.path.join(HERE, f"ai-case-studies-v{V}.html"), "w", encoding="utf-8").write("".join(P))
print(f"OK  {len(cases)} cases  {len(gaps)} gaps  ->  ai-case-studies-v{V}.html")
