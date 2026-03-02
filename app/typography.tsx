'use client'

import designTokens from "@/design-tokens.json"

export default function TypographyPage() {
  const typography = designTokens.typography

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Typography</h1>
        <p className="text-base sm:text-lg text-foreground-muted max-w-2xl">
          Our typography system combines distinctive display fonts with clean, readable sans-serif for a warm and modern aesthetic.
        </p>
      </div>

      {/* Font Families */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Font Families</h2>
        <div className="space-y-4 sm:space-y-6">
          {Object.entries(typography.fontFamily).map(([key, value]) => (
            <div key={key} className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
              <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
              <div style={{ fontFamily: value as string }} className="text-2xl sm:text-3xl">
                The quick brown fox jumps over the lazy dog
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted font-mono break-all">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Font Sizes</h2>
        <div className="space-y-3 sm:space-y-4">
          {Object.entries(typography.fontSize).map(([key, value]) => {
            let size = '16px'
            if (typeof value === 'string') {
              size = value
            } else if (Array.isArray(value)) {
              size = String(value[0])
            }
            const lineHeight = 'normal'
            return (
              <div key={key} className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
                  <p className="text-xs sm:text-sm text-foreground-muted font-mono">{size}, line-height: {lineHeight}</p>
                </div>
                <div style={{ fontSize: size }}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Font Weights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(typography.fontWeight).map(([key, value]) => (
            <div key={key} className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
              <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
              <div style={{ fontWeight: value as number }} className="text-2xl">
                The quick brown fox
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Line Heights</h2>
        <div className="space-y-4 sm:space-y-6">
          {Object.entries(typography.lineHeight).map(([key, value]) => (
            <div key={key} className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
                <p className="text-xs sm:text-sm text-foreground-muted">{value}</p>
              </div>
              <div style={{ lineHeight: value as number }} className="text-base">
                <p>The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate line height.</p>
                <p className="mt-2">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Letter Spacing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(typography.letterSpacing).map(([key, value]) => (
            <div key={key} className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
              <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
              <div style={{ letterSpacing: value as string }} className="text-lg">
                THE QUICK BROWN FOX
              </div>
              <p className="text-xs sm:text-sm text-foreground-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Usage Guidelines</h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Display Font (Almarena Neue)</h3>
            <p className="text-sm text-foreground-muted">
              Use for headings (H1-H3), titles, and brand accents. Creates visual hierarchy and personality.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Sans-Serif Font (General Sans)</h3>
            <p className="text-sm text-foreground-muted">
              Use for body text, buttons, and UI elements. Clean, modern, and highly readable.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Serif Font (Boska)</h3>
            <p className="text-sm text-foreground-muted">
              Use for quotes, callouts, and special content. Adds elegance and distinction.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Monospace Font (Monaco)</h3>
            <p className="text-sm text-foreground-muted">
              Use for code blocks, technical documentation, and data display.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
