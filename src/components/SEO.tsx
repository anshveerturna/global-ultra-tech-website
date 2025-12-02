import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogType?: 'website' | 'article' | 'product'
  ogImage?: string
  ogImageAlt?: string
  noIndex?: boolean
  structuredData?: object
}

const SITE_NAME = 'Global Ultra Tech'
const BASE_URL = 'https://global-ultra-tech-website.vercel.app'
const DEFAULT_IMAGE = `${BASE_URL}/images/glob1.jpg`
const DEFAULT_DESCRIPTION = 'Global Ultra Tech is a MoRTH-registered Vehicle Scrapping Facility (RVSF) in Rampur, UP. Get Certificate of Deposit (CoD), Certificate of Vehicle Scrappage (CoVS), fair scrap value & pickup service.'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'Global Ultra Tech Vehicle Scrapping Facility',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | RVSF - Registered Vehicle Scrapping Facility Rampur`
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// Pre-configured SEO data for each page
export const seoConfig = {
  home: {
    title: 'Vehicle Scrapping Facility Rampur',
    description: 'Global Ultra Tech is a MoRTH-registered RVSF in Rampur, UP. Get Certificate of Deposit (CoD), Certificate of Vehicle Scrappage (CoVS), fair scrap value, and vehicle pickup service.',
    keywords: 'RVSF, vehicle scrapping, Rampur, Uttar Pradesh, CoD, CoVS, MoRTH, scrappage policy, car scrapping, vehicle recycling',
    canonical: '/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Global Ultra Tech - Vehicle Scrapping Facility",
      "description": "MoRTH-registered Vehicle Scrapping Facility in Rampur, Uttar Pradesh",
      "url": "https://global-ultra-tech-website.vercel.app/",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Global Ultra Tech",
        "description": "Registered Vehicle Scrapping Facility (RVSF)"
      }
    }
  },
  services: {
    title: 'Vehicle Scrapping Services',
    description: 'Complete vehicle scrapping services: CoD issuance, CoVS certification, CoD trading, and paid pickup. MoRTH-compliant process for cars, bikes, commercial vehicles in Rampur, UP.',
    keywords: 'vehicle scrapping services, Certificate of Deposit, Certificate of Vehicle Scrappage, CoD trading, vehicle pickup, Rampur RVSF',
    canonical: '/services',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Vehicle Scrapping",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Global Ultra Tech"
      },
      "areaServed": {
        "@type": "State",
        "name": "Uttar Pradesh"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehicle Scrapping Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Scrapping" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificate of Deposit (CoD)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificate of Vehicle Scrappage (CoVS)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CoD Trading" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Pickup Service" } }
        ]
      }
    }
  },
  scrapValue: {
    title: 'Scrap Value Calculator',
    description: 'Calculate your vehicle scrap value online. Get fair estimates for cars, bikes, SUVs, commercial vehicles based on weight, condition & market rates. MoRTH-compliant valuations.',
    keywords: 'vehicle scrap value, car scrap price, scrap calculator, vehicle valuation, scrap metal price, two wheeler scrap value, commercial vehicle scrap',
    canonical: '/scrap-value',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Vehicle Scrap Value Calculator",
      "description": "Calculate estimated scrap value for your end-of-life vehicle",
      "applicationCategory": "Calculator",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      }
    }
  },
  policyCompliance: {
    title: 'Policy & Compliance',
    description: 'Learn about India\'s Vehicle Scrappage Policy and MoRTH compliance requirements. Global Ultra Tech follows all regulatory guidelines for safe, eco-friendly vehicle scrapping.',
    keywords: 'vehicle scrappage policy, MoRTH guidelines, RVSF compliance, vehicle scrapping regulations, environmental compliance, RTO submission',
    canonical: '/policy-compliance',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Vehicle Scrappage Policy & Compliance",
      "description": "Understanding India's Vehicle Scrappage Policy and MoRTH compliance requirements",
      "author": {
        "@type": "Organization",
        "name": "Global Ultra Tech"
      }
    }
  },
  about: {
    title: 'About Us',
    description: 'Global Ultra Tech: Founded 2020 in Rampur, UP. MoRTH-registered RVSF with 1000+ vehicles scrapped. Committed to compliant, eco-friendly vehicle scrapping under India\'s Scrappage Policy.',
    keywords: 'Global Ultra Tech, RVSF Rampur, vehicle scrapping company, about us, company history, scrapping facility UP',
    canonical: '/about',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Global Ultra Tech",
        "foundingDate": "2020",
        "foundingLocation": "Rampur, Uttar Pradesh",
        "description": "Registered Vehicle Scrapping Facility (RVSF) committed to environmentally responsible and compliant vehicle scrapping services"
      }
    }
  },
  contact: {
    title: 'Contact Us',
    description: 'Contact Global Ultra Tech for vehicle scrapping inquiries. Request scrapping, schedule pickup, or get a quote. Located in Rampur, UP with pickup service across nearby districts.',
    keywords: 'contact RVSF, vehicle scrapping inquiry, pickup request, scrapping quote, Rampur contact, vehicle disposal',
    canonical: '/contact',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Global Ultra Tech",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Village Bishanpur Jagir",
          "addressLocality": "Rampur",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "244921",
          "addressCountry": "IN"
        }
      }
    }
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions',
    description: 'FAQs about vehicle scrapping: documents required, scrap value calculation, process duration, certificates (CoD/CoVS), incentives, pickup service, and more.',
    keywords: 'vehicle scrapping FAQ, scrapping documents, CoD CoVS explained, scrap value calculation, scrapping process, vehicle incentives',
    canonical: '/faq',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What documents are required to scrap my vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need the original Registration Certificate (RC), valid government ID (Aadhaar/PAN/Voter ID), and insurance papers if available."
          }
        },
        {
          "@type": "Question",
          "name": "How is my vehicle's scrap value determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scrap value is calculated based on vehicle type, weight, current market rates, condition, and prevailing metal prices."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the scrapping process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The complete process typically takes 24-48 hours including document verification, scrapping, and certificate issuance."
          }
        },
        {
          "@type": "Question",
          "name": "What certificates will I receive after scrapping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You receive Certificate of Deposit (CoD) upon vehicle deposit and Certificate of Vehicle Scrappage (CoVS) after complete scrapping."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer vehicle pickup service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer paid pickup service covering Rampur and all nearby districts based on distance and vehicle type."
          }
        }
      ]
    }
  }
}
