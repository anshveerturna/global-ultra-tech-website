import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import SEO, { seoConfig } from '../components/SEO'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What documents are required to scrap my vehicle?',
    answer: 'You need to bring the original Registration Certificate (RC), a valid government-issued ID proof (Aadhaar/PAN/Voter ID), and any existing insurance papers if available. For commercial vehicles, additional permits may be required. We verify all documents before proceeding with the scrapping process.'
  },
  {
    question: 'How is my vehicle\'s scrap value determined?',
    answer: 'The scrap value is calculated based on several factors: vehicle type and category, total weight of the vehicle, current market rates for scrap metal, overall condition (salvageable parts vs. complete scrap), and prevailing aluminum, copper, and steel prices. We provide transparent valuations and you can use our pricing calculator for an estimate.'
  },
  {
    question: 'How long does the entire scrapping process take?',
    answer: 'The complete process typically takes 24–48 hours from when you bring the vehicle to our facility. This includes document verification, vehicle inspection, scrapping, and certificate issuance. However, if there are any discrepancies in documents or pending dues, additional time may be required for resolution.'
  },
  {
    question: 'What certificates will I receive after scrapping?',
    answer: 'You will receive two official certificates: the Certificate of Deposit (CoD) issued immediately after vehicle deposit and verification, and the Certificate of Vehicle Scrappage (CoVS) issued after the vehicle is completely scrapped. Both certificates are registered on the Vahan portal and linked to MoRTH records.'
  },
  {
    question: 'Can I trade or sell my Certificate of Deposit (CoD)?',
    answer: 'Yes, the CoD is tradeable. You can sell it to buyers who wish to purchase new vehicles and avail of the associated incentives. We facilitate CoD trading and can help connect you with potential buyers. The traded CoD retains all its benefits for the new holder when purchasing a qualifying vehicle.'
  },
  {
    question: 'What incentives do I get for scrapping my old vehicle?',
    answer: 'Under the Vehicle Scrappage Policy, you may be eligible for: registration fee discounts on new vehicle purchases (up to 25% for private vehicles, up to 15% for commercial), road tax rebates varying by state, and manufacturer discounts offered by various automakers for new vehicle purchases. The CoD enables you to claim these incentives.'
  },
  {
    question: 'Do you offer vehicle pickup service?',
    answer: 'Yes, we offer paid pickup service for vehicles that cannot be driven to our facility. The pickup charge depends on the distance and vehicle type. You can schedule a pickup through our contact page or by calling us directly. We cover Rampur and all nearby districts.'
  },
  {
    question: 'What happens to the number plates after scrapping?',
    answer: 'Number plates are destroyed as part of the scrapping process. We document this destruction and it is recorded in the official scrappage records. The vehicle registration is formally deregistered from the Vahan database, and you will no longer have any liability associated with that registration number.'
  },
  {
    question: 'Which vehicles are eligible for scrapping at your facility?',
    answer: 'We accept all types of vehicles: two-wheelers, three-wheelers, cars, SUVs, commercial vehicles, buses, and trucks. The vehicle should be registered in India and the owner (or authorized representative) should have valid documentation. Vehicles with pending legal cases, unpaid challans, or loan dues need to be cleared before scrapping.'
  },
  {
    question: 'Is my personal data safe during the scrapping process?',
    answer: 'Absolutely. We follow strict data protection protocols. Your personal information is only used for verification and certificate issuance purposes. All data is handled in accordance with MoRTH guidelines and is securely stored. We do not share your information with any third parties except as required for official registration deregistration.'
  }
]

export default function FAQ() {
  const { theme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO {...seoConfig.faq} />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">FAQ</p>
            <h1 className="text-display gradient-text">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-body-lg">
              Everything you need to know about vehicle scrapping, documentation, certificates, 
              and the process at Global Ultra Tech RVSF.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-medium text-[var(--color-text)] pr-4">{faq.question}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-neutral-800' : 'bg-slate-200'} flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className={`px-6 pb-6 text-body border-t ${theme === 'dark' ? 'border-neutral-800' : 'border-slate-200'} pt-4`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={`section ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-[var(--color-text)]">Still Have Questions?</h2>
            <p className="mt-4 text-body-lg">
              Our team is ready to help. Reach out to us or explore more about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a href="/contact" className="card p-8 text-center group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-emerald-400 transition-colors">Contact Us</h3>
              <p className="mt-2 text-body">Get personalized assistance</p>
            </a>
            <a href="/services" className="card p-8 text-center group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-emerald-400 transition-colors">Our Services</h3>
              <p className="mt-2 text-body">Learn what we offer</p>
            </a>
            <a href="/pricing" className="card p-8 text-center group hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-emerald-400 transition-colors">Pricing Calculator</h3>
              <p className="mt-2 text-body">Get an estimate</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-emerald-500/10 to-transparent">
            <h2 className="text-headline text-[var(--color-text)]">Ready to Scrap Your Vehicle?</h2>
            <p className="mt-4 text-body-lg max-w-xl mx-auto">
              Join thousands of vehicle owners who have trusted Global Ultra Tech for 
              compliant, transparent, and efficient vehicle scrapping.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Get Started
              </a>
              <a href="tel:+919876543210" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
