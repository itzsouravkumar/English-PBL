import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "English - Project Showcase",
  description:
    "Explore how our teams connected English literature with Sustainable development goals. Each project presents creative interpretations of five selected English books, linked to specific SDGs or DDG themes — through presentations and videos, all viewable directly in your browser.",
  openGraph: {
    title: "English - Project Showcase",
    description:
      "Explore how our teams connected English literature with Sustainable development goals. Each project presents creative interpretations of five selected English books, linked to specific SDGs or DDG themes — through presentations and videos, all viewable directly in your browser.",
    url: "https://team-english.vercel.app",
    siteName: "Team english",
    images: [
      {
        url: "https://team-english.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team english",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: 'Sourav'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
