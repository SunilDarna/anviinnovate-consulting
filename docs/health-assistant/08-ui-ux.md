# 08 — UI/UX: screens, categories, navigation

Design language: extends the existing page's system (same tokens, serif headings,
teal accent, light/dark). Plain language throughout — the reading level target is
"explainable to family"; every label tested against "would a non-technical reader
know what this does?".

## 8.1 Information architecture — five categories, bottom tab bar (PWA)

| Tab | Contents | Why it exists |
|---|---|---|
| **Today** | The day at a glance: programme week/phase chip, weather+AQI chip with the plan's verdict (outdoor OK / indoors), timeline of today's sessions & meal slots each with one-tap status chips, "continue where you left off", next-action card | The habit loop. Useful with zero AI — ships in Phase 2 |
| **Ask** | Chat thread + mic (hold-to-talk) + live toggle; follow-up chips; assumption chips | The agent |
| **Plan** | The full existing document, embedded as-is, with the assistant able to deep-link into it | Single source of truth stays readable |
| **Progress** | The plan's own §12 tracking made visual: adherence %, weight 7-day line vs band, strength log, test-battery history, streaks (framed as "consistency", de-emphasized after breaks — pre-mortem: streak shame causes abandonment) | Closes the loop |
| **Settings** | Profile, diet variant, medical gates (attestation wording), memory list (view/delete corrections), devices, export/delete data, mode toggles (travel/festival/sick) | Trust and control |

## 8.2 Navigation & redirection rules

- Every agent answer that cites the plan carries a deep-link (`/#s7` style anchors
  already exist) — tapping opens the Plan tab scrolled to the section with a brief
  highlight pulse; a back chip returns to the conversation exactly where it was.
- Cross-links everywhere data implies them: a skipped-session chip offers the §3.6
  rules; the weather chip links §3.9; a recipe in Today links its card.
- URL state for everything (tab, section, thread) — refresh/share/back-button all
  behave; the PWA restores last state on open.
- Breadcrumb header inside Plan (section > subsection) with a jump menu — the
  existing left nav collapses to this on mobile.

## 8.3 Key micro-interactions

- **Status chips** (Done / Partial / Skipped) are the core control: 44 px min
  targets, one tap, instant optimistic UI, undo toast. Long-press adds a note.
- **Hold-to-talk symbol**: large circular button; press-hold records (ripple +
  timer), release sends, slide-away cancels; works with screen off in PWA where
  the platform allows.
- **Assumption chips** render as dashed pills ("assuming: morning session done —
  tap to fix"); tapping corrects AND logs.
- **Red-flag banner**: full-width, red, cannot be dismissed without choosing an
  acknowledgement option; persists across tabs until acknowledged.
- Empty states teach: first-run Today explains the chips in one line each.

## 8.4 Accessibility and performance

WCAG AA contrast in both themes (existing tokens already pass); all voice
features have full text equivalents; captions live for spoken replies; respects
reduced-motion; the assistant bundle is code-split so the public document's
load time is unchanged for signed-out readers; Lighthouse budgets: Today ≤ 200 KB
JS, TTI ≤ 3 s on a mid-range phone on 4G.
