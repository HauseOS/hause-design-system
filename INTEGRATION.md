# Integration Guide — Using Hause Design System in Your Project

## Quick Start (5 minutes)

### 1. Copy Design Tokens

In your project's `tailwind.config.ts`:

```typescript
import { design-tokens } from '@hause/design-system'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: design-tokens.colors,
      typography: design-tokens.typography,
      spacing: design-tokens.spacing,
      borderRadius: design-tokens.borderRadius,
      boxShadow: design-tokens.shadows,
      transitionDuration: design-tokens.transitions,
    }
  }
}
```

### 2. Copy Component Library

Clone or reference `/components/hause/` from the design system:

```bash
# Option A: Copy components folder
cp -r ../hause-design-system/components/hause ./components/

# Option B: Use path alias in tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/ui/*": ["../hause-design-system/components/hause/*"]
    }
  }
}
```

### 3. Import in Your Code

```typescript
import { Button, Input, Card, Badge } from '@/components/ui'

export default function MyComponent() {
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

## Font Setup

Hause Design System uses three custom fonts:

1. **Almarena Neue** — Display (headings, titles)
2. **General Sans** — Sans-serif (body, UI)
3. **Boska** — Serif (quotes, callouts)

### Add to `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=...');

@font-face {
  font-family: 'Almarena Neue';
  src: url('/fonts/almarena-neue.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}

@font-face {
  font-family: 'General Sans';
  src: url('/fonts/general-sans.woff2') format('woff2');
  font-weight: 400 500 600 700;
  font-display: swap;
}

@font-face {
  font-family: 'Boska';
  src: url('/fonts/boska.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}
```

Or use Google Fonts alternatives if fonts aren't available locally.

---

## Using Components

### Button

```typescript
import { Button } from '@/components/ui'

// Variants: primary, secondary, danger, ghost
<Button variant="primary" size="md">
  Click me
</Button>

// Sizes: sm, md, lg
<Button size="lg" disabled>
  Disabled
</Button>

// Without tactile effects
<Button tactile={false}>
  Subtle
</Button>
```

### Input

```typescript
import { Input } from '@/components/ui'

<Input 
  type="email"
  placeholder="Enter email"
  disabled={false}
/>
```

### Card

```typescript
import { Card } from '@/components/ui'

<Card>
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

### Badge

```typescript
import { Badge } from '@/components/ui'

// Variants: default, primary, success, warning, error
<Badge variant="primary">
  Premium
</Badge>
```

---

## Using Animations

### From Tailwind Classes

Add to `tailwind.config.ts`:

```typescript
import { tailwindAnimations, keyframes } from '@hause/design-system/animations'

export default {
  theme: {
    extend: {
      animation: tailwindAnimations,
      keyframes: keyframes,
    }
  }
}
```

Then use in your components:

```jsx
<div className="animate-fadeIn">
  Fades in smoothly
</div>

<button className="animate-scaleIn hover:animate-glow">
  Interactive button
</button>

<div className="animate-pulse">
  Loading...
</div>
```

### From JavaScript

```typescript
import { animations } from '@hause/design-system/animations'

// Use in inline styles
<div style={{ animation: animations.fadeIn.animation }}>
  Content
</div>

// Or with CSS-in-JS
const styled = css`
  ${animations.fadeIn.keyframes}
  animation: ${animations.fadeIn.animation};
`
```

### Stagger Animation

```typescript
import { animations } from '@hause/design-system/animations'

// For list items
{items.map((item, i) => (
  <div key={i} style={animations.stagger(i, 0.1)}>
    {item}
  </div>
))}
```

---

## Dark/Light Mode

Currently, the design system is **dark-mode only**. To add light mode support:

### 1. Update `design-tokens.json`

Add light mode color definitions:

```json
{
  "colors": {
    "light": {
      "background": "#fafaf9",
      "surface": "#f5f5f3",
      "foreground": "#1a1714",
      "border": "rgba(0, 0, 0, 0.08)"
    },
    "dark": { /* existing colors */ }
  }
}
```

### 2. Use in Tailwind

```typescript
export default {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        background: 'light:var(--light-bg) dark:var(--dark-bg)'
      }
    }
  }
}
```

### 3. Add Theme Toggle

```typescript
'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
```

---

## Adding New Components

### 1. Start with ShadCN (if needed)

```bash
npx shadcn-ui@latest add [component]
```

### 2. Create Hause Wrapper

In `components/hause/NewComponent.tsx`:

```typescript
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface HauseNewComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary'
}

const NewComponent = React.forwardRef<
  HTMLDivElement,
  HauseNewComponentProps
>(({ className, variant = 'primary', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-md transition-all duration-normal',
      variant === 'primary' && 'bg-primary text-white',
      variant === 'secondary' && 'bg-surface border border-border',
      className
    )}
    {...props}
  />
))

NewComponent.displayName = 'HauseNewComponent'

export { NewComponent }
```

### 3. Export from `components/hause/index.ts`

```typescript
export { NewComponent } from './NewComponent'
export type { HauseNewComponentProps } from './NewComponent'
```

### 4. Document in Reference Site

Add example to `/app/components/new-component.tsx` on hause-design.vercel.app

---

## Migration Example: hause-partnerships

Converting an existing project to use the design system:

### Before (Inline Styles)

```typescript
<button style={{
  background: '#ff4e64',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '8px',
  transition: 'all 0.2s ease'
}}>
  Submit
</button>
```

### After (Design System)

```typescript
import { Button } from '@/components/ui'

<Button variant="primary">
  Submit
</Button>
```

**Benefits:**
- 80% less code
- Consistent across all projects
- Easy to update (change once in system, propagates everywhere)
- Better maintainability

---

## Testing Your Integration

### 1. Check Imports Work

```bash
npm run dev
# Visit http://localhost:3000 and look for errors in browser console
```

### 2. Verify Colors

Compare your project's colors to hause-design.vercel.app

### 3. Test Components

Build a simple page with Button, Input, Card, Badge

### 4. Check Responsive

Test on mobile, tablet, desktop

---

## Common Issues

### Issue: Colors Don't Match

**Solution:** Verify `tailwind.config.ts` is importing tokens correctly

```typescript
console.log(designTokens.colors) // Check in dev
```

### Issue: Fonts Not Loading

**Solution:** Ensure fonts are in `/public/fonts/` and CSS paths are correct

### Issue: Components Not Found

**Solution:** Check path alias in `tsconfig.json` or copy components folder

### Issue: Styles Overridden

**Solution:** Check Tailwind specificity, use `!important` if needed (but prefer refactoring)

---

## Reference

- **Design System Docs:** https://hause-design.vercel.app
- **Design Tokens:** `design-tokens.json`
- **Animations:** `lib/animations.ts`
- **Components:** `components/hause/`
- **Decisions:** `DECISIONS.md`

---

## Questions?

Check the design system repo or ask Aurelius in #design topic.

Happy building! 🎨
