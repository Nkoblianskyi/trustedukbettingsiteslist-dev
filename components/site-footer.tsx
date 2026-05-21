import Link from "next/link"
import { ShieldCheck } from "lucide-react"

const footerLinks = [
  { label: "Privacy Policy",       href: "/privacy-policy" },
  { label: "Cookie Policy",        href: "/cookie-policy" },
  { label: "About Us",             href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
]

const safetyPartners = [
  { src: "/Gambling_Commission_logo.png", alt: "Gambling Commission", href: "https://www.gamblingcommission.gov.uk/", darkBg: true },
  { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/", darkBg: true },
  { src: "/gordon.png", alt: "Gordon Moody Association", href: "https://gordonmoody.org.uk/", darkBg: true },
  { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/", darkBg: true },
  { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/", darkBg: true },

]


function FooterBrandMark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group mb-3"
      aria-label="Trusted UK Betting Sites List — return to homepage"
    >
      <svg width="30" height="30" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path
          d="M19 2 L34 8.5 L34 21 C34 30 19 36 19 36 C19 36 4 30 4 21 L4 8.5 Z"
          fill="hsl(222,32%,9%)"
          stroke="hsl(142,68%,38%)"
          strokeWidth="1.8"
        />
        <path
          d="M19 6 L30 11 L30 20.5 C30 26.5 19 31 19 31 C19 31 8 26.5 8 20.5 L8 11 Z"
          fill="hsl(142,68%,38%)"
          opacity="0.15"
        />
        <path
          d="M12 19 L16.5 23.5 L26 13"
          stroke="hsl(142,68%,38%)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="19" cy="9" r="1.2" fill="hsl(142,68%,38%)" opacity="0.6" />
      </svg>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-extrabold text-[14px] tracking-tight text-primary">Trusted</span>
          <span className="font-heading font-extrabold text-[14px] tracking-tight text-white">UK</span>
          <span className="font-heading font-extrabold text-[14px] tracking-tight text-white">Betting</span>
        </div>
        <div className="flex items-baseline gap-1 mt-[1px]">
          <span className="font-heading font-bold text-[11px] tracking-wider text-primary uppercase">Sites</span>
          <span className="font-heading font-semibold text-[11px] tracking-wider text-white/50 uppercase">List</span>
        </div>
      </div>
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer
      className="w-full bg-navy text-navy-foreground"
      aria-label="Trusted UK Betting Sites List site footer"
    >

      {/* Main footer body */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand column */}
          <div className="flex-shrink-0 max-w-xs">
            <FooterBrandMark />
            <p className="text-[12px] text-white/50 leading-relaxed mt-1">
              Independent expert rankings of fully UKGC-licensed UK sportsbooks. Trusted UK Betting Sites List does not operate a bookmaker. All rankings result from independent editorial assessment with no commercial influence on scoring.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-white/45 tracking-wide">UKGC Licensed Operators Only</span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/35 mb-4">
                Pages
              </p>
              <nav className="flex flex-col gap-2.5" aria-label="Footer site navigation">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Responsible gambling partner logos */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p
            className="text-[10px] font-heading font-bold uppercase tracking-widest text-white/30 mb-4"
            id="footer-safety-label"
          >
            Responsible Gambling Partners
          </p>
          <div
            className="flex flex-row flex-wrap items-center gap-3"
            aria-labelledby="footer-safety-label"
            role="list"
          >
            {safetyPartners.map(({ src, alt, href, darkBg }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-3 py-2 rounded-lg border transition-colors hover:opacity-90 ${
                  darkBg
                    ? "bg-white/8 border-white/10 hover:bg-white/14"
                    : "bg-white border-white/20 hover:bg-white/90"
                }`}
                aria-label={`Visit ${alt} — opens in new tab`}
                role="listitem"
              >
                <img src={src} alt={alt} className="h-5 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-white/38 leading-relaxed">
            <span className="text-destructive font-semibold">18+</span> · trustedukbettingsiteslist.com is an independent betting comparison and information service. We may receive affiliate commission when users visit operators via our links — this does not affect our editorial ratings or rankings. All featured operators hold a valid UKGC licence. Please bet responsibly. If you are concerned about your gambling habits, visit{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80 transition-opacity"
              aria-label="BeGambleAware.org — opens in new tab"
            >
              BeGambleAware.org
            </a>.
          </p>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/28 uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} trustedukbettingsiteslist.com. All rights reserved.</span>
        <span
          className="text-destructive font-heading font-bold border border-destructive/40 px-2 py-0.5 bg-destructive/10 rounded"
          aria-label="Adults 18 and over only"
        >
          18+
        </span>
      </div>
    </footer>
  )
}
