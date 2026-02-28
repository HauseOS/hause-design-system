import { Button, Card, Badge } from "@/components/hause"

export default function ButtonPage() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <section>
        <h1 className="font-display text-5xl font-bold mb-4">Button</h1>
        <p className="text-xl text-foreground-muted">
          Primary action element with multiple variants, sizes, and tactile interactions.
        </p>
      </section>

      {/* Variants */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Variants</h2>
        <div className="space-y-4">
          <Card className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-foreground-muted uppercase tracking-wide">
                Primary
              </h3>
              <Button variant="primary">Primary Button</Button>
            </div>
            <pre className="bg-surface p-3 rounded text-xs overflow-x-auto">
              <code>{`<Button variant="primary">Primary Button</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-foreground-muted uppercase tracking-wide">
                Secondary
              </h3>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <pre className="bg-surface p-3 rounded text-xs overflow-x-auto">
              <code>{`<Button variant="secondary">Secondary Button</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-foreground-muted uppercase tracking-wide">
                Danger
              </h3>
              <Button variant="danger">Danger Button</Button>
            </div>
            <pre className="bg-surface p-3 rounded text-xs overflow-x-auto">
              <code>{`<Button variant="danger">Danger Button</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-3 text-sm text-foreground-muted uppercase tracking-wide">
                Ghost
              </h3>
              <Button variant="ghost">Ghost Button</Button>
            </div>
            <pre className="bg-surface p-3 rounded text-xs overflow-x-auto">
              <code>{`<Button variant="ghost">Ghost Button</Button>`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Sizes</h2>
        <Card className="p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              Small
            </h3>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              Medium (Default)
            </h3>
            <Button variant="primary" size="md">
              Medium Button
            </Button>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              Large
            </h3>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
          </div>
        </Card>
      </section>

      {/* States */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">States</h2>
        <Card className="p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              Default
            </h3>
            <Button variant="primary">Hover over me →</Button>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              Disabled
            </h3>
            <Button variant="primary" disabled>
              Disabled Button
            </Button>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-foreground-muted uppercase tracking-wide">
              No Tactile Feedback
            </h3>
            <Button variant="primary" tactile={false}>
              Non-Tactile Button
            </Button>
          </div>
        </Card>
      </section>

      {/* Properties */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Properties</h2>
        <Card className="p-6">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold mb-1">variant</h3>
              <p className="text-foreground-muted">
                Button style: <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"primary"</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"secondary"</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"danger"</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"ghost"</code>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">size</h3>
              <p className="text-foreground-muted">
                Button size: <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"sm"</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"md"</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">"lg"</code>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">tactile</h3>
              <p className="text-foreground-muted">
                Enable scale/glow interactions: <code className="bg-surface px-1.5 py-0.5 rounded text-xs">true</code> (default) | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">false</code>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">disabled</h3>
              <p className="text-foreground-muted">
                Disable button: <code className="bg-surface px-1.5 py-0.5 rounded text-xs">true</code> | <code className="bg-surface px-1.5 py-0.5 rounded text-xs">false</code> (default)
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Usage</h2>
        <Card className="p-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { Button } from '@/components/hause'

export function MyComponent() {
  return (
    <div className="flex gap-3">
      <Button 
        variant="primary" 
        size="lg"
        onClick={() => console.log('clicked')}
      >
        Save Changes
      </Button>
      <Button 
        variant="secondary"
        size="lg"
      >
        Cancel
      </Button>
    </div>
  )
}`}</code>
          </pre>
        </Card>
      </section>

      {/* Guidelines */}
      <section className="space-y-6 pb-12">
        <h2 className="font-display text-3xl font-bold">Guidelines</h2>
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">When to use Primary</h3>
            <p className="text-sm text-foreground-muted">
              Use for the main call-to-action on a page. There should typically be only one primary button per section.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">When to use Secondary</h3>
            <p className="text-sm text-foreground-muted">
              Use for alternative actions or less prominent calls-to-action (Cancel, Back, etc).
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">When to use Danger</h3>
            <p className="text-sm text-foreground-muted">
              Use for destructive actions (Delete, Remove). Make sure the user confirms before executing.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Tactile Feedback</h3>
            <p className="text-sm text-foreground-muted">
              Buttons scale on hover/active by default. Disable tactile mode only if needed for minimal interactions.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
