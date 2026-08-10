#!/usr/bin/env python3
"""
Anvi Innovate AI Academy — AI/ML terminology atlas.

Reads the harvested atlas (atlas-raw.json), dedupes across modules, and emits:
  glossary-vN.json   machine-readable, feeds the academy site
  glossary-vN.md     one term per line, greppable
  glossary-vN.html   browsable and printable, with live search

Dedupe rule: a term appearing in several modules gets one home. Named tools are
homed in a tool module; concepts in the earliest concept module that covers them.
The longest definition wins (most informative), notes are merged, and the other
modules are recorded as cross-references rather than dropped.

Run: python3 build_glossary.py
"""
import json, os, re, html, collections

V = "1.0"
HERE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(HERE, "atlas-raw.json")

# (short id, display name, matcher, is-tool-module)
MODULES = [
    ("math",        "Mathematics, statistics and optimisation",              "Mathematics, statistics",      False),
    ("dataeng",     "Python and data engineering",                           "Python and data engineering",  False),
    ("data",        "Databases, SQL, warehousing and data governance",       "Databases, SQL",               False),
    ("classical",   "Classical and tabular machine learning",                "Classical and tabular",        False),
    ("eval",        "Evaluation, experimentation and causal inference",      "Evaluation, experimentation",  False),
    ("dlfund",      "Deep learning fundamentals, training and systems",      "Deep learning fundamentals",   False),
    ("arch",        "Neural network architectures",                          "Neural network architectures", False),
    ("perception",  "Vision, audio, multimodal, recommenders, time series and RL", "Vision, audio",          False),
    ("nlp",         "NLP, tokenisation, embeddings and vector search",       "NLP, tokenisation",            False),
    ("llm",         "Large language models — training, adaptation, generation", "Large language models",     False),
    ("systems",     "RAG, agents, serving, and MLOps/LLMOps",                "RAG, agents, serving",         False),
    ("t-data",      "Tools — data engineering, databases, ML libraries",     "data engineering, databases",  True),
    ("t-llm",       "Tools — LLM serving, runtimes, training, model hubs",   "LLM serving, runtimes",        True),
    ("t-rag",       "Tools — vector databases, retrieval, agents",           "vector databases, retrieval",  True),
    ("t-ops",       "Tools — evaluation, observability, gateways, MLOps",    "evaluation, observability",    True),
    ("t-trust",     "Tools — safety, security, privacy and governance",      "safety, security, privacy",    True),
]

def norm(t):
    s = t.strip().lower().rstrip(".")
    s = re.sub(r"\s+", " ", s)
    return s

def main():
    raw = json.load(open(RAW, encoding="utf-8"))
    mods = raw["modules"]

    # Map each harvested module onto a declared module slot.
    slot = {}
    for i, m in enumerate(mods):
        hit = next((k for k in MODULES if k[2].lower() in m["module"].lower()), None)
        if not hit:
            raise SystemExit(f"unmapped module: {m['module']}")
        slot[i] = hit
    order = {k[0]: i for i, k in enumerate(MODULES)}

    # Collect every occurrence of every term.
    occ = collections.defaultdict(list)
    for i, m in enumerate(mods):
        mid, mname, _, is_tool = slot[i]
        for t in m["terms"]:
            occ[norm(t["t"])].append({
                "mid": mid, "mname": mname, "is_tool_mod": is_tool,
                "t": t["t"].strip(), "d": t["d"].strip(), "k": t["k"],
                "g": t["g"].strip(), "n": (t.get("n") or "").strip(),
            })

    resolved = []
    for _, cands in occ.items():
        tool_home = [c for c in cands if c["is_tool_mod"] and c["k"] == "tool"]
        pool = tool_home or cands
        home = min(pool, key=lambda c: order[c["mid"]])
        best_def = max(cands, key=lambda c: len(c["d"]))["d"]
        note = next((c["n"] for c in cands if c["n"]), "")
        also = [c["mname"] for c in cands if c["mid"] != home["mid"]]
        resolved.append({
            "term": home["t"], "def": best_def, "kind": home["k"],
            "module": home["mid"], "group": home["g"],
            "note": note, "alsoIn": sorted(set(also)),
        })

    # Order: module, then group (alphabetical, but keep a stable feel), then term.
    gpos = {}
    for i, m in enumerate(mods):
        mid = slot[i][0]
        for j, t in enumerate(m["terms"]):
            gpos.setdefault((mid, t["g"].strip()), j)
    resolved.sort(key=lambda r: (order[r["module"]],
                                 gpos.get((r["module"], r["group"]), 9999),
                                 r["term"].lower()))

    uncertain = []
    for i, m in enumerate(mods):
        for u in m.get("uncertain", []):
            uncertain.append({"module": slot[i][1], "note": u})

    kinds = collections.Counter(r["kind"] for r in resolved)
    notes = sum(1 for r in resolved if r["note"])
    meta = {
        "version": V, "terms": len(resolved), "harvested": sum(len(m["terms"]) for m in mods),
        "concepts": kinds["concept"], "tools": kinds["tool"],
        "currencyNotes": notes, "unverified": len(uncertain),
        "modules": len(MODULES),
    }

    out_mods = []
    for mid, mname, _, is_tool in MODULES:
        rows = [r for r in resolved if r["module"] == mid]
        groups = []
        for g in dict.fromkeys(r["group"] for r in rows):
            groups.append({"name": g, "terms": [r for r in rows if r["group"] == g]})
        out_mods.append({"id": mid, "name": mname, "isTool": is_tool,
                         "count": len(rows), "groups": groups})

    json.dump({"meta": meta, "modules": out_mods, "unverified": uncertain},
              open(os.path.join(HERE, f"glossary-v{V}.json"), "w", encoding="utf-8"),
              indent=1, ensure_ascii=False)

    write_md(out_mods, meta, uncertain)
    write_html(out_mods, meta, uncertain)
    print(f"OK  {meta['terms']} terms ({meta['concepts']} concepts, {meta['tools']} tools) "
          f"from {meta['harvested']} harvested")
    print(f"    {meta['currencyNotes']} currency notes · {meta['unverified']} unverified flags")
    for f in (f"glossary-v{V}.json", f"glossary-v{V}.md", f"glossary-v{V}.html"):
        print(f"    {f}")


def write_md(mods, meta, uncertain):
    L = [f"# AI/ML Terminology Atlas v{V}", "",
         f"{meta['terms']} terms — {meta['concepts']} concepts and {meta['tools']} named tools — "
         f"across {meta['modules']} modules. One term per line.", "",
         f"Tools current as of August 2026. {meta['currencyNotes']} entries carry a currency note "
         f"(deprecated, renamed, superseded or discontinued). {meta['unverified']} items could not be "
         f"verified and are listed at the end rather than asserted.", "",
         "Legend: `[tool]` marks a named product or project. `⚠` marks a currency note.", "", "---", ""]
    for m in mods:
        L += [f"## {m['name']}", f"*{m['count']} terms*", ""]
        for g in m["groups"]:
            L += [f"### {g['name']}", ""]
            for r in g["terms"]:
                tag = " `[tool]`" if r["kind"] == "tool" else ""
                note = f"  ⚠ *{r['note']}*" if r["note"] else ""
                L.append(f"- **{r['term']}**{tag} — {r['def']}{note}")
            L.append("")
    L += ["---", "", "## Unverified", "",
          "Flagged during research and deliberately not asserted.", ""]
    for u in uncertain:
        L.append(f"- **[{u['module']}]** {u['note']}")
    L.append("")
    open(os.path.join(HERE, f"glossary-v{V}.md"), "w", encoding="utf-8").write("\n".join(L))


def e(x): return html.escape(str(x), quote=False)

def write_html(mods, meta, uncertain):
    P = []; a = P.append
    a(f"""<!doctype html><html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>AI/ML Terminology Atlas v{V} — Anvi Innovate AI Academy</title><style>
:root{{--ink:#0B1F3A;--accent:#2563EB;--surface:#f8fafc;--card:#fff;--text:#0f172a;--muted:#475569;
--border:#e2e8f0;--ok:#15803d;--warn:#b45309;--tool:#7c3aed;
--shadow:0 1px 3px rgba(15,23,42,.05),0 8px 24px rgba(15,23,42,.05);--radius:12px}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
background:var(--surface);color:var(--text);line-height:1.55;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
main{{max-width:1180px;margin:0 auto;padding:40px 24px 90px}}
h1,h2,h3{{color:var(--ink);line-height:1.22;letter-spacing:-.02em}}
h1{{font-size:2.2rem;margin:.1em 0 .2em}}
h2{{font-size:1.4rem;margin:0 0 .3em;padding-bottom:8px;border-bottom:2px solid var(--border)}}
h3{{font-size:.95rem;margin:22px 0 8px;color:var(--muted);text-transform:uppercase;letter-spacing:.05em}}
section{{margin-top:44px}} a{{color:var(--accent)}}
.hero{{background:radial-gradient(1100px 420px at 15% -25%,#1e40af 0%,#0B1F3A 62%);color:#fff;
border-radius:20px;padding:38px 32px;box-shadow:var(--shadow)}}
.hero h1{{color:#fff}} .hero p{{color:#c7d2fe;max-width:80ch;font-size:1.03rem}}
.pill{{display:inline-block;padding:3px 11px;border-radius:999px;background:#eff6ff;color:var(--accent);
font-size:12px;font-weight:600;margin:0 4px 4px 0}}
.hero .pill{{background:rgba(255,255,255,.13);color:#c7d2fe}}
.card{{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow)}}
.grid{{display:grid;gap:14px}} .g4{{grid-template-columns:repeat(4,1fr)}}
@media(max-width:900px){{.g4{{grid-template-columns:1fr 1fr}}}}
.muted{{color:var(--muted)}}
.stat b{{display:block;font-size:1.6rem;color:var(--ink);line-height:1.15}}
.stat span{{font-size:12.5px;color:var(--muted)}}
.note{{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 15px;font-size:13.4px;color:#1e3a8a;margin-top:12px}}
.warnbox{{background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:12px 15px;font-size:13.4px;color:#713f12;margin-top:12px}}
.toc{{columns:3;column-gap:26px;font-size:13.4px;margin-top:10px}}
@media(max-width:900px){{.toc{{columns:2}}}} @media(max-width:620px){{.toc{{columns:1}}}}
.toc a{{display:block;padding:3px 0;text-decoration:none}}
.bar{{position:sticky;top:0;z-index:40;background:rgba(248,250,252,.94);backdrop-filter:blur(9px);
border-bottom:1px solid var(--border);padding:12px 0;margin-top:34px}}
.bar .in{{display:flex;gap:9px;align-items:center;flex-wrap:wrap}}
#q{{flex:1;min-width:220px;padding:10px 14px;border:1px solid var(--border);border-radius:10px;
font-size:14.5px;font-family:inherit;background:#fff;color:var(--text)}}
#q:focus{{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(37,99,235,.13)}}
.fbtn{{border:1px solid var(--border);background:#fff;color:var(--muted);font-size:13px;font-weight:600;
padding:8px 14px;border-radius:999px;cursor:pointer;font-family:inherit}}
.fbtn[aria-pressed="true"]{{background:var(--ink);border-color:var(--ink);color:#fff}}
.t{{padding:7px 0 7px 2px;border-bottom:1px solid #eef2f7;font-size:14px}}
.t:last-child{{border-bottom:none}}
.t b{{color:var(--ink);font-weight:650}}
.t .k{{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;
padding:1px 6px;border-radius:4px;background:#f5f3ff;color:var(--tool);margin-left:6px;vertical-align:1px}}
.t .n{{display:block;font-size:12.4px;color:var(--warn);margin-top:2px}}
.t .x{{font-size:12px;color:var(--muted)}}
[hidden]{{display:none!important}}
.printbtn{{position:fixed;right:20px;bottom:20px;background:var(--accent);color:#fff;border:none;
padding:12px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;
box-shadow:0 8px 24px rgba(37,99,235,.35);z-index:99}}
footer{{margin-top:56px;padding-top:20px;border-top:1px solid var(--border);color:var(--muted);font-size:13px}}
@media print{{.printbtn,.bar{{display:none}}body{{background:#fff}}main{{max-width:none;padding:0}}
.card,section{{break-inside:auto}}h2{{break-after:avoid}}.toc{{columns:2}}}}
</style></head><body>
<button class="printbtn" onclick="window.print()">Save as PDF / Print</button><main>
<div class="hero">
<span class="pill">Reference</span><span class="pill">v{V}</span>
<span class="pill">{meta['terms']} terms</span>
<h1>AI/ML Terminology Atlas</h1>
<p>Every term across the curriculum, from linear algebra to agent protocols, with a one-line definition
of what it is — plus {meta['tools']} named third-party tools, products and open-source projects current
as of August 2026.</p>
</div>

<div class="grid g4" style="margin-top:20px">
<div class="card stat"><b>{meta['terms']}</b><span>unique terms across {meta['modules']} modules</span></div>
<div class="card stat"><b>{meta['concepts']}</b><span>concepts</span></div>
<div class="card stat"><b style="color:var(--tool)">{meta['tools']}</b><span>named tools and projects</span></div>
<div class="card stat"><b style="color:var(--warn)">{meta['currencyNotes']}</b><span>deprecated, renamed or discontinued</span></div>
</div>

<div class="warnbox"><strong>Currency matters more than completeness in the tool sections.</strong>
{meta['currencyNotes']} entries carry a note because the thing is deprecated, renamed, superseded or in
maintenance mode — each says what replaced it. A glossary that lists a dead project as current is worse
than one that omits it.</div>
<div class="note"><strong>{meta['unverified']} items could not be verified</strong> and are listed at the end
rather than asserted. Where a tool's maintenance status was ambiguous, no status was claimed.</div>

<section><h2>Modules</h2><div class="toc">""")
    for m in mods:
        a(f'<a href="#{m["id"]}">{e(m["name"])} <span class="muted">({m["count"]})</span></a>')
    a("""</div></section>

<div class="bar"><div class="in">
<input id="q" type="search" placeholder="Search all terms and definitions…" autocomplete="off" />
<button class="fbtn" data-k="" aria-pressed="true">All</button>
<button class="fbtn" data-k="concept" aria-pressed="false">Concepts</button>
<button class="fbtn" data-k="tool" aria-pressed="false">Tools</button>
<button class="fbtn" data-k="note" aria-pressed="false">Currency notes</button>
<span class="muted" id="count" style="font-size:13px"></span>
</div></div>""")

    for m in mods:
        a(f'<section id="{m["id"]}"><h2>{e(m["name"])}</h2>'
          f'<p class="muted" style="font-size:13.4px;margin:0">{m["count"]} terms</p>')
        for g in m["groups"]:
            a(f'<h3 class="grp">{e(g["name"])}</h3><div>')
            for r in g["terms"]:
                k = ' <span class="k">tool</span>' if r["kind"] == "tool" else ""
                n = f'<span class="n">⚠ {e(r["note"])}</span>' if r["note"] else ""
                x = (f'<span class="x"> · also in {e(", ".join(r["alsoIn"]))}</span>'
                     if r["alsoIn"] else "")
                a(f'<div class="t" data-k="{r["kind"]}" data-n="{1 if r["note"] else 0}">'
                  f'<b>{e(r["term"])}</b>{k} — {e(r["def"])}{x}{n}</div>')
            a("</div>")
        a("</section>")

    a('<section id="unverified"><h2>Unverified</h2>'
      '<p class="muted">Flagged during research and deliberately not asserted.</p><div>')
    for u in uncertain:
        a(f'<div class="t"><b>{e(u["module"])}</b> — {e(u["note"])}</div>')
    a(f"""</div></section>

<footer><strong>AI/ML Terminology Atlas v{V}</strong> · Anvi Innovate AI Academy ·
{meta['terms']} terms deduplicated from {meta['harvested']} harvested across {meta['modules']} modules.<br>
Compiled August 2026. Tool availability and maintenance status change fast — re-validate the tool sections
before each cohort.<br>
Regenerate with <code>python3 build_glossary.py</code> · hello@anviinnovate.com</footer>

<script>
(function(){{
  var rows=[].slice.call(document.querySelectorAll('.t[data-k]'));
  var q=document.getElementById('q'),count=document.getElementById('count'),kind='';
  var idx=rows.map(function(r){{return r.textContent.toLowerCase();}});
  function apply(){{
    var s=q.value.trim().toLowerCase(),n=0;
    for(var i=0;i<rows.length;i++){{
      var r=rows[i];
      var ok=(!s||idx[i].indexOf(s)>-1)&&
             (!kind||(kind==='note'?r.dataset.n==='1':r.dataset.k===kind));
      r.hidden=!ok; if(ok)n++;
    }}
    document.querySelectorAll('section[id]').forEach(function(sec){{
      var any=sec.querySelector('.t[data-k]:not([hidden])');
      if(sec.id!=='unverified') sec.hidden=!any;
    }});
    document.querySelectorAll('.grp').forEach(function(h){{
      var d=h.nextElementSibling;
      h.hidden=!(d&&d.querySelector('.t:not([hidden])'));
    }});
    count.textContent=(s||kind)?n+' of '+rows.length+' shown':rows.length+' terms';
  }}
  q.addEventListener('input',apply);
  document.querySelectorAll('.fbtn').forEach(function(b){{
    b.addEventListener('click',function(){{
      kind=b.dataset.k;
      document.querySelectorAll('.fbtn').forEach(function(o){{
        o.setAttribute('aria-pressed',String(o===b));}});
      apply();
    }});
  }});
  apply();
}})();
</script>
</main></body></html>""")
    open(os.path.join(HERE, f"glossary-v{V}.html"), "w", encoding="utf-8").write("".join(P))


if __name__ == "__main__":
    main()
