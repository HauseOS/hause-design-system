import type { Metadata } from "next"
import "../globals.css"
import { LayoutClient } from "./layout-client"

export const metadata: Metadata = {
  title: "Hause Design System",
  description: "Design tokens and components for Hause Collective",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <LayoutClient>{children}</LayoutClient>
}
