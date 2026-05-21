"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, Star, ExternalLink, BadgeCheck } from "lucide-react"
import { sportsbooks } from "@/lib/mock-data"

export function VerifiedPickModal() {
  const [open, setOpen] = useState(false)
  const topPick = sportsbooks[0]

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 9000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open || !topPick) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="relative w-full max-w-sm bg-card rounded-2xl shadow-[0_24px_80px_hsl(222_32%_4%/0.95)] overflow-hidden border border-border"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trusted-modal-title"
      >
        {/* Green accent bar */}
        <div className="h-1 w-full bg-primary" aria-hidden="true" />

        {/* Header */}
        <div className="relative flex flex-col items-center justify-center px-5 pt-5 pb-4 bg-surface border-b border-border text-center">
          <div className="flex items-center gap-2 mb-1">
            <BadgeCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            <span
              id="trusted-modal-title"
              className="font-heading font-extrabold text-xl text-foreground"
            >
              Our Verified Top Pick
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
          </span>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-lg"
            aria-label="Close this recommendation modal"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Logo panel */}
        <div
          className="mx-5 mt-5 bg-white border border-border rounded-xl flex items-center justify-center h-24 p-4"
          aria-label={`${topPick.name} logo`}
        >
          <Image
            src={topPick.logo || "/placeholder.svg"}
            alt={`${topPick.name} official logo`}
            width={200}
            height={72}
            className="max-h-16 max-w-[180px] object-contain"
          />
        </div>

        {/* Star rating row */}
        <div
          className="mx-5 mt-3 flex items-center justify-between border border-border bg-surface rounded-xl px-4 py-3"
          aria-label={`Expert rating: ${topPick.rating.toFixed(1)} out of 10`}
        >
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < topPick.stars ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="text-right">
            <span className="font-heading font-extrabold text-3xl score-amber tabular-nums leading-none">
              {topPick.rating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">/10</span>
          </div>
        </div>

        {/* Welcome offer panel */}
        <div
          className="mx-5 mt-3 border border-primary/30 bg-primary/8 px-4 py-4 rounded-xl text-center"
          aria-label="Welcome offer details"
        >
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Welcome Offer
          </div>
          <p className="text-foreground font-heading font-extrabold text-2xl leading-tight mb-1">{topPick.welcomeOffer}</p>
          <p className="text-sm text-muted-foreground">{topPick.bonus}</p>
        </div>

        {/* Verified badge */}
        <div className="mx-5 mt-3">
          <span
            className="inline-flex items-center gap-1.5 trusted-badge text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full"
            aria-label="Trusted UK Betting Sites List editors verified number one choice"
          >
            <BadgeCheck className="w-3 h-3" aria-hidden="true" />
            Editors&apos; Verified #1 Choice {new Date().getFullYear()}
          </span>
        </div>

        {/* CTA */}
        <div className="p-5 pt-4">
          <a
            href={topPick.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex items-center justify-center gap-2 w-full h-12 bg-primary hover:opacity-90 text-primary-foreground font-heading font-bold uppercase tracking-wide text-sm transition-opacity rounded-xl"
            aria-label={`Claim welcome offer at ${topPick.name} — opens in new tab`}
          >
            Claim Offer
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <p className="text-center text-[10px] text-muted-foreground mt-3">
            <span className="text-destructive font-semibold">18+</span> · New customers only · T&amp;Cs Apply · BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
