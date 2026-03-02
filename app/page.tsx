import { Button, Card, Badge } from "@/components/hause"

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <section className="space-y-3 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hause Design System
        </h1>
        <p className="text-base sm:text-lg text-foreground-muted max-w-2xl leading-relaxed">
          The unified design foundation for all Hause Collective products. Built with warm aesthetics, bold interactions, and agent-friendly components.
        </p>
      </section>

      {/* Key Features */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-4xl font-bold">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Design Tokens</h3>
            <p className="text-sm sm:text-base text-foreground-muted">
              Locked colors, typography, spacing, and interactions. Everything is documented in <code className="bg-surface px-2 py-1 rounded text-xs sm:text-sm">design-tokens.json</code>.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Tailwind Config</h3>
            <p className="text-sm sm:text-base text-foreground-muted">
              Ready-to-import Tailwind configuration. All tokens are pre-configured and exportable to other projects.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Components</h3>
            <p className="text-sm sm:text-base text-foreground-muted">
              Core components built with ShadCN patterns. Customized with Hause brand tokens and bold/tactile interactions.
            </p>
          </Card>

          <Card className="p-4 sm:p-6">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Reference Site</h3>
            <p className="text-sm sm:text-base text-foreground-muted">
              Live documentation with visual examples, code snippets, and usage guidelines for all components.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Quick Start</h2>
        
        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-semibold text-base sm:text-lg">Installation</h3>
          <pre className="bg-surface p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm border border-border">
            <code className="text-foreground">{`npm install @hause/design-system`}</code>
          </pre>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-semibold text-base sm:text-lg">Setup Tailwind</h3>
          <pre className="bg-surface p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm border border-border">
            <code className="text-foreground">{`// tailwind.config.ts
import { 
  hauseTheme 
} from '@hause/design-system'

export default {
  theme: { 
    extend: hauseTheme 
  }
}`}</code>
          </pre>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-semibold text-base sm:text-lg">Use Components</h3>
          <pre className="bg-surface p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm border border-border">
            <code className="text-foreground">{`import { 
  Button, 
  Card 
} from '@/components/hause'

<Button variant="primary">
  Click me
</Button>
<Card>Card content</Card>`}</code>
          </pre>
        </div>
      </section>

      {/* Component Preview */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Component Preview</h2>
        
        <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Buttons */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Buttons</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button variant="primary" size="sm" className="text-xs sm:text-sm">Primary</Button>
              <Button variant="secondary" size="sm" className="text-xs sm:text-sm">Secondary</Button>
              <Button variant="danger" size="sm" className="text-xs sm:text-sm">Danger</Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Ghost</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Badges</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Button Sizes</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Next Steps</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Explore Components</h3>
            <p className="text-sm text-foreground-muted">Check out all available components including Button, Input, Card, Badge, Modal, and Tabs.</p>
            <a href="/components/button" className="text-primary hover:text-primary-hover text-sm font-medium">
              View components →
            </a>
          </Card>

          <Card className="p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Design Tokens</h3>
            <p className="text-sm text-foreground-muted">Learn about our color palette, typography scale, spacing system, and more.</p>
            <a href="/colors" className="text-primary hover:text-primary-hover text-sm font-medium">
              View tokens →
            </a>
          </Card>

          <Card className="p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">Integration Guide</h3>
            <p className="text-sm text-foreground-muted">See INTEGRATION.md for step-by-step setup instructions and usage examples for your project.</p>
            <a href="https://github.com/HauseOS/hause-design-system/blob/main/INTEGRATION.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover text-sm font-medium">
              Read guide →
            </a>
          </Card>

          <Card className="p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base sm:text-lg">GitHub Repository</h3>
            <p className="text-sm text-foreground-muted">Access the source code, report issues, and contribute to the design system.</p>
            <a href="https://github.com/HauseOS/hause-design-system" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover text-sm font-medium">
              Visit GitHub →
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border pt-6 sm:pt-8 mt-8 sm:mt-12">
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-foreground-muted">
            Hause Design System v0.2.0
          </p>
          <p className="text-xs sm:text-sm text-foreground-muted">
            Built with ❤️ for Hause Collective
          </p>
        </div>
      </section>
    </div>
  )
}
