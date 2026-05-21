import Link from "next/link"
import { ArrowLeft, ShieldAlert, CheckCircle, AlertTriangle, HeartHandshake, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

function RGBlock({
  title,
  blockId,
  icon: Icon,
  iconStyle,
  children,
}: {
  title: string
  blockId: string
  icon: React.ElementType
  iconStyle: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconStyle}`}
          aria-hidden="true"
        >
          <Icon className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
        <h2 id={blockId} className="font-heading font-bold text-base text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-4" aria-labelledby={blockId}>{children}</div>
    </div>
  )
}

const coreGuidelines = [
  {
    num: "1",
    title: "Only Stake What You Can Genuinely Afford to Lose",
    desc: "Never use money allocated to essential costs — rent, mortgage payments, bills, or food — to fund any betting activity. Treat your betting budget as expendable entertainment spend.",
  },
  {
    num: "2",
    title: "Set Your Limits Before You Place a Single Bet",
    desc: "Decide your session budget and time limit before you start and stick to them. Use your operator&apos;s built-in deposit limit tools to enforce your decisions and remove the option to spend more.",
  },
  {
    num: "3",
    title: "Never Chase Losses",
    desc: "Accepting a losing session as a cost of entertainment is fundamental discipline. Attempting to recover losses through further bets is one of the most common pathways into problem gambling behaviour.",
  },
  {
    num: "4",
    title: "Bet Only When Fully Clear-Headed",
    desc: "Avoid placing bets when you are emotionally distressed, fatigued, or affected by alcohol or any other substance that impairs rational judgement and decision-making.",
  },
]

const safeBehaviours = [
  "Set a firm monthly betting budget and record it in writing",
  "Activate deposit limits on every operator account you hold",
  "Maintain a balanced range of hobbies and social activities",
  "Take scheduled breaks from all betting platforms regularly",
  "Review your betting activity and total spend at least once a month",
  "Use self-exclusion tools proactively if you feel any concern",
]

const warningIndicators = [
  "Betting amounts that cause genuine financial stress or anxiety",
  "Concealing gambling activity from family members or close friends",
  "Using credit facilities or borrowed funds to finance betting",
  "Neglecting work, academic, or family responsibilities as a result",
  "Persistent irritability or restlessness when unable to bet",
  "Repeated failed attempts to reduce the frequency or size of your bets",
]

const supportOrgs = [
  {
    name: "GambleAware",
    url: "https://www.begambleaware.org",
    display: "begambleaware.org",
    desc: "Free, confidential support and expert advice — available 24 hours a day",
  },
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    display: "gamcare.org.uk",
    desc: "National gambling helpline, live chat, and structured counselling services",
  },
  {
    name: "GAMSTOP",
    url: "https://www.gamstop.co.uk",
    display: "gamstop.co.uk",
    desc: "UK national self-exclusion register — blocks access to all UKGC-licensed operators",
  },
  {
    name: "Gambling Therapy",
    url: "https://www.gamblingtherapy.org",
    display: "gamblingtherapy.org",
    desc: "Free international online support forum and professional therapy programme",
  },
]

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page header */}
      <div className="bg-navy px-4 py-8 border-b border-white/10">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors mb-4 tracking-wide"
            aria-label="Return to Trusted UK Betting Sites List rankings"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <ShieldAlert className="w-4 h-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
                  Responsible Gambling
                </h1>
                <p className="text-white/50 text-sm mt-0.5">
                  Betting must always remain an affordable form of entertainment
                </p>
              </div>
            </div>
            <span
              className="text-destructive font-heading font-bold text-sm border border-destructive/50 px-2.5 py-1 bg-destructive/10 rounded flex-shrink-0"
              aria-label="Adults 18 and over only"
            >
              18+
            </span>
          </div>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Responsible Gambling information from Trusted UK Betting Sites List"
      >

        {/* Critical warning */}
        <div
          className="border-2 border-destructive/35 bg-destructive/8 rounded-xl px-5 py-4"
          role="alert"
          aria-label="Important responsible gambling warning"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm text-foreground font-semibold mb-1">Important Warning</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sports betting and gambling can become addictive and cause serious financial, psychological, and personal harm. Never wager money you cannot afford to lose. If gambling is negatively affecting your daily life, seek professional support without delay.
              </p>
              <p className="text-destructive font-heading font-bold text-sm mt-2 uppercase tracking-wide">
                Strictly 18+ Only — No Exceptions
              </p>
            </div>
          </div>
        </div>

        <RGBlock
          icon={HeartHandshake}
          iconStyle="bg-primary/12 border border-primary/20 text-primary"
          title="What Does Responsible Gambling Mean?"
          blockId="trusted-rg-definition"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Responsible gambling means engaging with sports betting in a conscious, controlled, and sustainable way. It requires maintaining a clear boundary between entertainment and financial obligation, and actively using the tools and support services available to ensure betting never becomes harmful to you or those around you.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            Trusted UK Betting Sites List only features UKGC-licensed operators. Every operator on this list is legally required to provide a full suite of responsible gambling tools — including deposit limits, session timers, reality checks, and self-exclusion options — prominently on their platforms.
          </p>
        </RGBlock>

        {/* Core guidelines */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="trusted-rg-guidelines"
              className="font-heading font-bold text-base text-foreground"
            >
              Four Core Guidelines for Responsible Betting
            </h2>
          </div>
          <div
            className="divide-y divide-border"
            aria-labelledby="trusted-rg-guidelines"
            role="list"
          >
            {coreGuidelines.map((item) => (
              <div key={item.num} className="flex gap-4 px-5 py-4" role="listitem">
                <div
                  className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 rounded-lg"
                  aria-hidden="true"
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safe behaviours / Warning indicators grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-5 py-4">
              <CheckCircle className="w-4 h-4 text-primary" aria-hidden="true" />
              <h2 id="trusted-rg-safe" className="font-heading font-bold text-sm text-foreground">
                Safe Betting Behaviours
              </h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5" aria-labelledby="trusted-rg-safe">
              {safeBehaviours.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold text-base leading-none mt-0.5" aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-destructive/25 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-destructive/25 px-5 py-4 bg-destructive/8">
              <AlertTriangle className="w-4 h-4 text-destructive" aria-hidden="true" />
              <h2 id="trusted-rg-warning" className="font-heading font-bold text-sm text-destructive">
                Warning Indicators
              </h2>
            </div>
            <ul className="px-5 py-4 space-y-2.5" aria-labelledby="trusted-rg-warning">
              {warningIndicators.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-bold text-base leading-none mt-0.5" aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UK support services */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="trusted-rg-support"
              className="font-heading font-bold text-base text-foreground"
            >
              Free UK Support Services
            </h2>
          </div>
          <div
            className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border"
            aria-labelledby="trusted-rg-support"
            role="list"
          >
            {supportOrgs.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-4 hover:bg-surface transition-colors group"
                aria-label={`Visit ${org.name} at ${org.display} — opens in new tab`}
                role="listitem"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-heading font-bold text-foreground text-sm">{org.name}</div>
                  <ExternalLink
                    className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-primary text-xs font-medium">{org.display}</div>
                <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Age restriction notice */}
        <div
          className="bg-navy border border-primary/15 text-foreground text-center py-4 rounded-xl"
          role="note"
          aria-label="Age restriction notice"
        >
          <span className="font-heading font-extrabold text-sm uppercase tracking-widest text-foreground">
            Under 18s Are Strictly Prohibited From Gambling in the UK
          </span>
        </div>

      </main>
    </div>
  )
}
