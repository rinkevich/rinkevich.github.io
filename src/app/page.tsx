import { siteConfig } from "@/lib/site"
import { BusinessCard } from "@/components/business-card"

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressCountry: siteConfig.location.country,
  },
  knowsAbout: siteConfig.knowsAbout,
  sameAs: siteConfig.sameAs,
}

export default function Page() {
  return (
    <main className="from-background to-muted/20 flex min-h-dvh items-center justify-center bg-gradient-to-b px-4 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personLd).replace(/</g, "\\u003c"),
        }}
      />
      <BusinessCard />
    </main>
  )
}
