export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-5xl font-bold">Components</h1>
      <p className="text-lg text-foreground-muted">
        Select a component from the sidebar to view its documentation, variants, and usage examples.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors">
          <h3 className="font-display text-xl font-bold mb-2">Button</h3>
          <p className="text-sm text-foreground-muted mb-4">
            Primary action element with multiple variants and sizes.
          </p>
          <a href="/components/button" className="text-primary hover:underline text-sm font-medium">
            View Button →
          </a>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors">
          <h3 className="font-display text-xl font-bold mb-2">Input</h3>
          <p className="text-sm text-foreground-muted mb-4">
            Form input with focus states and validation.
          </p>
          <a href="/components/input" className="text-primary hover:underline text-sm font-medium">
            View Input →
          </a>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors">
          <h3 className="font-display text-xl font-bold mb-2">Card</h3>
          <p className="text-sm text-foreground-muted mb-4">
            Container with hover effects and structured layout.
          </p>
          <a href="/components/card" className="text-primary hover:underline text-sm font-medium">
            View Card →
          </a>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors">
          <h3 className="font-display text-xl font-bold mb-2">Badge</h3>
          <p className="text-sm text-foreground-muted mb-4">
            Labels, tags, and status indicators.
          </p>
          <a href="/components/badge" className="text-primary hover:underline text-sm font-medium">
            View Badge →
          </a>
        </div>
      </div>
    </div>
  )
}
