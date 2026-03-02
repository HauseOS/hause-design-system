'use client'

import { useState } from "react"

const NavLinks = ({ onClose }: { onClose: () => void }) => (
  <>
    {/* Getting Started */}
    <div>
      <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
        Getting Started
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="/"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
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
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Button
          </a>
        </li>
        <li>
          <a
            href="/components/input"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Input
          </a>
        </li>
        <li>
          <a
            href="/components/card"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Card
          </a>
        </li>
        <li>
          <a
            href="/components/badge"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Badge
          </a>
        </li>
        <li>
          <a
            href="/components/nav"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Navigation
          </a>
        </li>
        <li>
          <a
            href="/components/modal"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Modal
          </a>
        </li>
        <li>
          <a
            href="/components/tabs"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Tabs
          </a>
        </li>
      </ul>
    </div>

    {/* Design Tokens */}
    <div>
      <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
        Design Tokens
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="/colors"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Colors
          </a>
        </li>
        <li>
          <a
            href="/typography"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Typography
          </a>
        </li>
        <li>
          <a
            href="/spacing"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Spacing
          </a>
        </li>
      </ul>
    </div>

    {/* Documentation */}
    <div>
      <h3 className="text-xs font-semibold uppercase text-foreground-muted mb-3">
        Documentation
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="/docs/integration"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Integration
          </a>
        </li>
        <li>
          <a
            href="/docs/decisions"
            className="text-foreground hover:text-primary transition-colors block py-1"
            onClick={() => onClose()}
          >
            Design Decisions
          </a>
        </li>
      </ul>
    </div>
  </>
)

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="flex h-screen overflow-hidden">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex flex-col w-64 border-r border-border bg-background-elevated p-6 overflow-y-auto">
            <div className="mb-8">
              <h1 className="text-xl font-bold text-primary">Hause Design</h1>
              <p className="text-xs text-foreground-muted mt-1">v0.2.0</p>
            </div>

            <nav className="space-y-8">
              <NavLinks onClose={() => setMobileNavOpen(false)} />
            </nav>
          </aside>

          {/* Mobile Header + Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-background-elevated">
              <h1 className="text-lg font-bold text-primary">Hause Design</h1>
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="p-2 hover:bg-background-muted rounded transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Menu */}
            {mobileNavOpen && (
              <div className="md:hidden flex flex-col space-y-6 p-6 border-b border-border bg-background-elevated overflow-y-auto">
                <NavLinks onClose={() => setMobileNavOpen(false)} />
              </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
