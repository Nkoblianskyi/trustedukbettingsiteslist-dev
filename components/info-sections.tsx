"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react"

function AccordionPanel({
  title,
  panelId,
  children,
  defaultOpen = false,
}: {
  title: string
  panelId: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
        aria-controls={panelId}
        id={`${panelId}-trigger`}
      >
        <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
        }
      </button>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={`${panelId}-trigger`}
          className="pb-7 space-y-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed"
        >
          {children}
        </div>
      )}
    </div>
  )
}

export function InfoSections() {
  return (
    <section
      className="bg-surface py-10 md:py-14 px-4"
      aria-labelledby="vip-guide-heading"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h2
              id="vip-guide-heading"
              className="font-heading font-extrabold text-xl text-foreground leading-none"
            >
              VIP Betting Guide
            </h2>
            <p className="text-[12px] text-muted-foreground mt-0.5">Expert insight for UK sports bettors</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl px-5 md:px-8">

          <AccordionPanel panelId="vip-rating-methodology" title="How VIP UK Betting Sites Rates Sportsbooks" defaultOpen>
            <p>
              vipukbettingsites.com applies a rigorous, independent methodology to every bookmaker assessed on this page. Our specialist editorial team spends several weeks testing each operator in depth before any rating is published. No bookmaker can pay for inclusion or to influence their score.
            </p>
            <p>
              <span className="text-foreground font-semibold">Regulatory standing and player safety</span> carry the greatest weight in our scoring model. We verify that each site holds a current, active UK Gambling Commission licence, confirm SSL encryption meets industry standards, examine player fund protection tiers, and test that responsible gambling controls are prominently accessible.
            </p>
            <p>
              <span className="text-foreground font-semibold">Welcome offers and ongoing promotions</span> are evaluated on genuine punter value rather than headline numbers. Every term and condition is read in full — including wagering requirements, maximum stake restrictions, time limits, and eligible market exclusions — and offers are scored on how fairly they serve ordinary bettors.
            </p>
            <p>
              <span className="text-foreground font-semibold">Odds quality</span> is benchmarked by comparing prices across a representative range of Premier League, horse racing, tennis, and cricket markets. We calculate operator overrounds and assess market depth. Consistently competitive odds directly raise a site&apos;s composite score.
            </p>
            <p>
              <span className="text-foreground font-semibold">Platform, payments, and support</span> complete our assessment. We verify registration flows on mobile and desktop, test deposits and withdrawals, record live chat response times, and evaluate the breadth and accuracy of each help centre.
            </p>
          </AccordionPanel>

          <AccordionPanel panelId="vip-good-site-criteria" title="What Defines a Top-Tier UK Betting Site in 2026">
            <p>
              The UK gambling market operates under some of the world&apos;s most comprehensive regulatory frameworks, which provides meaningful protection for bettors. Every operator on vipukbettingsites.com must hold a UKGC licence — a legal requirement to segregate player funds, prominently display responsible gambling tools, and submit to regular independent compliance audits.
            </p>
            <p>
              Beyond the licence, the leading UK sportsbooks in {new Date().getFullYear()} share consistent traits. They offer sharp, competitive odds across football, horse racing, tennis, golf, and cricket. They complete withdrawals within 24 hours to standard UK bank accounts and debit cards. Their mobile platforms are stable, intuitive, and fast under pressure.
            </p>
            <p>
              Welcome bonuses are assessed but should not be the sole consideration when choosing an operator. A strong calendar of ongoing promotions — including accumulator insurance, price boosts, and loyalty schemes — is a far more reliable indicator of long-term punter value than a single sign-up incentive.
            </p>
          </AccordionPanel>

          <AccordionPanel panelId="vip-responsible-gambling" title="Responsible Gambling — Know Your Limits">
            <p>
              Sports betting is entertainment. It should never be viewed as a source of income or a financial strategy. Every UKGC-licensed operator is required by law to provide a comprehensive suite of responsible gambling tools, and we strongly encourage all bettors to utilise them from the moment they register.
            </p>
            <p>
              <span className="text-foreground font-semibold">Deposit limits</span> let you cap the amount you load onto an account on a daily, weekly, or monthly basis. UKGC rules require operators to enforce a cooling-off period before any increase takes effect, which prevents impulsive spending decisions.
            </p>
            <p>
              <span className="text-foreground font-semibold">Self-exclusion</span> is available across every licensed UK platform and through GAMSTOP, the national register that simultaneously blocks access to all UKGC-licensed sites. GambleAware (<span className="text-primary">www.begambleaware.org</span>) and GamCare (<span className="text-primary">www.gamcare.org.uk</span>) provide confidential, expert support around the clock at no cost.
            </p>
            <div className="border-l-2 border-destructive pl-4 text-foreground bg-destructive/8 py-3 pr-3 rounded-r-lg">
              <strong>18+ only.</strong> Gambling carries financial risk. Never wager more than you are prepared to lose. If gambling is affecting your mental health, relationships, or finances, please seek immediate professional help.
            </div>
          </AccordionPanel>

          <AccordionPanel panelId="vip-faq" title="Frequently Asked Questions">
            <div className="space-y-5">
              <div>
                <h4 className="text-foreground font-semibold mb-1.5">Are all sites on VIP UK Betting Sites fully licensed?</h4>
                <p>Yes, without exception. Every operator featured on vipukbettingsites.com holds a current, active licence issued by the UK Gambling Commission. We verify licence status before each publication cycle and remove any operator whose authorisation lapses or is suspended.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1.5">How are VIP rankings determined?</h4>
                <p>Rankings reflect our independent composite expert score, weighted across six categories: regulatory standing, welcome offer fairness, ongoing promotions, odds quality, platform usability, and customer support. The list is reviewed and updated each month throughout {new Date().getFullYear()}.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1.5">Do you receive commission from listed bookmakers?</h4>
                <p>We may earn affiliate revenue when a user clicks through to a bookmaker and registers. This commercial arrangement does not affect our editorial positions. Sites are scored on objective merit alone and rankings cannot be purchased.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1.5">Can I hold accounts at multiple betting sites?</h4>
                <p>Yes. Most experienced bettors maintain accounts at two or three operators simultaneously to access the best available odds and take advantage of different promotional offerings across a sporting calendar.</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1.5">What payment methods do UK betting sites accept?</h4>
                <p>All operators on our list accept Visa and Mastercard debit cards. Credit card gambling is prohibited under UKGC regulations. Most platforms additionally support PayPal, Apple Pay, Google Pay, and direct bank transfer. Specific payment options vary by operator.</p>
              </div>
            </div>
          </AccordionPanel>

        </div>
      </div>
    </section>
  )
}
