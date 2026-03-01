'use client'

import designTokens from "@/design-tokens.json"

export default function ColorsPage() {
  const colors = designTokens.colors

  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Colors</h1>
        <p className="text-base sm:text-lg text-foreground-muted max-w-2xl">
          Our color palette is designed to be warm, accessible, and cohesive across all products.
        </p>
      </div>

      {/* Primary Colors */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Primary Colors</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            { name: 'Primary', value: colors.primary },
            { name: 'Primary Hover', value: colors.primaryHover },
            { name: 'Primary Active', value: colors.primaryActive },
          ].map((color) => (
            <div key={color.name} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-border shadow-md flex-shrink-0"
                style={{ backgroundColor: color.value }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg">{color.name}</h3>
                <p className="text-sm text-foreground-muted font-mono break-all">{color.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Semantic Colors</h2>
        <div className="space-y-3 sm:space-y-4">
          {Object.entries(colors.semantic).map(([key, value]) => (
            <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-border shadow-md flex-shrink-0"
                style={{ backgroundColor: value as string }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base sm:text-lg capitalize">{key}</h3>
                <p className="text-sm text-foreground-muted font-mono break-all">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grayscale */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Grayscale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {Object.entries(colors.gray).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <div
                className="w-full h-24 sm:h-28 rounded-lg border border-border shadow-sm"
                style={{ backgroundColor: value as string }}
              />
              <div className="text-center">
                <p className="text-xs sm:text-sm font-semibold">{key}</p>
                <p className="text-xs text-foreground-muted font-mono break-all">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">Usage Guidelines</h2>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Primary Color</h3>
            <p className="text-sm text-foreground-muted">
              Use #ff4e64 for calls-to-action, primary buttons, and brand accents. It's distinctive and warm.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Semantic Colors</h3>
            <p className="text-sm text-foreground-muted">
              Use semantic colors consistently: green for success, red for errors, orange for warnings, blue for info.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-4 sm:p-6 space-y-2">
            <h3 className="font-semibold text-base sm:text-lg">Contrast & Accessibility</h3>
            <p className="text-sm text-foreground-muted">
              All color combinations meet WCAG AA standards. Never rely on color alone to convey meaning.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
