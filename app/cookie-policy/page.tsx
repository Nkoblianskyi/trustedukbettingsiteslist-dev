import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

function CookieBlock({
  title,
  blockId,
  children,
}: {
  title: string
  blockId: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h2 id={blockId} className="font-heading font-bold text-base text-foreground">
          {title}
        </h2>
      </div>
      <div
        className="px-5 py-4 text-sm text-muted-foreground leading-relaxed"
        aria-labelledby={blockId}
      >
        {children}
      </div>
    </div>
  )
}

const cookieTypes = [
  {
    title:    "Strictly Necessary Cookies",
    tag:      "Required",
    tagStyle: "bg-primary/12 text-primary border border-primary/25",
    desc:     "Essential for the core operation of trustedukbettingsiteslist.com — including storing your cookie consent preference. These cookies cannot be disabled while the site is in use and do not collect personally identifiable information.",
  },
  {
    title:    "Performance & Analytics Cookies",
    tag:      "Optional",
    tagStyle: "bg-surface text-muted-foreground border border-border",
    desc:     "Allow us to understand how visitors interact with our content so we can improve page structure, editorial quality, and overall performance. All data collected via these cookies is aggregated and anonymised.",
  },
  {
    title:    "Affiliate & Attribution Cookies",
    tag:      "Optional",
    tagStyle: "bg-surface text-muted-foreground border border-border",
    desc:     "Used to measure the performance of our affiliate partnerships and to ensure editorial comparisons remain accurate. No personally identifiable information is shared with third-party advertisers.",
  },
]

export default function CookiePolicyPage() {
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
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 bg-primary/15 border border-primary/25 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <Cookie className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Cookie Policy
            </h1>
          </div>
          <p className="text-white/45 text-xs mt-1 ml-11">
            trustedukbettingsiteslist.com · Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Cookie Policy content for Trusted UK Betting Sites List"
      >

        <CookieBlock title="What Are Cookies?" blockId="trusted-cookie-what">
          <p>
            Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your browser across sessions and retain certain preferences — such as your consent choices — so your experience is consistent on return visits.
          </p>
          <p className="mt-2">
            Cookies used on trustedukbettingsiteslist.com do not collect personally identifiable information unless you have explicitly provided it through a site feature. All consent preferences are stored locally on your device.
          </p>
        </CookieBlock>

        {/* Cookie type table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <h2
              id="trusted-cookie-types"
              className="font-heading font-bold text-base text-foreground"
            >
              Cookie Categories We Use
            </h2>
          </div>
          <div
            className="divide-y divide-border"
            aria-labelledby="trusted-cookie-types"
            role="list"
          >
            {cookieTypes.map((item) => (
              <div key={item.title} className="px-5 py-4" role="listitem">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-semibold text-foreground text-sm">{item.title}</h3>
                  <span
                    className={`${item.tagStyle} text-[10px] px-2.5 py-0.5 rounded-full font-heading font-bold uppercase tracking-wide`}
                    aria-label={`Cookie category: ${item.tag}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <CookieBlock title="Managing Your Cookie Preferences" blockId="trusted-cookie-manage">
          <p>
            You can update your cookie preferences at any time via the consent banner displayed on your first visit to trustedukbettingsiteslist.com. Selecting &ldquo;Essential Only&rdquo; disables all non-essential cookies while retaining full site functionality.
          </p>
          <p className="mt-2">
            You can also manage cookie storage directly through your browser settings. The following browsers provide clear guidance on this:
          </p>
          <ul className="mt-2 space-y-1.5">
            {["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"].map((browser) => (
              <li key={browser} className="flex items-start gap-2 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                {browser}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs">
            Please note that disabling strictly necessary cookies may affect certain site features, including the storage of your consent preferences.
          </p>
        </CookieBlock>

        <CookieBlock title="Third-Party Cookies" blockId="trusted-cookie-third-party">
          <p>
            Certain third-party services integrated with trustedukbettingsiteslist.com — including analytics platforms and affiliate tracking networks — may set their own cookies, governed by their respective privacy and cookie policies. We recommend reviewing the policies of any third-party services you interact with through our site.
          </p>
        </CookieBlock>

        <CookieBlock title="Policy Updates" blockId="trusted-cookie-updates">
          <p>
            This Cookie Policy may be revised periodically to reflect changes in our cookie practices or applicable regulatory requirements. The &ldquo;Last updated&rdquo; date at the head of this page indicates when the most recent revision was published. Your continued use of trustedukbettingsiteslist.com following any updates constitutes acceptance of the revised policy.
          </p>
        </CookieBlock>

        {/* Contact card */}
        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="contentinfo"
          aria-label="Cookie enquiry contact details"
        >
          <p className="text-sm text-muted-foreground">
            Cookie or privacy enquiries:{" "}
            <a
              href="mailto:cookies@trustedukbettingsiteslist.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Email our cookie and privacy team"
            >
              cookies@trustedukbettingsiteslist.com
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}
