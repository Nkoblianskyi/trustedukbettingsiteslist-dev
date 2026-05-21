import Image from "next/image"
import { bettingSites } from "@/lib/mock-data"
import { Trophy, Star, ExternalLink } from "lucide-react"

export function OurChoiceSection() {
  const topPick = bettingSites[0]

  return (
    <section
      className="w-full bg-surface border-y border-border py-8 md:py-10"
      aria-labelledby="vip-top-pick-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
          <Trophy className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
          <div>
            <h2
              id="vip-top-pick-heading"
              className="font-heading font-extrabold text-xl md:text-2xl text-foreground leading-tight"
            >
              VIP Top Pick This Month
            </h2>
            <p className="text-muted-foreground text-sm mt-0.5">
              The highest expert-rated UKGC-licensed sportsbook in our current rankings
            </p>
          </div>
        </div>

        {/* Featured card */}
        <a
          href={topPick.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="group block border border-primary/45 bg-card hover:border-primary rounded-2xl transition-all overflow-hidden rank-1-glow card-hover"
          aria-label={`Visit ${topPick.name} — ${topPick.bonus} — opens in new tab`}
        >
          {/* Gold top accent */}
          <div className="h-1 w-full bg-primary rounded-t-2xl" aria-hidden="true" />

          <div className="flex flex-col md:flex-row md:items-stretch">

            {/* Left: logo + rating */}
            <div className="flex flex-row md:flex-col items-center justify-between md:justify-center md:w-56 bg-surface border-b md:border-b-0 md:border-r border-border px-6 py-5 gap-4 rounded-b-none rounded-l-2xl">
              <div
                className="w-44 md:w-52 h-20 md:h-24 bg-white rounded-xl border border-border flex items-center justify-center p-3 flex-shrink-0"
                aria-label={`${topPick.name} logo`}
              >
                <Image
                  src={topPick.logo || "/placeholder.svg"}
                  alt={`${topPick.name} official logo`}
                  width={180}
                  height={72}
                  className="max-h-16 w-full object-contain"
                />
              </div>
              <div className="text-center flex-shrink-0">
                <div
                  className="font-heading font-extrabold text-5xl text-primary leading-none tabular-nums"
                  aria-label={`Expert score ${topPick.rating.toFixed(1)} out of 10`}
                >
                  {topPick.rating.toFixed(1)}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 mb-2">/10 rating</div>
                <div className="flex items-center justify-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < topPick.stars ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1.5">{topPick.reviews.toLocaleString()} expert reviews</div>
              </div>
            </div>

            {/* Right: offer + CTA */}
            <div className="flex-1 px-5 md:px-8 py-6 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="vip-badge text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full flex items-center gap-1"
                    aria-label="VIP number 1 top pick"
                  >
                    <Trophy className="w-3 h-3" aria-hidden="true" />
                    #1 VIP Pick
                  </span>
                  <span className="text-[11px] text-muted-foreground tracking-wide">
                    {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Welcome Offer
                </div>
                <p className="text-foreground font-heading font-bold text-xl md:text-2xl leading-snug">{topPick.welcomeOffer}</p>
                <p className="text-muted-foreground text-[13px] mt-1">{topPick.bonus}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{topPick.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="w-full sm:w-48 bg-primary hover:opacity-90 text-primary-foreground font-heading font-bold uppercase tracking-wide text-sm h-12 flex items-center justify-center gap-2 transition-opacity rounded-xl cursor-pointer">
                  Claim Offer
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  <span className="text-destructive font-semibold">18+</span> · New customers only · T&amp;Cs Apply · BeGambleAware.org
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
