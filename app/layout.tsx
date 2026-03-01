'use client'

import type { Metadata } from "next"
import { useState } from "react"
import "../globals.css"

export const metadata: Metadata = {
  title: "Hause Design System",
  description: "Design tokens and components for Hause Collective",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const NavLinks = () => (
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
              onClick={() => setMobileNavOpen(false)}
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
              onClick={() => setMobileNavOpen(false)}
            >
              Button
            </a>
          </li>
          <li>
            <a
              href="/components/input"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Input
            </a>
          </li>
          <li>
            <a
              href="/components/card"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Card
            </a>
          </li>
          <li>
            <a
              href="/components/badge"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Badge
            </a>
          </li>
          <li>
            <a
              href="/components/modal"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Modal
            </a>
          </li>
          <li>
            <a
              href="/components/tabs"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Tabs
            </a>
          </li>
          <li>
            <a
              href="/components/nav"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Nav
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
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Typography
            </a>
          </li>
          <li>
            <a
              href="/colors"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Colors
            </a>
          </li>
          <li>
            <a
              href="/spacing"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
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
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="/INTEGRATION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors block py-1"
              onClick={() => setMobileNavOpen(false)}
            >
              Integration Guide
            </a>
          </li>
        </ul>
      </div>
    </>
  )

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Mobile Header */}
        <header className="md:hidden sticky top-0 z-40 bg-surface border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div>
              <h1 className="font-display text-xl font-bold text-primary">
                Hause
              </h1>
              <p className="text-xs text-foreground-muted">Design System</p>
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 hover:bg-surface-hover rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileNavOpen && (
            <nav className="border-t border-border bg-surface p-4 space-y-6 animate-slideInDown">
              <NavLinks />
            </nav>
          )}
        </header>

        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Desktop Sidebar */}
          <nav className="hidden md:block w-64 border-r border-border bg-surface p-6 sticky top-0 h-screen overflow-y-auto">
            <div className="mb-8">
              <h1 className="font-display text-2xl font-bold text-primary">
                Hause
              </h1>
              <p className="text-sm text-foreground-muted">Design System</p>
            </div>

            <div className="space-y-6">
              <NavLinks />
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 w-full overflow-y-auto">
            <div className="px-4 py-6 sm:px-6 md:p-8 max-w-6xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
