import Link from "next/link"
import { ArrowLeft, Target, ClipboardList, Heart, CheckCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

function AboutPageBanner() {
  return (
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
        <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white leading-tight">
          About Trusted UK Betting Sites List
        </h1>
        <p className="text-white/50 text-sm mt-1.5">
          Independent expert rankings of UKGC-licensed sportsbooks - trustedukbettingsiteslist.com
        </p>
      </div>
    </div>
  )
}

function ContentBlock({
  icon: Icon,
  title,
  blockId,
  children,
}: {
  icon: React.ElementType
  title: string
  blockId: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div
          className="w-7 h-7 bg-primary/12 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <Icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
        </div>
        <h2 id={blockId} className="font-heading font-bold text-base text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-4" aria-labelledby={blockId}>{children}</div>
    </div>
  )
}

const whatWeDo = [
  {
    title: "Independent Sportsbook Assessments",
    desc: "Every bookmaker on our list is tested against strict, objective criteria before any assessment is published. No operator can fund, influence, or alter our editorial reviews.",
  },
  {
    title: "Transparent Monthly Rankings",
    desc: "Expert scores are recalculated every month using a clearly documented verification methodology. Positions on our list change whenever an operator&apos;s performance improves or declines.",
  },
  {
    title: "Responsible Gambling Commitment",
    desc: "We actively promote safe betting and provide prominent links to UK support services, practical advice, and self-exclusion tools on every page we publish.",
  },
]

const coreValues = [
  { title: "Transparency",   desc: "Criteria are objective, openly documented, and applied without exception to every operator." },
  { title: "Independence",   desc: "No sportsbook can pay to influence, improve, or protect their ranking on this list." },
  { title: "Responsibility", desc: "Responsible gambling signposting and support links appear on every page we produce." },
  { title: "Accuracy",       desc: "Monthly editorial reviews keep our rankings current, correct, and reflective of real-world performance." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <AboutPageBanner />

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="About Trusted UK Betting Sites List content"
      >

        <ContentBlock icon={Target} title="Our Mission" blockId="trusted-about-mission">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Trusted UK Betting Sites List was created to help UK sports bettors make well-informed, confident decisions about UKGC-licensed sportsbooks. We provide transparent, independently verified comparisons with no commercial bias in our scoring methodology. Every sportsbook on our list holds a current, active UKGC licence — player safety is the one condition that is never subject to negotiation.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">
            We are not a bookmaker and do not accept wagers or deposits. Our sole purpose is to independently evaluate operators and present verified rankings in a clear, accessible format for the UK betting community.
          </p>
        </ContentBlock>

        <ContentBlock icon={ClipboardList} title="What We Do" blockId="trusted-about-what-we-do">
          <div className="space-y-3">
            {whatWeDo.map((item) => (
              <div key={item.title} className="flex gap-3 border-b border-border last:border-b-0 pb-3 last:pb-0">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock icon={Heart} title="Our Core Values" blockId="trusted-about-values">
          <div className="grid grid-cols-2 gap-3">
            {coreValues.map((item) => (
              <div key={item.title} className="bg-surface rounded-xl p-3 border border-border">
                <h3 className="font-heading font-bold text-primary text-xs mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="note"
          aria-label="Legal disclaimer"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> trustedukbettingsiteslist.com is an independent comparison and information service. We are not a licensed bookmaker or gambling operator. All operators we feature hold a current, active UKGC licence. Affiliate links may be present — they do not influence our editorial ratings or positions. Please gamble responsibly.{" "}
            <span className="text-destructive font-semibold">18+</span> only.
          </p>
        </div>

      </main>
    </div>
  )
}
