import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

function PolicyBlock({
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
        className="px-5 py-4 text-sm text-muted-foreground leading-relaxed space-y-2"
        aria-labelledby={blockId}
      >
        {children}
      </div>
    </div>
  )
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

const infoWeCollect = [
  "IP address and approximate geographic region",
  "Browser type, version, and operating system",
  "Pages visited, time on site, and navigation path",
  "Cookie consent preferences and session data",
  "Contact form submissions where applicable",
]

const howWeUseInfo = [
  "To deliver and improve editorial content relevant to UK sports bettors",
  "To analyse site traffic patterns and optimise page performance",
  "To measure the effectiveness of affiliate partnerships",
  "To respond to privacy enquiries and data subject requests",
  "To meet our legal obligations under UK GDPR and the Data Protection Act 2018",
]

const yourRights = [
  "Right of access — request a copy of the personal data we hold about you",
  "Right to rectification — correct inaccurate or incomplete information",
  "Right to erasure — request deletion of your personal data",
  "Right to restriction — limit how we process your data in specific circumstances",
  "Right to data portability — receive your data in a structured, machine-readable format",
  "Right to object — object to processing carried out on the basis of legitimate interests",
]

export default function PrivacyPolicyPage() {
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
              <Lock className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-white/45 text-xs mt-1 ml-11">
            trustedukbettingsiteslist.com · Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <main
        className="container mx-auto max-w-3xl px-4 py-8 space-y-4"
        aria-label="Privacy Policy content for Trusted UK Betting Sites List"
      >

        <PolicyBlock title="About This Policy" blockId="trusted-privacy-intro">
          <p>
            Trusted UK Betting Sites List (trustedukbettingsiteslist.com) is committed to protecting the privacy and personal data of every visitor to this site. This Privacy Policy sets out how we collect, use, store, and protect your information in full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
          <p>
            By accessing trustedukbettingsiteslist.com, you acknowledge the practices described in this policy. This document applies exclusively to data collected through this website. Linked third-party sites — including bookmaker operators — maintain their own separate privacy policies, which we encourage you to review independently.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Information We Collect" blockId="trusted-privacy-collect">
          <p>We may collect the following categories of data automatically when you visit our site:</p>
          <DotList items={infoWeCollect} />
          <p className="mt-1">
            We do not request, store, or process sensitive personal data categories such as financial details, health records, or identification documents.
          </p>
        </PolicyBlock>

        <PolicyBlock title="How We Use Your Information" blockId="trusted-privacy-use">
          <DotList items={howWeUseInfo} />
        </PolicyBlock>

        <PolicyBlock title="Lawful Basis for Processing" blockId="trusted-privacy-lawful-basis">
          <p>We process personal data under the following lawful bases defined by UK GDPR:</p>
          <DotList items={[
            "Legitimate interests — improving site quality and measuring affiliate performance",
            "Consent — analytics and optional cookies where you have opted in",
            "Legal obligation — compliance with applicable UK legislation",
          ]} />
        </PolicyBlock>

        <PolicyBlock title="Data Security Measures" blockId="trusted-privacy-security">
          <p>
            We employ appropriate technical and organisational security controls to safeguard all personal data against unauthorised access, accidental loss, disclosure, or alteration. These measures include TLS/SSL encryption for all data transmitted to and from our servers, strict access controls, and scheduled security reviews.
          </p>
          <p>
            Despite these precautions, no internet transmission can be guaranteed as completely secure. We encourage users to exercise caution when sharing personal information online.
          </p>
        </PolicyBlock>

        <PolicyBlock title="How Long We Retain Your Data" blockId="trusted-privacy-retention">
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes described in this policy or as required by applicable law. Analytics data is held in aggregated and anonymised form. Cookie consent records are stored for the duration of your visits to the site.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Affiliate Links & Third-Party Data" blockId="trusted-privacy-third-party">
          <p>
            trustedukbettingsiteslist.com contains affiliate links to UKGC-licensed UK sportsbooks. When you follow these links, third-party cookies and tracking technologies operated by those platforms may be activated, subject to their own privacy policies. We do not sell, rent, or otherwise share personally identifiable visitor data with any third party for commercial marketing purposes.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Your Rights Under UK GDPR" blockId="trusted-privacy-rights">
          <p>As a UK data subject, you are entitled to the following rights:</p>
          <DotList items={yourRights} />
          <p className="mt-1">
            To exercise any of these rights, contact us using the address below. We will respond within 30 calendar days of receiving your request.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Cookies" blockId="trusted-privacy-cookies">
          <p>
            We use cookies to improve browsing experience and measure site usage. For complete details on the cookies we deploy and how to manage your preferences, please consult our{" "}
            <Link
              href="/cookie-policy"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Read our full Cookie Policy"
            >
              Cookie Policy
            </Link>. You can update your preferences at any time via the cookie consent banner or through your browser settings.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Updates to This Policy" blockId="trusted-privacy-updates">
          <p>
            This Privacy Policy may be revised periodically to reflect developments in our data practices or changes to applicable regulations. The &ldquo;Last updated&rdquo; date at the head of this page reflects the most recent revision. Your continued use of trustedukbettingsiteslist.com following any changes constitutes acceptance of the updated policy.
          </p>
        </PolicyBlock>

        {/* Contact card */}
        <div
          className="bg-surface border border-border rounded-xl px-5 py-4"
          role="contentinfo"
          aria-label="Privacy enquiry contact details"
        >
          <p className="text-sm text-muted-foreground">
            Privacy enquiries and data subject requests:{" "}
            <a
              href="mailto:privacy@trustedukbettingsiteslist.com"
              className="text-primary hover:underline underline-offset-2 font-medium"
              aria-label="Email our data protection team"
            >
              privacy@trustedukbettingsiteslist.com
            </a>
          </p>
        </div>

      </main>
    </div>
  )
}
