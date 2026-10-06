# 01 — Product definition

## What this is

A personal health coach agent ("Sana") embedded in health.anviinnovate.com. It has
three kinds of awareness and three interaction modes, and it exists to answer one
family of questions well: *"given the plan, my history, and this exact moment — what
should I do?"*

## Who it is for

One primary user today (the plan's subject), designed multi-user from day one because
login, per-user data and guardrails are the same work either way. Family members can
sign in and get their own profile against the same plan library later.

## The three awarenesses

| Awareness | Meaning | Source |
|---|---|---|
| **Plan-aware** | Knows every section of the 45-Year Blueprint: the 12-week calendar, every session's exercises, every meal slot's recipe, the rules (2-for-2, deload triggers, neck check), the guardrail sections (§15) | `plan.json` compiled from the HTML — see 03 |
| **Time-aware** | Knows the clock time, the day of week, which programme week (1–12) and phase the user is in, what today's sessions/meals are, what has already been logged today, festival/travel mode | Client clock + programme start date + adherence log |
| **Place-aware** | Knows the user is in Hyderabad (or travelling), current weather and AQI, and applies the plan's own season rules (§3.9: AQI >150 → move training indoors; summer → hydration up) | Opt-in geolocation + free weather/AQI APIs |

## The three interaction modes

| Mode | How it works | When it shines |
|---|---|---|
| **Chat** | Text box, streamed answers, tappable follow-up chips | Desk, office, detailed questions |
| **Hold-to-talk** | Press and hold the mic symbol; speak; release; the audio is transcribed, processed, and the answer is spoken back and shown as text | Kitchen (wet hands), between sets, walking |
| **Live voice** | Continuous two-way conversation with barge-in (user can interrupt the agent mid-sentence) | Guided warm-ups, cooking a recipe step-by-step, weekly review conversation |

Mode is a per-message choice, not a setting. The mic symbol sits next to the text box;
holding it is mode 2; the "live" toggle starts mode 3.

## The canonical interaction (specification, not sample)

User asks a "what now?" class question at any time of day. Required behaviour:

1. The context engine resolves *today's plan state* before the model sees anything:
   which sessions were scheduled, which are logged done/skipped, which meal slot is
   nearest, what the weather/AQI permits.
2. If exactly one piece of information would change the answer and is unlogged
   (e.g. the 06:00 session has no log entry), the agent asks **one** question with
   one-tap answer chips — *Done / Partial / Skipped* — or answers anyway under a
   stated assumption if the user has previously ignored such questions twice.
3. The answer must: name the next concrete action from the plan, say why in one
   sentence, respect the plan's own conflict rules (§9.4), respect place rules
   (§3.9), and deep-link to the exact plan section.
4. The answer is logged as a suggestion; if the user taps "did it", it becomes an
   adherence entry — closing the loop without a form.

## Beyond Q&A — the enhancement set (added in revision 3)

- **Weekly review co-pilot**: on the plan's own monthly/weekly review ritual (§9.5),
  the agent pre-fills the review from logged data and walks through it by voice.
- **Assumption chips**: every assumed fact is visible and tappable to correct —
  corrections are remembered permanently (see 06, personalization memory).
- **Travel / festival / sick modes**: one tap switches the schedule engine to the
  plan's own fallback rules (§3.6, §5.5) instead of guilt-tripping about misses.
- **Season engine**: the plan's Hyderabad climate table (§3.9) is enforced by data:
  the agent checks AQI before ever recommending an outdoor session in winter.
- **Doctor-visit awareness**: the pending blood panel and physician clearance are
  first-class state. Until "cleared for intervals" is true, the agent refuses to
  coach Week-6+ interval sessions and says exactly why (§7 of this plan).
- **Weight-trend watcher**: implements the plan's ±250 kcal decision rule (§12.3)
  on the 7-day rolling average and raises it at the weekly review — never daily.

## Explicit non-goals (v1)

- No medical diagnosis, prescription, dosing, or supplement recommendations — ever
  (guardrailed, see 07). No wearable integrations (phase 8+ candidate). No public
  chatbot for site visitors: assistant requires login. No native app — PWA only.
