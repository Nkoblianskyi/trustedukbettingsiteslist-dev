import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { ConsentBanner } from "@/components/consent-banner"
import { VerifiedPickModal } from "@/components/verified-pick-modal"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
})

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Trusted UK Betting Sites List - Expert-Verified Sportsbooks ${currentYear}`,
  description:
    "Expert-curated rankings of the UK's most trusted and fully licensed betting sites. In-depth reviews, verified welcome offers, and unbiased expert scores - trustedukbettingsiteslist.com.",
  metadataBase: new URL("https://trustedukbettingsiteslist.com"),
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0f1218",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${_inter.variable} ${_outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <SiteFooter />
          <ConsentBanner />
          <VerifiedPickModal />
        </div>
      </body>
    </html>
  )
}
