export interface Sportsbook {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  description: string
  welcomeOffer: string
  terms: string
  isVerifiedPick?: boolean
  isBestValue?: boolean
  isPopularChoice?: boolean
  isTrendingNow?: boolean
}

const standardTerms = "18+ | New customers only | T&Cs apply | BeGambleAware.org"

export const sportsbooks: Sportsbook[] = [
    {
    id: 1,
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    url: "https://www.betvictor.com/",
    rating: 9.8,
    stars: 5,
    reviews: 3846,
    badges: ["BEST VALUE"],
    description: "Premium sportsbook with deep in-play markets and consistent odds quality",
    welcomeOffer: "£30 Free Bets",
    terms: standardTerms,
    isBestValue: true,
  },

  {
    id: 2,
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30",
    url: "https://www.ladbrokes.com/",
    rating: 9.7,
    stars: 5,
    reviews: 4017,
    badges: ["VERIFIED PICK"],
    description: "One of the UK's most established and trusted bookmakers with full UKGC coverage",
    welcomeOffer: "£30 Welcome Bonus",
    terms: standardTerms,
    isVerifiedPick: true,
  },
  {
    id: 3,
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    url: "https://www.boylesports.com",
    rating: 9.6,
    stars: 5,
    reviews: 3526,
    badges: ["GREAT ODDS"],
    description: "Highly competitive odds with an excellent mobile-first betting experience",
    welcomeOffer: "New Customers Only",
    terms: standardTerms,
    isTrendingNow: true,
  },

  {
    id: 4,
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    url: "https://www.midnite.com",
    rating: 9.5,
    stars: 5,
    reviews: 3185,
    badges: ["TRENDING"],
    description: "Modern sports betting platform built for the next generation of UK bettors",
    welcomeOffer: "£30 Free Bets",
    terms: standardTerms,
    isTrendingNow: true,
  },
    {
    id:5,
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    url: "https://www.betfred.com/",
    rating: 9.4,
    stars: 5,
    reviews: 3571,
    badges: ["POPULAR CHOICE"],
    description: "Huge range of markets and a generous welcome package for new customers",
    welcomeOffer: "£50 Free Bets",
    terms: standardTerms,
    isPopularChoice: true,
  },
]
