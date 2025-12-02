import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import SEO, { seoConfig } from '../components/SEO'

export default function Services() {
  const { theme } = useTheme()
  
  const services = [
    {
      id: 'vehicle-scrapping',
      icon: '🚗',
      title: 'Vehicle Scrapping',
      short: 'End-of-life vehicle dismantling that is compliant, safe, and traceable.',
      details: [
        'Eligible vehicles: Two-wheelers, cars, SUVs, LCVs, HCVs, and buses',
        'End-of-life and condemned vehicles per applicable norms',
        'Documentation verification (ownership, ID, vehicle papers)',
        'Depollution: fluids, batteries, hazardous materials handling',
        'Secure dismantling and segregation of parts and materials',
        'Complete audit trail for certificates and RTO submission',
      ]
    },
    {
      id: 'certificate-of-deposit',
      icon: '📄',
      title: 'Certificate of Deposit (CoD)',
      short: 'Issued upon vehicle deposit; can be traded or used for incentives.',
      details: [
        'Issued immediately when vehicle is deposited with proper consent',
        'Includes calculated scrap value per MoRTH norms',
        'Can be traded with Global Ultra Tech for additional value',
        'Alternatively, use towards incentives on new vehicle purchase',
        'Official acknowledgment of vehicle submission',
        'Digitally recorded in national systems',
      ]
    },
    {
      id: 'certificate-of-vehicle-scrappage',
      icon: '✅',
      title: 'Certificate of Vehicle Scrappage (CoVS)',
      short: 'Issued after scrappage and RTO submission; key for deregistration.',
      details: [
        'Issued after scrappage completion per MoRTH procedures',
        'Chassis plate and number plate submitted to respective RTO',
        'Serves as formal proof for vehicle deregistration',
        'Required for official records and documentation',
        'Enables clean ownership transfer records',
        'Completes the official end-of-life process',
      ]
    },
    {
      id: 'trade-cod',
      icon: '💰',
      title: 'Trade CoD',
      short: 'Exchange your Certificate of Deposit with us for additional value.',
      details: [
        'Simple, transparent trading process',
        'Submit your CoD details for evaluation',
        'Receive a competitive offer based on current market rates',
        'Complete the exchange process at our facility',
        'Get paid as per agreed terms',
        'Alternative to using CoD for new vehicle incentives',
      ]
    },
  ]

  return (
    <>
      <SEO {...seoConfig.services} />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-display gradient-text">
              Comprehensive Vehicle Scrapping Services
            </h1>
            <p className="mt-6 text-body-lg">
              From initial vehicle deposit to final certificate — we offer end-to-end services 
              that are fully compliant with MoRTH guidelines and national standards.
            </p>
          </div>

          {/* Quick nav */}
          <div className="mt-12 flex flex-wrap gap-3">
            {services.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white'
                    : 'bg-black/5 border border-black/10 text-slate-600 hover:bg-black/10 hover:text-slate-900'
                }`}
              >
                <span>{s.icon}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container-custom space-y-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="card p-8 md:p-12 scroll-mt-24"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-title text-[var(--color-text)]">{service.title}</h2>
                  <p className="mt-4 text-body-lg">{service.short}</p>
                  <Link to="/contact" className="btn-primary mt-8">
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4">Key Details</h3>
                  <ul className="space-y-4">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-body">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="card-glass p-8 md:p-12 text-center">
            <h2 className="text-headline text-[var(--color-text)]">Need Help Choosing a Service?</h2>
            <p className="mt-4 text-body-lg max-w-xl mx-auto">
              Our team is here to guide you through documentation and next steps. 
              Reach out and we'll help you get started.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
