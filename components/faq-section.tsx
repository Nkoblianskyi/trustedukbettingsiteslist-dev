"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do you decide which UK betting sites make your list?",
    answer:
      "Every operator we feature holds a valid UK Gambling Commission (UKGC) licence. Beyond that baseline, our analysts score each site across six weighted categories: licence & regulatory standing, bonus fairness (wagering requirements, time limits), odds competitiveness, sports market depth, payment speed, and customer support responsiveness. Only sites that clear a minimum threshold in all six areas are published on this list.",
  },
  {
    question: "Are the betting sites on your list safe to use?",
    answer:
      "Yes — UKGC-licensed operators are subject to some of the toughest consumer-protection rules in the world, including mandatory Responsible Gambling tools (deposit limits, self-exclusion, reality checks) and segregated customer funds. We additionally check each operator's complaint history on independent review platforms before awarding a verified status.",
  },
  {
    question: "What does the Verification Score mean?",
    answer:
      "Our Verification Score (displayed out of 10.0) is a composite metric calculated from our six-pillar evaluation framework. A score above 9.0 indicates an elite-tier operator with consistently strong performance across all categories. Scores between 8.0–8.9 reflect a highly reliable site with minor limitations in one or two areas. We reassess scores every quarter.",
  },
  {
    question: "Do you accept payments or sponsorships from the sites you review?",
    answer:
      "Trustedukbettingsiteslist.com operates on an affiliate commission model — we may earn a referral fee when you click through and sign up to a listed site. This commercial relationship does not influence editorial rankings. Sites cannot pay to improve their position; scores are determined solely by our assessment criteria. We maintain a clear separation between editorial and commercial teams.",
  },
  {
    question: "What is a welcome bonus and how does it work?",
    answer:
      "A welcome bonus is an introductory incentive offered by a bookmaker to new customers, most commonly in the form of matched free bets or bonus funds. For example, a '£30 in free bets' offer typically means you must place a qualifying deposit and bet, then the site credits your account with free bet tokens of equal or specified value. Always read the full terms — minimum odds, qualifying bet requirements, and expiry dates vary significantly between operators.",
  },
  {
    question: "Can I bet on mobile with the sites you list?",
    answer:
      "Every operator on our list offers a fully responsive mobile browser experience, and the majority also provide dedicated iOS and Android apps. App availability is noted on each individual site card. We test mobile usability as part of our review process, covering navigation speed, in-play betting performance, and the ease of deposits and withdrawals on smaller screens.",
  },
  {
    question: "What should I do if I think my gambling is becoming a problem?",
    answer:
      "Please seek help immediately. In the UK, free confidential support is available 24/7 from the National Gambling Helpline (0808 8020 133) and GamCare. All UKGC-licensed sites are legally required to offer self-exclusion tools — you can also register with GAMSTOP (gamstop.co.uk) to self-exclude from all UK-licensed online gambling sites simultaneously. Your well-being always takes priority over any offer or bonus on this site.",
  },
  {
    question: "How often is the list updated?",
    answer:
      "We conduct a full re-evaluation of all listed operators on a quarterly basis. In addition, we monitor licence changes, regulatory fines, and major product updates in real time. If an operator loses its UKGC licence, receives a significant regulatory sanction, or materially downgrades its product, it is removed from the list immediately — regardless of the quarterly cycle.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function handleToggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="section-pitch py-20 px-4"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block trusted-badge text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Expert Answers
          </span>
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-4xl text-foreground text-balance"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Everything you need to know about how we evaluate UK betting sites and how to use them safely.
          </p>
        </div>

        {/* Accordion */}
        <dl className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="card-hover rounded-lg border border-border bg-card overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="font-heading text-base md:text-lg text-foreground leading-snug text-pretty">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-border text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180 border-primary/50 bg-primary/10" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </dd>
              </div>
            )
          })}
        </dl>

        {/* Bottom note */}
        <p className="mt-10 text-center text-xs text-muted-foreground leading-relaxed">
          18+ only. Gambling can be addictive — please play responsibly.{" "}
          <a
            href="/responsible-gambling"
            className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            Read our Responsible Gambling guide
          </a>
          .
        </p>
      </div>
    </section>
  )
}
