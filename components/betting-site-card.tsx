"use client"

import Image from "next/image"
import { Star, ExternalLink, Trophy } from "lucide-react"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

function StarRating({ count, size = "sm" }: { count: number; size?: "sm" | "md" }) {
  const cls = size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < count ? "fill-primary text-primary" : "fill-muted text-muted"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function SiteBadge({ site }: { site: BettingSite }) {
  if (site.isTopRating)
    return (
      <span className="inline-flex items-center gap-1 vip-badge text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        <Trophy className="w-2.5 h-2.5" aria-hidden="true" />
        VIP Pick
      </span>
    )
  if (site.isTopLine)
    return (
      <span className="inline-flex items-center gap-1 bg-primary/12 text-primary border border-primary/30 text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Best Value
      </span>
    )
  if (site.isPopular)
    return (
      <span className="inline-flex items-center gap-1 bg-surface text-foreground border border-border text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Popular
      </span>
    )
  if (site.isTrending)
    return (
      <span className="inline-flex items-center gap-1 bg-amber-900/30 text-amber-400 border border-amber-600/30 text-[10px] font-heading font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
        Trending
      </span>
    )
  return null
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const isFirst = rank === 1

  return (
    <article
      className={`
        group relative overflow-hidden bg-card border rounded-xl card-hover
        ${isFirst ? "border-primary/60 rank-1-glow" : "border-border hover:border-primary/25"}
      `}
      aria-label={`${site.name} ranked number ${rank} on VIP UK Betting Sites`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-colors ${isFirst ? "bg-primary" : "bg-transparent group-hover:bg-primary/40"}`}
        aria-hidden="true"
      />

      {/* Badge row */}
      <div className="flex items-center gap-2 px-4 pt-3 md:px-5">
        <SiteBadge site={site} />
        {isFirst && (
          <span className="text-[10px] text-muted-foreground tracking-wide">
            VIP Editor&apos;s Choice, {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
          </span>
        )}
      </div>

      {/* DESKTOP layout */}
      <div className="hidden md:grid md:grid-cols-[56px_156px_1fr_148px_164px] md:items-center md:gap-0 px-5 py-4">

        {/* Rank number */}
        <div className="flex items-center justify-center">
          <div
            className={`w-10 h-10 flex items-center justify-center font-heading font-extrabold text-xl leading-none rounded-lg ${isFirst ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground border border-border"}`}
            aria-label={`Rank ${rank}`}
          >
            {rank}
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center px-3">
          <div className="w-40 h-20 bg-white rounded-lg border border-border flex items-center justify-center p-3">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} official logo`}
              width={140}
              height={64}
              className="max-h-14 w-full object-contain"
            />
          </div>
        </div>

        {/* Offer */}
        <div className="px-5 border-l border-border flex flex-col items-center text-center">
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
            Welcome Offer
          </div>
          <p className="text-foreground font-heading font-bold text-base leading-snug">{site.welcomeOffer}</p>
          <p className="text-[12px] text-muted-foreground mt-1">{site.bonus}</p>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center justify-center border-l border-border px-4 text-center gap-1">
          <div
            className="font-heading font-extrabold text-4xl text-primary leading-none tabular-nums"
            aria-label={`Score ${site.rating.toFixed(1)} out of 10`}
          >
            {site.rating.toFixed(1)}
          </div>
          <div className="text-[10px] text-muted-foreground">/10 score</div>
          <StarRating count={site.stars} size="md" />
          <div className="text-[10px] text-muted-foreground">{site.reviews.toLocaleString()} reviews</div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center border-l border-border pl-5 gap-2">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className={`w-full font-heading font-bold uppercase tracking-wide text-sm h-11 flex items-center justify-center gap-2 transition-opacity rounded-lg ${isFirst ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-primary/90 text-primary-foreground hover:opacity-80"}`}
            aria-label={`Visit ${site.name} — opens in a new tab`}
          >
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <span className="text-[10px] text-muted-foreground tracking-wide">T&amp;Cs Apply · 18+</span>
        </div>
      </div>

      {/* MOBILE layout */}
      <div className="md:hidden px-4 pb-4 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-8 h-8 flex items-center justify-center font-heading font-extrabold text-base flex-shrink-0 rounded-md ${isFirst ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground border border-border"}`}
            aria-label={`Rank ${rank}`}
          >
            {rank}
          </div>
          <div className="flex-1 flex items-center justify-center bg-white h-16 px-3 py-2 rounded-lg border border-border">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} official logo`}
              width={120}
              height={48}
              className="max-h-12 w-full object-contain"
            />
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-heading font-extrabold text-2xl text-primary leading-none tabular-nums">
              {site.rating.toFixed(1)}
            </div>
            <StarRating count={site.stars} />
          </div>
        </div>

        <div
          className={`px-3 py-2.5 mb-3 border-l-2 rounded-r-lg ${isFirst ? "border-primary bg-primary/8" : "border-primary/40 bg-surface"}`}
        >
          <div className="text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
            Welcome Offer
          </div>
          <div className="text-foreground font-heading font-bold text-sm">{site.welcomeOffer}</div>
          <div className="text-[11px] text-muted-foreground">{site.bonus}</div>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="flex w-full bg-primary hover:opacity-90 text-primary-foreground font-heading font-bold uppercase tracking-wide text-sm h-11 items-center justify-center gap-2 transition-opacity rounded-lg"
          aria-label={`Visit ${site.name} — opens in a new tab`}
        >
          Visit Site
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* Disclaimer strip */}
      <div className="border-t border-border px-4 md:px-5 py-2 bg-surface/50 rounded-b-xl">
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          <span className="text-destructive font-semibold">18+</span> · New customers only · UKGC Licensed · T&amp;Cs Apply · BeGambleAware.org
        </p>
      </div>
    </article>
  )
}
