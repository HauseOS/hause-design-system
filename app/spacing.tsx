export default function SpacingPage() {
  const spacingScale = [
    { name: "0", value: "0" },
    { name: "1", value: "0.5rem (8px)" },
    { name: "2", value: "1rem (16px)" },
    { name: "3", value: "1.5rem (24px)" },
    { name: "4", value: "2rem (32px)" },
    { name: "6", value: "3rem (48px)" },
    { name: "8", value: "4rem (64px)" },
  ]

  return (
    <div className="max-w-4xl space-y-12">
      <section>
        <h1 className="font-display text-5xl font-bold mb-4">Spacing</h1>
        <p className="text-xl text-foreground-muted">
          Consistent spacing scale based on 8px base unit. Used for padding, margins, gaps, and layout.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Spacing Scale</h2>
        <div className="space-y-6">
          {spacingScale.map(({ name, value }) => (
            <div key={name} className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">Spacing {name}</p>
                  <p className="text-sm text-foreground-muted">{value}</p>
                </div>
              </div>
              <div className="bg-surface border border-border rounded p-4 flex items-center">
                <div
                  className="bg-primary rounded"
                  style={{
                    width:
                      name === "0"
                        ? "0"
                        : name === "1"
                          ? "8px"
                          : name === "2"
                            ? "16px"
                            : name === "3"
                              ? "24px"
                              : name === "4"
                                ? "32px"
                                : name === "6"
                                  ? "48px"
                                  : "64px",
                    height: "8px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl font-bold">Usage</h2>
        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Padding</h3>
            <p className="text-sm text-foreground-muted mb-4">
              Internal spacing within components
            </p>
            <pre className="bg-background p-3 rounded text-xs overflow-x-auto">
              <code>{`<div className="p-4">Content with 2rem padding</div>
<div className="px-6 py-3">Content with 3rem horizontal, 1.5rem vertical</div>`}</code>
            </pre>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Margin</h3>
            <p className="text-sm text-foreground-muted mb-4">
              External spacing around components
            </p>
            <pre className="bg-background p-3 rounded text-xs overflow-x-auto">
              <code>{`<div className="mb-6">Content with 3rem margin bottom</div>
<div className="mt-4">Content with 2rem margin top</div>`}</code>
            </pre>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Gap</h3>
            <p className="text-sm text-foreground-muted mb-4">
              Spacing between flex/grid items
            </p>
            <pre className="bg-background p-3 rounded text-xs overflow-x-auto">
              <code>{`<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-6 pb-12">
        <h2 className="font-display text-3xl font-bold">Grid System</h2>
        <div className="space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-sm text-foreground-muted mb-4">
              Base unit: <strong>8px</strong>
            </p>
            <p className="text-sm text-foreground-muted mb-6">
              All spacing values are multiples of 8px, creating a predictable, breathing layout system.
            </p>
            <div className="space-y-3">
              <div className="bg-primary/20 border border-primary/50 rounded p-4">
                <p className="text-xs font-mono text-foreground-muted">8px (1 unit)</p>
              </div>
              <div className="bg-primary/20 border border-primary/50 rounded p-4" style={{ width: "32px" }} />
              <div className="bg-primary/20 border border-primary/50 rounded p-4" style={{ width: "64px" }} />
              <div className="bg-primary/20 border border-primary/50 rounded p-4" style={{ width: "128px" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
