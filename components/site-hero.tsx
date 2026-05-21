import Image from "next/image"
import { ShieldCheck, Lock, BadgeCheck } from "lucide-react"

export function SiteHero() {
  return (
    <section
      className="relative w-full min-h-[240px] sm:min-h-[300px] flex flex-col overflow-hidden"
      aria-labelledby="trusted-hero-heading"
    >
      {/* Sports background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Floodlit UK football stadium — Trusted UK Betting Sites List"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy/70" />
        {/* Pitch grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(142 68% 38% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(142 68% 38% / 0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 md:px-8 max-w-4xl mx-auto w-full gap-3 py-8 sm:py-10">

        {/* Live update pill */}
        <div
          className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-primary/50 rounded-full px-4 py-1.5"
          aria-label={`Rankings updated for ${new Date().getFullYear()}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" aria-hidden="true" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-primary">
            {new Date().getFullYear()} — Updated Monthly by Our Experts
          </span>
        </div>

        {/* Headline */}
        <h1
          id="trusted-hero-heading"
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight text-balance drop-shadow-xl"
        >
          <span className="text-primary">Trusted UK </span>
          <span className="text-white">Betting Sites List</span>
        </h1>

        {/* Strapline */}
        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl drop-shadow">
          The UK&apos;s most comprehensive verified sportsbook ranking — every operator
          is independently assessed, UKGC-licensed, and held to the strictest editorial standards.
        </p>

        {/* Trust pills row */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-1"
          aria-label="Site trust indicators"
          role="list"
        >
          {[
            { icon: <img src="/flag.png" alt="United Kingdom flag" className="h-4 w-auto rounded-sm" />, label: "UKGC Licensed" },
            { icon: <BadgeCheck className="w-4 h-4 text-primary" aria-hidden="true" />, label: "Independently Verified" },
            { icon: <Lock className="w-4 h-4 text-primary" aria-hidden="true" />, label: "Secure & Safe" },
            { icon: <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />, label: "Responsible Gambling" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              role="listitem"
              className="flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5"
            >
              {icon}
              <span className="font-heading font-semibold text-[11px] text-white whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
