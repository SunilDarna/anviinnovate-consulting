# Go-to-market research & positioning — permanent reference

Everything here is the evidence base for how anviinnovate.com is positioned. Read this before
changing any claim, number or headline on the site.

| File | What it is |
|---|---|
| `gtm-readiness-v1.0.html` | The full review. 225 sourced findings across 10 domains, 102 prioritised recommendations. Open in a browser; it has a print button. |
| `gtm-research-raw.json` | Machine-readable source for the above, including all 219 verification verdicts. |
| `build_report.py` | Regenerates the HTML from the JSON. |

Research run 7 October 2026. 12 agents, 10 research domains, adversarial verification on every
load-bearing number and regulatory claim.

---

## The strategic decision this produced

**The offer leads with experienced AI-native Forward Deployed Engineers, not trained freshers.**

The evidence that forced it:

- GCC fresher share fell to **16%** of planned FY27 hiring from 21%, while 1–5 year talent is **30%**
  (DQIndia GCC hiring survey, Aug 2026)
- **TCS** cut fresher offers from 44,000 hired in FY26 to **25,000 offered** for FY27 (−43%)
- **Wipro** set no FY27 fresher target at all; its CHRO conceded four consecutive years of decline
- Indeed Hiring Lab: in the most AI-exposed occupations the entry-level share of postings fell from
  **29% to 10%** between 2021 and 2026
- Harvard working paper (62m workers, 285k firms): AI adoption cut junior employment **7.7–10%** at
  adopting firms, through slower hiring rather than layoffs
- **NITI Aayog** models Indian tech services shrinking 8m → 6m by 2031, and names QA engineers and
  L1 support as facing rapid redundancy

Counter-evidence, which is why freshers remain a named second tier rather than being dropped:

- Naukri JobSpeak: India fresher hiring **+16% YoY** in FY26, AI/ML roles **+45%**
- **Cognizant** is *raising* fresher intake ~20%, stating AI makes juniors billable faster

**Read: the market is stratifying, not collapsing. Freshers are not unsellable — they are unsellable
*as freshers*.** They sell as assessed engineers deployed in a pod under an FDE.

## Who the buyer is

GCCs, confirmed by three independent sources. **71%** of professional staffing headcount at Quess
(Q1 FY27 filing), **67%** of specialised staffing revenue at TeamLease, **73%** of new mandates per ISF.

Not the Indian IT services majors — they are simultaneously cutting fresher demand and are structurally
competitors in training freshers.

## Scale reality — read this before hiring a bench

India's **largest** staffing firm runs its entire IT/digital/GCC contract business on **7,129
associates** with about **1,100 open mandates** at any time, and its professional staffing growth
collapsed from **+31% to +3% YoY** in twelve months. Gross margin ≈20–22%, converting to 6–11% EBITDA.

This is a small, concentrated, currently-flattening market. Size the bench against signed demand.

## What was removed from the site, and why

| Removed | Reason |
|---|---|
| Grand View "AI training dataset market, USD 8.60bn by 2030" | Measures data annotation, not talent. Wrong market, and smaller than India's staffing market alone. |
| "The skilled human layer behind AI" | One word from Andela's live H1, "The Human Layer Powering Production AI" (verified 7 Oct 2026). |
| "Deploy in days, not months" | Unsourced speed claim. Replaced with a commitment we can contract to. |
| Nine role tracks on the homepage | Not credible off one bench at this scale. Three lead; the rest are built to order. |
| All "fresher" / "fresh graduate" framing | See the strategic decision above. |
| Hyderabad / Telangana | Positioning is India-wide, global later. |

## Rules for anyone editing the site

1. **Every number lives in `frontend/src/data/site.js`.** Do not hardcode a figure into a page.
2. **If it is not true today, leave it `null`.** Every block checks for null and omits itself.
   The site shows nothing rather than something invented.
3. **Every market statistic carries a source and a period.** No exceptions.
4. **Do not publish a commitment that is not in the signed contract template.** `commitments.published`
   stays `false` until it is.
