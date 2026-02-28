export default function TypographyPage() {
  return (
    <div className="max-w-4xl space-y-12">
      <section>
        <h1 className="font-display text-5xl font-bold mb-4">Typography</h1>
        <p className="text-xl text-foreground-muted">
          Font families, sizes, weights, and line heights for Hause products.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Font Families</h2>
        <div className="space-y-6">
          <div className="p-6 bg-surface border border-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-3">
              Display / Titles
            </h3>
            <p style={{ fontFamily: "'Almarena Neue', sans-serif" }} className="text-4xl font-bold mb-2">
              Almarena Neue
            </p>
            <p className="text-sm text-foreground-muted">
              Used for: H1, H2, H3, headings, titles
            </p>
          </div>

          <div className="p-6 bg-surface border border-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-3">
              Sans / Body
            </h3>
            <p style={{ fontFamily: "'General Sans', sans-serif" }} className="text-2xl font-bold mb-2">
              General Sans
            </p>
            <p className="text-sm text-foreground-muted">
              Used for: Body text, labels, UI copy
            </p>
          </div>

          <div className="p-6 bg-surface border border-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-3">
              Serif / Quotes
            </h3>
            <p style={{ fontFamily: "'Boska', serif" }} className="text-xl font-bold mb-2">
              Boska
            </p>
            <p className="text-sm text-foreground-muted">
              Used for: Quotes, callouts, special emphasis
            </p>
          </div>

          <div className="p-6 bg-surface border border-border rounded-lg">
            <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wide mb-3">
              Monospace / Code
            </h3>
            <p style={{ fontFamily: "'Monaco', monospace" }} className="text-lg mb-2">
              Monaco
            </p>
            <p className="text-sm text-foreground-muted">
              Used for: Code snippets, technical text
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Heading Scale</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">H1 - 3rem</p>
            <h1 className="text-5xl font-bold">This is a heading 1</h1>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">H2 - 2rem</p>
            <h2 className="text-4xl font-bold">This is a heading 2</h2>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">H3 - 1.875rem</p>
            <h3 className="text-3xl font-bold">This is a heading 3</h3>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">H4 - 1.5rem</p>
            <h4 className="text-2xl font-bold">This is a heading 4</h4>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">H5 - 1.25rem</p>
            <h5 className="text-xl font-bold">This is a heading 5</h5>
          </div>
        </div>
      </section>

      <section className="space-y-6 pb-12">
        <h2 className="font-display text-3xl font-bold">Font Weights</h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">Regular - 400</p>
            <p className="font-normal text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">Medium - 500</p>
            <p className="font-medium text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">Semibold - 600</p>
            <p className="font-semibold text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground-muted uppercase mb-2">Bold - 700</p>
            <p className="font-bold text-lg">The quick brown fox jumps over the lazy dog</p>
          </div>
        </div>
      </section>
    </div>
  )
}
