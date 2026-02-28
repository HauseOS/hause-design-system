# Hause Design System

**The unified design foundation for all Hause Collective products.**

Live documentation: **[hause-design.vercel.app](https://hause-design.vercel.app)**

---

## Quick Start

### Installation

```bash
npm install @hause/design-system
```

### Use in Your Project

```typescript
// tailwind.config.ts
import { hauseTheme } from '@hause/design-system'

export default {
  theme: {
    extend: hauseTheme
  }
}
```

### Import Components

```jsx
import { Button, Input, Card, Badge } from '@/components/hause'

export function MyComponent() {
  return (
    <Card>
      <h2>Welcome</h2>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

---

## What's Inside

### Design Tokens (`design-tokens.json`)
- **Colors:** Primary, semantic, grays (locked to warm aesthetic)
- **Typography:** Font families, sizes, weights, line heights
- **Spacing:** 8px base unit scale
- **Shadows:** Coral-tinted glows for brand signature
- **Transitions:** Fast (0.12s), normal (0.2s), slow (0.3s)
- **Border Radius:** Generous scale (sm → 3xl)

### Components (`/components/hause`)
- **Button** — Primary, secondary, danger variants + all states
- **Input** — Text input with focus states + validation
- **Card** — Container with hover effects
- **Badge** — Labels, tags, status indicators
- **Nav** — Navigation items with active states

### Reference Site (`/app`)
- Visual component gallery
- Code snippets (copy-paste ready)
- Typography scale
- Color palette
- Spacing system
- Usage guidelines

### Tailwind Config (`tailwind.config.ts`)
- Pre-configured with all design tokens
- Ready to extend
- Exportable for use in other projects

---

## Design Decisions (Locked)

**See [`DECISIONS.md`](./DECISIONS.md) for complete rationale.**

| Decision | What We Picked | Why |
|----------|---|---|
| **Fonts** | Almarena Neue + General Sans + Boska | Distinctive, warm, proven in partnerships page |
| **Color Tone** | Warm cream aesthetic (#ede8e3) | Human, inviting, cohesive |
| **Interactions** | Bold/tactile (scale, glow, shadows) | Responsive, modern, personality-driven |
| **Spacing** | 8px base unit | Simple, generous, industry standard |
| **Primary Color** | Coral #ff4e64 | Brand signature, proven |
| **Shadows** | Coral-tinted glows | Distinctive, reinforces brand |
| **Transitions** | 3-speed system (0.12s, 0.2s, 0.3s) | Consistent, snappy, smooth |

---

## For Different Roles

### 🎨 Designers (Eames, etc.)
- Reference `hause-design.vercel.app` for approved components
- Use `design-tokens.json` for color codes, spacing, typography
- Propose new components via GitHub issues
- Don't create design variations—use system

### 👨‍💻 Developers (Lovelace, Anders, etc.)
- Import `tailwind.config.ts` into your project
- Use `/components/hause/` components directly
- Add new components following the ShadCN pattern
- Update `design-tokens.json` if adding new colors/spacing

### 📦 Product Teams
- Check `hause-design.vercel.app` for component usage
- Copy code snippets from the reference site
- Build with system components, not custom styles
- Report issues/inconsistencies to Aurelius

---

## Directory Structure

```
hause-design-system/
├── design-tokens.json            ← Source of truth
├── tailwind.config.ts            ← Importable config
├── globals.css                   ← Base styles + interactions
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── DECISIONS.md                  ← Design decisions (locked)
├── README.md
│
├── /app                          ← Reference site (Next.js)
│   ├── page.tsx                  ← Overview
│   ├── layout.tsx
│   ├── /components               ← Component gallery
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── nav.tsx
│   ├── /typography
│   ├── /colors
│   └── /spacing
│
├── /components
│   ├── /ui                       ← ShadCN base (don't edit)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   │
│   └── /hause                    ← Hause customizations (our stuff)
│       ├── Button.tsx            ← Wraps ui/button + tokens
│       ├── Input.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Nav.tsx
│
├── /lib
│   └── utils.ts                  ← Helper functions
│
└── /scripts
    └── export-tokens.js          ← Token export utility
```

---

## Component Usage Examples

### Button
```jsx
import { Button } from '@/components/hause'

<Button variant="primary" size="lg">
  Primary Action
</Button>

<Button variant="secondary">
  Secondary
</Button>

<Button variant="danger" disabled>
  Disabled
</Button>
```

### Input
```jsx
import { Input } from '@/components/hause'

<Input 
  placeholder="Enter text"
  type="email"
/>
```

### Card
```jsx
import { Card } from '@/components/hause'

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

---

## Extending the System

### Adding a New Component

1. **Install with ShadCN** (if using Radix UI)
   ```bash
   npx shadcn-ui@latest add [component]
   ```

2. **Create Hause wrapper** in `/components/hause/NewComponent.tsx`
   ```typescript
   import { Base } from "@/components/ui/base"
   
   export const NewComponent = ({ ...props }) => {
     return (
       <Base 
         className="// Hause styling here"
         {...props}
       />
     )
   }
   ```

3. **Add to design tokens** (if new colors/spacing needed)
   ```json
   {
     "components": {
       "newComponent": { ... }
     }
   }
   ```

4. **Document in reference site** (`/app/components/new-component.tsx`)

5. **Update DECISIONS.md** if locked decisions change

---

## Customization Guide

### Using Design Tokens

All tokens are exported from `tailwind.config.ts`:

```typescript
// In your component
<div className="
  bg-primary           // Color token
  p-4                  // Spacing token
  rounded-md           // Border radius token
  transition-normal    // Transition token
  hover:shadow-lg      // Shadow token
">
  Content
</div>
```

### Creating Custom Styles

```css
/* In globals.css or component.module.css */
.custom-element {
  @apply bg-surface border border-border rounded-lg;
  @apply p-4 mb-4 transition-normal;
  @apply hover:bg-surface-hover hover:border-border-hover;
}
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server (reference site)
npm run dev

# Build for production
npm build

# Export tokens
npm run export-tokens

# Deploy to Vercel
vercel deploy --prod
```

---

## Accessibility

✅ **Contrast Ratios:** All colors meet WCAG AA standard  
✅ **Focus States:** All interactive elements have visible focus  
✅ **Touch Targets:** Buttons minimum 44px height  
✅ **Semantic HTML:** Proper heading hierarchy, labels, ARIA where needed  

See components for full WCAG compliance details.

---

## Versioning

Current version: **0.1.0 (MVP)**

- **0.1.x** — Core tokens, 5 components, reference site
- **0.2.x** (planned) — Additional components, dark/light mode toggle
- **0.3.x** (planned) — Animation library, advanced patterns
- **1.0.x** (planned) — Stable release, npm package

---

## Updating the System

**For Aurelius:** Update tokens → update config → notify projects to re-import  
**For Designers:** Propose changes via GitHub issues  
**For Developers:** Report inconsistencies, suggest new components

**Never manually edit design tokens—update `design-tokens.json` once, everything follows.**

---

## FAQ

**Q: Can I override component styles?**  
A: Yes, in your component wrapper. Never edit `/components/ui/` (ShadCN base).

**Q: What if I need a color not in the palette?**  
A: Add it to `design-tokens.json`, update DECISIONS.md, increment version.

**Q: How do I use this in an existing project?**  
A: Import `tailwind.config.ts`, set up fonts (Almarena Neue, General Sans, Boska), copy components you need.

**Q: Can I use ShadCN directly?**  
A: Use `/components/ui/` directly only if you need to—prefer the Hause wrappers for consistency.

---

## Support

- **Questions?** Check [`DECISIONS.md`](./DECISIONS.md)
- **Component issues?** Reference site at hause-design.vercel.app
- **Bugs?** GitHub issues in HauseOS/hause-design-system repo
- **New components?** Propose in GitHub discussions

---

**Built for Hause Collective | 2026**
