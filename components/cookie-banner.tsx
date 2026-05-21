"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X, ShieldCheck } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem("vipCookieConsent")) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (value: "accepted" | "essential") => {
    try {
      localStorage.setItem("vipCookieConsent", value)
      localStorage.setItem("vipCookieConsentDate", new Date().toISOString())
    } catch { /* silent */ }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-border shadow-[0_-6px_32px_hsl(220_18%_4%/0.7)]"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent preferences for VIP UK Betting Sites"
    >
      {/* Gold accent top bar */}
      <div className="h-[3px] w-full bg-primary" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div
              className="w-9 h-9 bg-primary/15 border border-primary/25 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <Cookie className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="font-heading font-bold text-sm text-foreground mb-0.5">Cookie Preferences</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We use cookies to enhance your experience on{" "}
                <span className="font-semibold text-foreground/80">vipukbettingsites.com</span>{" "}
                and to measure site performance. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary hover:underline underline-offset-2 font-medium"
                  aria-label="View our Cookie Policy"
                >
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0" role="group" aria-label="Cookie consent choices">
            <button
              onClick={() => choose("essential")}
              className="h-9 px-4 text-[11px] font-heading font-bold uppercase tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors rounded-lg bg-transparent"
              aria-label="Accept essential cookies only"
            >
              Essential Only
            </button>
            <button
              onClick={() => choose("accepted")}
              className="h-9 px-5 text-[11px] font-heading font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-lg flex items-center gap-1.5"
              aria-label="Accept all cookies"
            >
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Accept All
            </button>
            <button
              onClick={() => choose("essential")}
              className="h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface transition-colors rounded-lg border border-border"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
