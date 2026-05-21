import { SiteHeader } from "@/components/site-header"
import { SiteHero } from "@/components/site-hero"
import { FeaturedPickSection } from "@/components/featured-pick-section"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { VerificationMethodSection } from "@/components/verification-method-section"
import { BettingGuide } from "@/components/betting-guide"
import { FaqSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background" aria-label="Trusted UK Betting Sites List - Homepage">
      <SiteHeader />
      <SiteHero />
      <LeaderboardSection />
      <VerificationMethodSection />
      <BettingGuide />
      <FeaturedPickSection />
      <FaqSection />
    </main>
  )
}
