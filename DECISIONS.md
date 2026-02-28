# Design System Decisions — Phase 1 Foundation

**Date:** 2026-02-28  
**Status:** LOCKED  
**Owner:** Aurelius (with Yeeling oversight)

---

## Decision 1: Font Stack ✅
**Locked:** Almarena Neue (display) + General Sans (sans) + Boska (serif)

**Why:**
- **Almarena Neue** — Distinctive, memorable, used as our decorative title font (Yeeling's direction)
- **General Sans** — Already proven in partnerships page; modern, clean, distinctive character
- **Boska** — Warmer than Crimson, matches the aesthetic tone of partnerships page
- **Monaco** — Code/monospace (standard)

**Usage:**
- Display fonts (H1-H6): Almarena Neue
- Body copy: General Sans
- Quotes/callouts: Boska (optional)
- Code: Monaco

---

## Decision 2: Color Warmth ✅
**Locked:** Warm cream aesthetic

**Foreground:** #ede8e3 (warm cream, not neutral white #f5f5f5)  
**Surface:** #100e0c (warm dark, not cool black #0f0f0f)  
**Borders:** rgba(255, 240, 220, ...) [warm tint, not neutral white]

**Why:**
- Partnerships page proved this works visually and emotionally
- Warm cream feels more _human_ than neutral white — less sterile
- Almarena Neue + General Sans + warm tones = cohesive brand identity
- Warm dark surfaces feel inviting, not harsh

---

## Decision 3: Interaction Style ✅
**Locked:** Bold/Tactile

**Button Hover:**
- Scale: 1.02 (subtle grow)
- Shadow: Add glow effect
- Timing: 0.12s cubic-bezier (snappy)

**Button Active:**
- Scale: 0.96 (pressed)
- Shadow: Reduce
- Timing: Instant

**Card Hover:**
- Translate: -2px (lift)
- Border: Lighter
- Background: Slight increase

**Input Focus:**
- Border: Accent color (#ff4e64)
- Shadow: Glow with accent tint
- Outline: None (cleaner)

**Why:**
- Partnerships page is already bold/tactile — this codifies that pattern
- Gives products "personality" and "responsiveness"
- Agents will copy this pattern for consistency
- Modern web expectation — users love tactile feedback

---

## Decision 4: Spacing Base Unit ✅
**Locked:** 8px base scale

**Scale:** 0, 0.5rem (4px), 1rem (8px), 1.5rem (12px), 2rem (16px), 3rem (24px), 4rem (32px), 5rem (40px), 6rem (48px), 8rem (64px)

**Why:**
- Industry standard (Material Design, Tailwind default)
- Simple mental model for agents ("multiply by 8")
- Easier than 4px base (too many options)
- Breathing room: generous padding/margins throughout

---

## Decision 5: Gray Palette ✅
**Locked:** 10-level gray system

| Level | Hex | Usage |
|-------|-----|-------|
| 50 | #fafaf9 | Lightest backgrounds (rarely used) |
| 100 | #f5f5f3 | Hover states |
| 200 | #ede8e3 | **Foreground/primary text** |
| 300 | #d4cfc7 | Secondary text |
| 400 | #a89f96 | Placeholder/muted text |
| 500 | #8b8178 | Disabled text |
| 600 | #6b6460 | **Foreground muted (existing)** |
| 700 | #544d45 | Borders |
| 800 | #3d3632 | Dark surfaces |
| 900 | #1a1714 | Darkest |

**Why:**
- Derived from partnerships page existing palette
- 10 levels = flexibility for future patterns
- Warm tones throughout (consistent with brand)

---

## Decision 6: Primary Accent ✅
**Locked:** Coral #ff4e64 + Variants

- **Primary:** #ff4e64
- **Hover:** #ff6b7d (lighter, used for hover states)
- **Active:** #ff3a4f (darker, used for pressed states)

**Why:**
- Both products already use this — no argument needed
- Signature Hause color
- Works well on dark backgrounds
- Good contrast ratio (accessibility ✓)

---

## Decision 7: Secondary Colors ✅
**Locked:** Minimal semantic palette

- **Success:** #10b981 (green)
- **Warning:** #f59e0b (amber)
- **Error:** #ef4444 (red)
- **Info:** #3b82f6 (blue)

**Why:**
- Standard across products
- Used for alerts, form validation, status indicators
- Can expand later if needed

---

## Decision 8: Border Radius ✅
**Locked:** Multi-level scale

| Level | Value | Usage |
|-------|-------|-------|
| sm | 0.375rem (6px) | Small elements, inputs |
| base | 0.5rem (8px) | Buttons |
| md | 0.75rem (12px) | Cards, containers |
| lg | 1rem (16px) | Large cards |
| xl | 1.25rem (20px) | Modals, large surfaces |
| 2xl | 1.5rem (24px) | Hero sections |
| 3xl | 2rem (32px) | Oversized elements |
| full | 9999px | Pills, circles |

**Why:**
- Gives options without overwhelming
- Modern aesthetic (not corners everywhere)
- Partnerships page already uses generous radius

---

## Decision 9: Shadows ✅
**Locked:** Glow-based shadow system

- **none:** No shadow
- **sm:** Subtle (1px, dark)
- **base:** Standard (4-6px, dark)
- **md:** Medium (10-15px, dark)
- **lg:** Large (10-25px, **coral-tinted**)
- **xl:** Extra large (15-30px, **coral-tinted**)
- **glow:** Soft glow (20px, coral, 0.2 opacity)
- **glowLg:** Large glow (40px, coral, 0.3 opacity)

**Why:**
- Coral-tinted shadows on primary elements = brand signature
- Dark shadows on regular elements = contrast
- Glow effects = tactile, bold interactions
- Pairs with scale/hover effects for depth

---

## Decision 10: Transitions ✅
**Locked:** Three-speed system

| Speed | Duration | Easing | Usage |
|-------|----------|--------|-------|
| fast | 0.12s | cubic-bezier(0.34, 1.56, 0.64, 1) | Button clicks, immediate feedback |
| normal | 0.2s | ease | Hover states, border colors |
| slow | 0.3s | ease | Page transitions, reveals |

**Why:**
- Fast = snappy, responsive (feels good)
- Normal = subtle, smooth (feels professional)
- Slow = dramatic (used sparingly)
- Predictable for agents to follow

---

## What's NOT Locked (Emergent)

- [ ] Component depths (how many card variants, button sizes, etc.)
- [ ] Animation library (can add keyframes as patterns emerge)
- [ ] Accessibility specs (WCAG guidelines come later)
- [ ] Responsive breakpoints (use Tailwind defaults for now)
- [ ] Dark/light mode toggle (dark only for MVP, light comes later)

---

## For Future Agents

**If you're Eames or Lovelace:**
- This foundation is LOCKED. Don't change colors, fonts, or spacing without asking.
- You can add _new_ components using these tokens.
- If you need a new color/spacing, propose it + lock it to this file.
- The reference site (hause-design.vercel.app) shows examples for everything.

**If you're building a new product:**
- Import `tailwind.config.ts` from this repo
- Use components from `/components/hause/`
- Reference `hause-design.vercel.app` for guidelines
- Build, don't invent design

---

## Phase 1 Summary

✅ **LOCKED:** 10 major design decisions  
✅ **DOCUMENTED:** design-tokens.json with full specs  
✅ **CONFIGURED:** tailwind.config.ts ready to import  
✅ **STYLED:** globals.css with base + interactions  
✅ **FOUNDATIONAL:** Ready for Phase 2 (components)

**Next:** Build ShadCN components + Hause customizations (Phase 2)
