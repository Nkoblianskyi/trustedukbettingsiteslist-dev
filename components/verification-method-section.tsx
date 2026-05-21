const assessmentSteps = [
  {
    number: "01",
    title: "Full Operator Due Diligence",
    body: "Our specialist team examines every UK bookmaker from the ground up. We verify each UKGC licence in detail, conduct live platform testing across mobile and desktop, scrutinise bonus terms clause by clause, and assess withdrawal processing using real funded accounts. No operator can pay for inclusion or a higher position.",
  },
  {
    number: "02",
    title: "Regulatory & Player Safety Review",
    body: "Only sportsbooks holding a current, active UK Gambling Commission licence qualify for our list. We confirm licence status ahead of every publication cycle and delist any operator whose authorisation lapses. Licensed operators must legally safeguard customer funds, operate fair markets, and provide comprehensive responsible gambling controls.",
  },
  {
    number: "03",
    title: "Composite Scoring & Monthly Refresh",
    body: "Each qualifying operator receives a composite expert score across six weighted categories: regulatory standing, welcome offer value, ongoing promotions, odds competitiveness, platform quality, and customer service. Rankings are reassessed every month — operator positions shift whenever performance improves or declines.",
  },
]

export function VerificationMethodSection() {
  return (
    <section
      className="bg-surface py-10 md:py-12 px-4 section-pitch"
      aria-labelledby="trusted-methodology-heading"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-1.5">
            Our Verification Process
          </p>
          <h2
            id="trusted-methodology-heading"
            className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight"
          >
            How We Build the Trusted List
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
            Every ranking on this page is built on structured, independent research. Below is the exact process we use to assess and score UK betting operators before they appear on our list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
          {assessmentSteps.map(({ number, title, body }) => (
            <div
              key={number}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 card-hover"
              role="listitem"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-heading font-extrabold text-3xl text-primary/25 select-none"
                  aria-hidden="true"
                >
                  {number}
                </span>
                <div className="w-6 h-[2px] bg-primary/40 rounded" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial independence note */}
        <div
          className="mt-6 bg-card border border-border rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
          role="note"
          aria-label="Editorial independence statement"
        >
          <div className="flex-1">
            <p className="font-heading font-bold text-sm text-foreground mb-0.5">Editorial Independence Guarantee</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trusted UK Betting Sites List may earn affiliate revenue when you visit an operator through our links. This commercial arrangement has no bearing on our editorial rankings or expert scores — all assessments are determined solely by our verification methodology and applied without exception.
            </p>
          </div>
          <div className="flex-shrink-0 text-[11px] font-heading font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-lg px-3 py-2 bg-card whitespace-nowrap">
            18+ Gamble Responsibly
          </div>
        </div>

      </div>
    </section>
  )
}
