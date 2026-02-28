import { Button, Card, Badge } from "@/components/hause"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <section>
        <h1 className="font-display text-6xl font-bold mb-4">Hause Design System</h1>
        <p className="text-xl text-foreground-muted max-w-2xl">
          The unified design foundation for all Hause Collective products. Built with warm aesthetics, bold interactions, and agent-friendly components.
        </p>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-bold">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-2">Design Tokens</h3>
            <p className="text-foreground-muted">
              Locked colors, typography, spacing, and interactions. Everything is documented in <code className="bg-surface px-2 py-1 rounded text-sm">design-tokens.json</code>.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-2">Tailwind Config</h3>
            <p className="text-foreground-muted">
              Ready-to-import Tailwind configuration. All tokens are pre-configured and exportable to other projects.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-2">Components</h3>
            <p className="text-foreground-muted">
              Core components built with ShadCN patterns. Customized with Hause brand tokens and bold/tactile interactions.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-xl font-bold mb-2">Reference Site</h3>
            <p className="text-foreground-muted">
              Live documentation with visual examples, code snippets, and usage guidelines for all components.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-bold">Quick Start</h2>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Installation</h3>
          <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`npm install @hause/design-system`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Setup Tailwind</h3>
          <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// tailwind.config.ts
import { hauseTheme } from '@hause/design-system'

export default {
  theme: { extend: hauseTheme }
}`}</code>
          </pre>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Use Components</h3>
          <pre className="bg-surface p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`import { Button, Card } from '@/components/hause'

<Button variant="primary">Click me</Button>
<Card>Card content</Card>`}</code>
          </pre>
        </div>
      </section>

      {/* Component Preview */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-bold">Component Preview</h2>
        
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold mb-3">Buttons</h3>
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Badges</h3>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* Design Decisions */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-bold">Design Decisions</h2>
        <p className="text-foreground-muted">
          All design decisions are locked and documented. Read <a href="https://github.com/HauseOS/hause-design-system/blob/main/DECISIONS.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DECISIONS.md</a> for the full rationale.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface p-4 rounded-lg">
            <Badge variant="default" className="mb-2">Fonts</Badge>
            <p className="text-sm text-foreground-muted">
              <strong>Display:</strong> Almarena Neue<br/>
              <strong>Sans:</strong> General Sans<br/>
              <strong>Serif:</strong> Boska
            </p>
          </div>

          <div className="bg-surface p-4 rounded-lg">
            <Badge variant="default" className="mb-2">Colors</Badge>
            <p className="text-sm text-foreground-muted">
              <strong>Primary:</strong> #ff4e64 (Coral)<br/>
              <strong>Tone:</strong> Warm cream (#ede8e3)<br/>
              <strong>Theme:</strong> Dark first
            </p>
          </div>

          <div className="bg-surface p-4 rounded-lg">
            <Badge variant="default" className="mb-2">Spacing</Badge>
            <p className="text-sm text-foreground-muted">
              <strong>Base:</strong> 8px unit scale<br/>
              <strong>Generous:</strong> Breathing room<br/>
              <strong>Flexible:</strong> 0 → 16rem
            </p>
          </div>

          <div className="bg-surface p-4 rounded-lg">
            <Badge variant="default" className="mb-2">Interactions</Badge>
            <p className="text-sm text-foreground-muted">
              <strong>Style:</strong> Bold/tactile<br/>
              <strong>Speed:</strong> 0.12s, 0.2s, 0.3s<br/>
              <strong>Feedback:</strong> Scale, shadow, glow
            </p>
          </div>
        </div>
      </section>

      {/* For Agents */}
      <section className="space-y-6">
        <h2 className="font-display text-4xl font-bold">For Agents & Team</h2>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Designers</h3>
          <p className="text-foreground-muted">
            Reference this site for approved components. Use design tokens for colors, spacing, and typography. Propose new components via GitHub issues.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Developers</h3>
          <p className="text-foreground-muted">
            Import <code className="bg-surface px-2 py-1 rounded text-sm">tailwind.config.ts</code>, use components from <code className="bg-surface px-2 py-1 rounded text-sm">@/components/hause</code>, follow ShadCN patterns for new components.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Product Teams</h3>
          <p className="text-foreground-muted">
            Check the reference site for component usage. Copy code snippets directly. Build with system components, not custom styles.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-6 py-12 border-t border-border">
        <h2 className="font-display text-4xl font-bold">Ready to Build?</h2>
        <p className="text-lg text-foreground-muted">
          Browse components, explore design decisions, and start building with Hause.
        </p>
        <div className="flex gap-3">
          <Button variant="primary" size="lg">Explore Components</Button>
          <Button variant="secondary" size="lg">View on GitHub</Button>
        </div>
      </section>
    </div>
  )
}
