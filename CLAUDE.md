# QueueQuest: Claude Instructions (Source of Truth)

## Product Summary
QueueQuest is a mobile-first theme park companion game hub (Kings Island edition). It contains multiple modes (Free Roam tools like Ride Roulette, Arcade minigames like DropDice, and Story Mode quests). The player can helpfully start a “Day” run/session for replayability and daily scoring, while maintaining persistent RPG-style Profile progression across all time.

Core progression model:
- **Profile (Persistent):** Level, lifetime XP, inventory, achievements, journal (lore shards), and story flags. Never resets.
- **Day Run (Daily Session):** Daily score (Points) and today’s activity log. Resets per calendar day when starting a new Day.

All gameplay actions award Points and/or XP and must be logged as Activity Events through a single shared event logger.

## Workflow Rules
- Do NOT commit or push changes unless explicitly asked.
- Commit messages should be descriptive and list key changes.
- Test changes locally before committing when possible.

## Non-Negotiables
- **Mobile-first design**: App must work on both desktop and mobile, but since it’s meant to be played in a theme park, mobile usability is the priority.
- Home screen must fit within 100vh with NO body scrolling on both mobile and desktop.
- Internal pages may scroll, but scrolling should be contained within panels/sections where possible.
- All game modes MUST log actions through ONE shared event logging function.
- **Points = daily score metric** (for Day Run and daily leaderboard explained below).
- **XP = profile leveling metric** (persistent across days).
- Do not introduce new frameworks or major refactors unless explicitly requested.
- Do not change the visual theme (purple coaster silhouette, card-based UI, clean/modern).
- "Coming Soon" modes are disabled (not clickable), clearly visually distinct, and show a lock indicator.
- Phase 1: No required GPS or camera. Those may be optional in later phases.
- Any change to core entities requires updating tests in the same PR.

## Core Entities

### UserProfile (Persistent)
- username
- avatar (predefined set, no uploads yet)
- title (cosmetic)
- level
- lifetime_xp
- lifetime_points (optional)
- inventory[] (InventoryItem)
- achievements[] (Achievement)
- journal[] (JournalEntry / Echo Shards)
- flags (key/value store for story decisions)
- stats (games played, best scores, rides completed, days started, etc.)

### DayRun (Daily Session)
- id
- date (YYYY-MM-DD local)
- start_time
- end_time (optional)
- score_points (Points total for the day)
- score_xp_today (optional; derived from events)
- completed_quest_ids_today[] (optional)
- events[] (ActivityEvent)

### ActivityEvent
- id
- timestamp
- type (string enum)
- points_awarded (int)
- xp_awarded (int)
- details (object: mode-specific payload)

## Story Mode (Phase 1 Skeleton)
Story Mode exists as a container and foundation for future quest expansion. Phase 1 requires:
- Quest Journal page (with empty state)
- Quest 0 tutorial quest ("The Park Notices You") may be hardcoded initially
- Quest step UI supporting a minimal set of step types:
  - dialogue
  - choice (sets flags)
  - trivia
  - grant/reward (awards XP/Points and unlocks journal/item)
  - requires_event (completes when a specific event is logged, such as a RideRoulette spin or DropDice bank)

Lore naming placeholders:
- Player group: **Wayfinders**
- Collectibles: **Echo Shards**
- Authority: **The Operator**
These names are editable and should not be hardcoded everywhere.

### Quest (Phase 1 structure target)
- id
- title
- summary
- steps[] (QuestStep)
- rewards (optional)
- prerequisites (optional)

### QuestStep (Phase 1)
- id
- type (dialogue | choice | trivia | grant | requires_event)
- content/prompt
- completion conditions
- effects (flags_set, rewards)

### JournalEntry
- id
- title
- text
- unlocked_at timestamp

### InventoryItem
- id
- name
- type (artifact | token | consumable | cosmetic)
- rarity (common/rare/etc.)
- acquired_at timestamp

### Achievement
- id
- name
- tier
- unlocked_at timestamp

## Points vs XP Rules
- Points contribute to the **Day Run daily score**. Points reset each day when starting a new Day.
- XP contributes to the **Profile level** and never resets.
- If no Day is active, actions may still award XP to the profile, but Points should not count toward a daily run total unless a dayRun is auto-created for today.

## Leveling
XP to next level formula:
- xp_required(level) = 100 + (level - 1) * 25

## Persistence
Phase 1 uses localStorage with a versioned schema and migration support:
- loadState()
- saveState()
- migrateStateIfNeeded()
- startToday() / startDay(date)
- getTodayDateLocal()

## UI Requirements

### Home Screen Layout
- Header: title/logo + Profile button + Start Day / End Day button + Status chip (when active).
- Main content: responsive grid for Game Modes and Mini Games.
- Coming Soon cards: disabled styling, lock icon, no hover, no navigation.
- Footer or persistent chip: shows "Day Active" with Points + XP gained today; tap opens Day Log.

### Start Day
- “Start Day” begins a new Day Run for today (or resumes today if already started).
- When Day is active, actions log to the DayRun and Points count toward the daily total.
- When no Day is active, actions still can award XP to the profile.

### Unified Header (all pages)
- Left: Logo (links to hub) + Page title (hidden on mobile)
- Right: Page-specific actions + "Back to Hub" button + Profile avatar button
- Fixed position, semi-transparent background

## Implementation Priority Order
1) Start Day / End Day flow + persistent status chip + Day Log
2) Shared event logger + unified reward plumbing (Points + XP)
3) Integrate existing modes into event logger (DropDice, RideRoulette)
4) Story Mode skeleton: Quest Journal + Quest 0 + minimal step UI
5) Additional leaderboards (Daily score) + polish

## Game Rules

### DropDice
**Objective:** Score as many points as possible and BANK before you DROP.

**Turn Flow:**
1. Roll 6 dice
2. Select and HOLD at least one scoring die
3. Choose to BANK (end game with points) or ROLL again (risk it)
4. If you roll and get NO scoring dice = DROP (lose everything)

**Scoring:**
- Single 1 = 100 pts
- Single 3 = 75 pts
- Single 5 = 50 pts
- Three of a kind = face value × 100 (three 1s = 1000)
- Four of a kind = 2× the triple score
- Five of a kind = 4× the triple score
- Six of a kind = 8× the triple score
- Three Pairs = 500 pts
- Two Triplets = 2500 pts

**End Conditions:**
- BANK: Game ends, score is saved, check leaderboard
- DROP: Game ends, score = 0, no leaderboard entry

### Ride Roulette
- Spin to get a random ride from selected category (Coasters, Flats, or All)
- Mark ride as completed to earn XP
- Track completed rides in session
- "Champion" status when all rides completed

## Challenge System (Optional / Experimental)
- Challenges = blocking pop-up tasks that must be completed or skipped
- Cooldown: minimum 3 actions between challenges
- Trigger chances: page visit (15%), game complete (25%), spin (30%)
- Complete = +10 XP, Skip = -5 XP
- Challenges can appear on all pages
If this minimizes Story Mode progress or adds too much complexity, prioritize core progression first.
