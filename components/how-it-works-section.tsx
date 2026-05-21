const methodologySteps = [
  {
    number: "01",
    title: "Independent Operator Research",
    body: "Our specialist team reviews every UK bookmaker from the ground up. We scrutinise each UKGC licence in detail, conduct live platform testing, verify bonus terms clause by clause, and evaluate withdrawal speeds using real funded accounts. No operator can pay for inclusion or a higher ranking position.",
  },
  {
    number: "02",
    title: "Regulatory & Safety Standards First",
    body: "Only sportsbooks holding a current, active licence from the UK Gambling Commission qualify for our list. We verify licence status prior to every publication cycle and remove any operator whose authorisation lapses. Licensed operators must legally safeguard player funds, operate fair markets, and provide robust responsible gambling controls.",
  },
  {
    number: "03",
    title: "Composite Scoring & Monthly Updates",
    body: "Each qualifying operator receives a composite expert score across six weighted categories: regulatory standing, welcome offer value, ongoing promotions, odds competitiveness, platform usability, and customer service quality. Rankings are re-evaluated every month — operator positions change whenever performance improves or declines.",
  },
]

export function HowItWorksSection() {
  return (
    <section
      className="bg-background py-10 md:py-12 px-4"
      aria-labelledby="vip-methodology-heading"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-primary mb-1.5">
            Our Methodology
          </p>
          <h2
            id="vip-methodology-heading"
            className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight"
          >
            How VIP UK Betting Sites Works
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
            Every ranking on this page is built on structured, independent research. Here is the exact process we use to assess and score UK betting operators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list">
          {methodologySteps.map(({ number, title, body }) => (
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial independence note */}
        <div
          className="mt-6 bg-surface border border-border rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
          role="note"
          aria-label="Editorial independence statement"
        >
          <div className="flex-1">
            <p className="font-heading font-bold text-sm text-foreground mb-0.5">Editorial Independence</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              VIP UK Betting Sites may earn affiliate revenue when you visit an operator through our links. This commercial arrangement has no bearing on our editorial rankings or expert scoring — assessments are determined solely by our methodology criteria.
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
