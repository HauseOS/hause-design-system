'use client'

import designTokens from "@/design-tokens.json"

export default function SpacingPage() {
  const spacing = designTokens.spacing

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Spacing</h1>
        <p className="text-base sm:text-lg text-foreground-muted max-w-2xl">
          Our spacing system uses an 8px base unit for consistency and visual harmony across all products.
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Spacing Scale</h2>
        <div className="space-y-3 sm:space-y-4">
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-base sm:text-lg">
                  Spacing {key}
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted font-mono">{value}</p>
              </div>
              <div className="bg-surface border-l-4 border-primary" style={{ paddingLeft: value }}>
                <div className="bg-surface-hover h-12 sm:h-16 rounded" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Guide */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Visual Guide</h2>
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Padding (Internal Spacing)</h3>
            <div className="bg-background p-4 sm:p-6 space-y-3">
              <div className="bg-primary/20 border-2 border-primary p-4 sm:p-6 rounded">
                <p className="text-xs sm:text-sm text-foreground-muted">
                  Padding creates space inside an element (between content and border)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Margin (External Spacing)</h3>
            <div className="bg-background p-4 sm:p-6 space-y-3">
              <div className="m-4 sm:m-6 bg-primary/20 border-2 border-primary p-3 rounded">
                <p className="text-xs sm:text-sm text-foreground-muted">
                  Margin creates space around an element (between element and neighbors)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Gap (Space Between Items)</h3>
            <div className="bg-background p-4 sm:p-6">
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="bg-primary/20 border-2 border-primary p-3 sm:p-4 rounded">Item 1</div>
                <div className="bg-primary/20 border-2 border-primary p-3 sm:p-4 rounded">Item 2</div>
                <div className="bg-primary/20 border-2 border-primary p-3 sm:p-4 rounded">Item 3</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Usage Guidelines</h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Always Use Base Unit</h3>
            <p className="text-sm text-foreground-muted">
              Spacing should always be in multiples of 8px: 0, 4px, 8px, 16px, 24px, 32px, etc. This maintains visual consistency.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Vertical Rhythm</h3>
            <p className="text-sm text-foreground-muted">
              Use consistent vertical spacing between sections and components. This creates a breathing room and improves readability.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Responsive Spacing</h3>
            <p className="text-sm text-foreground-muted">
              On mobile, reduce spacing by one level (e.g., use 16px instead of 24px). On desktop, spacing can be more generous.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Touch Targets</h3>
            <p className="text-sm text-foreground-muted">
              Ensure interactive elements (buttons, links) have minimum 44px touch target on mobile. Use adequate padding and spacing.
            </p>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Common Patterns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base">Card Padding</h3>
            <p className="text-xs sm:text-sm text-foreground-muted">
              Use p-4 (16px) on mobile, p-6 (24px) on desktop
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base">Section Spacing</h3>
            <p className="text-xs sm:text-sm text-foreground-muted">
              Use space-y-8 (32px) on mobile, space-y-12 (48px) on desktop
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base">Grid Gap</h3>
            <p className="text-xs sm:text-sm text-foreground-muted">
              Use gap-4 (16px) on mobile, gap-6 (24px) on desktop
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
            <h3 className="font-semibold text-base">Button Height</h3>
            <p className="text-xs sm:text-sm text-foreground-muted">
              Minimum 44px on mobile (includes padding), 48px+ on desktop
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
