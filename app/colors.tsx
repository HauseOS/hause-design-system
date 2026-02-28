import tokens from "@/design-tokens.json"

export default function ColorsPage() {
  const colors = tokens.colors

  return (
    <div className="max-w-4xl space-y-12">
      <section>
        <h1 className="font-display text-5xl font-bold mb-4">Colors</h1>
        <p className="text-xl text-foreground-muted">
          Color palette with dark mode variants. All colors meet WCAG AA contrast requirements.
        </p>
      </section>

      {/* Primary */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Primary</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.primary }}
            />
            <div>
              <p className="font-semibold">Primary</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.primary}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.primaryHover }}
            />
            <div>
              <p className="font-semibold">Primary Hover</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.primaryHover}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.primaryActive }}
            />
            <div>
              <p className="font-semibold">Primary Active</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.primaryActive}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Backgrounds */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Backgrounds</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.background }}
            />
            <div>
              <p className="font-semibold">Background</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.background}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.surface }}
            />
            <div>
              <p className="font-semibold">Surface</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.surface}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.surfaceHover }}
            />
            <div>
              <p className="font-semibold">Surface Hover</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.surfaceHover}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic */}
      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Semantic Colors</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.semantic.success }}
            />
            <div>
              <p className="font-semibold">Success</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.semantic.success}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.semantic.warning }}
            />
            <div>
              <p className="font-semibold">Warning</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.semantic.warning}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.semantic.error }}
            />
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.semantic.error}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-32 h-24 rounded-lg border border-border"
              style={{ backgroundColor: colors.semantic.info }}
            />
            <div>
              <p className="font-semibold">Info</p>
              <p className="text-sm text-foreground-muted font-mono">{colors.semantic.info}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gray Palette */}
      <section className="space-y-6 pb-12">
        <h2 className="font-display text-3xl font-bold">Gray Palette</h2>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(colors.gray).map(([name, hex]) => (
            <div key={name} className="flex items-center gap-3">
              <div
                className="w-16 h-16 rounded-lg border border-border flex-shrink-0"
                style={{ backgroundColor: hex }}
              />
              <div className="min-w-0">
                <p className="font-semibold text-sm">Gray {name}</p>
                <p className="text-xs text-foreground-muted font-mono truncate">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
