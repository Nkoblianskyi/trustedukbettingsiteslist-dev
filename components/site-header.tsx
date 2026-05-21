"use client"

import Link from "next/link"

function TrustedLogoMark() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      aria-hidden="true"
    >
      {/* Shield base */}
      <path
        d="M19 2 L34 8.5 L34 21 C34 30 19 36 19 36 C19 36 4 30 4 21 L4 8.5 Z"
        fill="hsl(222,32%,9%)"
        stroke="hsl(142,68%,38%)"
        strokeWidth="1.8"
      />
      {/* Green inner shield */}
      <path
        d="M19 6 L30 11 L30 20.5 C30 26.5 19 31 19 31 C19 31 8 26.5 8 20.5 L8 11 Z"
        fill="hsl(142,68%,38%)"
        opacity="0.15"
      />
      {/* Checkmark */}
      <path
        d="M12 19 L16.5 23.5 L26 13"
        stroke="hsl(142,68%,38%)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Top tick dot */}
      <circle cx="19" cy="9" r="1.2" fill="hsl(142,68%,38%)" opacity="0.6" />
    </svg>
  )
}

function SiteWordmark() {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-baseline gap-1">
        <span className="font-heading font-extrabold text-[13px] md:text-[14px] tracking-tight text-primary">
          Trusted
        </span>
        <span className="font-heading font-extrabold text-[13px] md:text-[14px] tracking-tight text-foreground">
          UK
        </span>
        <span className="font-heading font-extrabold text-[13px] md:text-[14px] tracking-tight text-foreground">
          Betting
        </span>
      </div>
      <div className="flex items-baseline gap-1 mt-[1px]">
        <span className="font-heading font-bold text-[11px] md:text-[12px] tracking-wider text-primary uppercase">
          Sites
        </span>
        <span className="font-heading font-semibold text-[11px] md:text-[12px] tracking-wider text-muted-foreground uppercase">
          List
        </span>
      </div>
    </div>
  )
}

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-navy border-b border-border shadow-[0_2px_20px_hsl(222_32%_4%/0.7)]"
      role="banner"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Trusted UK Betting Sites List — return to homepage"
          >
            <div className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <TrustedLogoMark />
            </div>
            <SiteWordmark />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5">
              <img
                src="/flag.png"
                alt="United Kingdom flag"
                className="h-4 w-auto rounded-sm object-cover"
              />
              <span className="text-[10px] font-heading font-semibold text-muted-foreground tracking-wide">
                trustedukbettingsiteslist.com
              </span>
            </div>
            <span
              className="text-[11px] font-heading font-bold text-destructive border border-destructive/40 px-2 py-1 bg-destructive/10 uppercase tracking-widest rounded"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
