import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"
import { Info } from "lucide-react"

export function RatingSection() {
  return (
    <section
      className="w-full bg-background py-10 md:py-14"
      id="vip-rankings"
      aria-labelledby="vip-rankings-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* Section label */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-1">
              VIP Rankings {new Date().getFullYear()}
            </p>
            <h2
              id="vip-rankings-heading"
              className="font-heading font-extrabold text-xl md:text-2xl text-foreground leading-tight"
            >
              Top-Rated UK Betting Sites
            </h2>
          </div>
          <span className="hidden md:inline text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1.5 rounded-lg bg-surface">
            Expert-Reviewed
          </span>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid md:grid-cols-[56px_156px_1fr_148px_164px] px-5 mb-2 text-[10px] font-heading font-semibold uppercase tracking-widest text-muted-foreground gap-0"
          aria-hidden="true"
        >
          <div className="text-center">Rank</div>
          <div className="text-center">Operator</div>
          <div className="pl-5">Offer</div>
          <div className="text-center pl-4">Score</div>
          <div className="text-center pl-5">Action</div>
        </div>

        {/* Cards list */}
        <ol className="space-y-3" aria-label="UK betting sites ranked by expert score">
          {bettingSites.map((site, index) => (
            <li key={site.id}>
              <BettingSiteCard site={site} rank={index + 1} />
            </li>
          ))}
        </ol>

        {/* Disclosure note */}
        <div
          className="mt-6 flex items-start gap-3 bg-surface border border-border rounded-xl px-4 py-3"
          role="note"
          aria-label="Ranking methodology disclosure"
        >
          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Rankings on VIP UK Betting Sites are determined by independent editorial review. We may receive affiliate commission when you visit an operator via our links — this does not affect our ratings or scores. Every listed operator holds an active UKGC licence.{" "}
            <span className="text-destructive font-semibold">18+</span> · Gamble responsibly · BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
