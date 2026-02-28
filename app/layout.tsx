import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Hause Design System",
  description: "Design tokens and components for Hause Collective",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen">
          {/* Sidebar Navigation */}
          <nav className="w-64 border-r border-border bg-surface p-6 sticky top-0 h-screen overflow-y-auto">
            <div className="mb-8">
              <h1 className="font-display text-2xl font-bold text-primary">
                Hause
              </h1>
              <p className="text-sm text-foreground-muted">Design System</p>
            </div>

            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
                  Getting Started
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Overview
                    </a>
                  </li>
                </ul>
              </div>

              {/* Components */}
              <div>
                <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
                  Components
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/components/button"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Button
                    </a>
                  </li>
                  <li>
                    <a
                      href="/components/input"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Input
                    </a>
                  </li>
                  <li>
                    <a
                      href="/components/card"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="/components/badge"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Badge
                    </a>
                  </li>
                </ul>
              </div>

              {/* Design */}
              <div>
                <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
                  Design
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/typography"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Typography
                    </a>
                  </li>
                  <li>
                    <a
                      href="/colors"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Colors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/spacing"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Spacing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://github.com/HauseOS/hause-design-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
