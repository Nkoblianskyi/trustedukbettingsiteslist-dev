import Image from "next/image"
import { sportsbooks } from "@/lib/mock-data"
import { BadgeCheck, ExternalLink, Star, ShieldCheck } from "lucide-react"

export function FeaturedPickSection() {
  const topPick = sportsbooks[0]

  return (
    <section
      className="w-full bg-surface border-y border-border py-10 md:py-14 section-pitch"
      aria-labelledby="trusted-top-pick-heading"
    >
      <div className="container mx-auto max-w-3xl px-4 md:px-6">

        {/* Section heading */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2
              id="trusted-top-pick-heading"
              className="font-heading font-extrabold text-xl md:text-2xl text-foreground"
            >
              Our Verified Top Pick This Month
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            The highest expert-rated UKGC-licensed operator in our current verified rankings
          </p>
        </div>

        {/* Featured card */}
        <a
          href={topPick.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="group block border border-primary bg-card hover:border-primary/80 rounded-2xl transition-all overflow-hidden rank-1-glow card-hover"
          aria-label={`Visit ${topPick.name} — ${topPick.bonus} — opens in new tab`}
        >
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-primary rounded-t-2xl" aria-hidden="true" />

          {/* Card body */}
          <div className="flex flex-col items-center px-6 py-8 md:py-10 gap-7">

            {/* Badge */}
            <span
              className="trusted-badge text-[10px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full flex items-center gap-1.5"
              aria-label="Number one verified pick"
            >
              <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
              #1 Verified Pick — {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
            </span>

            {/* Logo — large & centred */}
            <div
              className="w-64 md:w-72 h-28 md:h-32 bg-white rounded-2xl border border-border flex items-center justify-center p-5 shadow-md"
              aria-label={`${topPick.name} logo`}
            >
              <Image
                src={topPick.logo || "/placeholder.svg"}
                alt={`${topPick.name} official logo`}
                width={240}
                height={96}
                className="max-h-20 w-full object-contain"
              />
            </div>

            {/* Stars + score */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="font-heading font-extrabold text-6xl score-amber leading-none tabular-nums"
                aria-label={`Expert score ${topPick.rating.toFixed(1)} out of 10`}
              >
                {topPick.rating.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">/10 verified score</div>
              <div className="flex items-center gap-0.5 mt-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < topPick.stars ? "fill-highlight text-highlight" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <div className="text-[11px] text-muted-foreground">{topPick.reviews.toLocaleString()} verified reviews</div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-border" aria-hidden="true" />

            {/* Bonus block */}
            <div className="flex flex-col items-center gap-2 text-center w-full">
              <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-muted-foreground">
                Welcome Offer
              </div>
              <p className="text-foreground font-heading font-extrabold text-3xl md:text-4xl leading-tight text-balance">
                {topPick.welcomeOffer}
              </p>
              <p className="text-muted-foreground text-sm">{topPick.bonus}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mt-1">{topPick.description}</p>
            </div>

            {/* CTA button */}
            <div className="w-full max-w-xs">
              <div
                className="w-full bg-primary hover:opacity-90 text-primary-foreground font-heading font-extrabold uppercase tracking-widest text-base h-14 flex items-center justify-center gap-2 transition-opacity rounded-xl cursor-pointer shadow-lg"
                aria-label={`Claim offer at ${topPick.name}`}
              >
                Claim Offer
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <p className="text-[10px] leading-relaxed text-center">
                  <span className="text-destructive font-bold">18+</span> · New customers only · T&amp;Cs Apply · BeGambleAware.org
                </p>
              </div>
            </div>

          </div>
        </a>

      </div>
    </section>
  )
}
