import Image from "next/image"
import { ShieldCheck, Lock } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[320px] sm:min-h-[380px] flex flex-col overflow-hidden"
      aria-labelledby="vip-hero-heading"
    >
      {/* Background stadium image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-stadium.jpg"
          alt="Premier League stadium floodlit at night — VIP UK Betting Sites"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-to-right dark vignette + overall tint */}
        <div className="absolute inset-0 bg-navy/60" />
        {/* Bottom fade into dark page */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 md:px-8 max-w-5xl mx-auto w-full gap-5 py-12">

        {/* Live update pill */}
        <div
          className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-primary/40 rounded-full px-4 py-1.5"
          aria-label="Rankings updated for 2026"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <span className="font-heading font-bold text-[11px] uppercase tracking-[0.18em] text-primary">
            {new Date().getFullYear()} Rankings — Updated Monthly
          </span>
        </div>

        {/* Headline */}
        <h1
          id="vip-hero-heading"
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white tracking-tight text-balance drop-shadow-lg"
        >
          <span className="text-primary">VIP UK</span>{" "}
          <span className="text-white">Betting Sites</span>
        </h1>

        {/* Strapline */}
        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow">
          The UK&apos;s most trusted sportsbook ranking — every operator is independently
          reviewed, UKGC-licensed, and held to a strict editorial standard.
        </p>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mt-1"
          aria-label="Site trust indicators"
          role="list"
        >
          {/* UKGC Licensed — flag + text */}
          <div
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            role="listitem"
            aria-label="UKGC Licensed — UK Gambling Commission approved operators only"
          >
            <img
              src="/flag.png"
              alt="United Kingdom flag"
              className="h-5 w-auto rounded-sm flex-shrink-0"
            />
            <span className="font-heading font-bold text-xs sm:text-sm text-white leading-tight whitespace-nowrap">
              UKGC Licensed
            </span>
          </div>

          {/* Safe &amp; Secure */}
          <div
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            role="listitem"
            aria-label="Safe and secure — all listed sites use SSL encryption and data protection"
          >
            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
              <Lock className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm text-white leading-tight whitespace-nowrap">
              Safe &amp; Secure
            </span>
          </div>

          {/* 18+ */}
          <div
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            role="listitem"
            aria-label="18 plus only — gambling is restricted to adults"
          >
            <div
              className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="font-heading font-extrabold text-[10px] text-white leading-none">18+</span>
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm text-white leading-tight whitespace-nowrap">
              Adults Only
            </span>
          </div>

          {/* Responsible gambling shield */}
          <div
            className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            role="listitem"
            aria-label="Responsible gambling — we promote safe betting practices"
          >
            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-xs sm:text-sm text-white leading-tight whitespace-nowrap">
              Responsible Gambling
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
