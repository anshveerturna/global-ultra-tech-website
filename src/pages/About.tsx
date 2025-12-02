import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import SEO, { seoConfig } from '../components/SEO'

export default function About() {
  const { theme } = useTheme()
  const values = [
    { icon: '🛡️', title: 'Safety & Compliance', desc: 'Strict adherence to MoRTH guidelines and environmental safety standards in every operation.' },
    { icon: '🤝', title: 'Integrity & Transparency', desc: 'Honest valuations, clear documentation, and complete visibility throughout the process.' },
    { icon: '🌱', title: 'Environmental Stewardship', desc: 'Responsible recycling that reduces pollution and supports the circular economy.' },
    { icon: '⚡', title: 'Operational Excellence', desc: 'Efficient processes, quick turnaround, and professional service delivery.' },
  ]

  const services = [
    'Vehicle scrapping per MoRTH procedures',
    'Certificate of Deposit (CoD) issuance',
    'Certificate of Vehicle Scrappage (CoVS) issuance',
    'CoD trading for additional value',
    'Paid pickup service available',
  ]

  const milestones = [
    { year: '2020', event: 'Founded under India\'s Vehicle Scrappage Policy' },
    { year: '2021', event: 'Completed first 100 vehicle scrappage operations' },
    { year: '2022', event: 'Expanded facility capacity and team' },
    { year: '2023', event: 'Achieved 500+ vehicles scrapped milestone' },
    { year: '2024', event: 'Recognized as leading RVSF in the region' },
  ]

  return (
    <>
      <SEO {...seoConfig.about} />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-display gradient-text">
              Global Ultra Tech
            </h1>
            <p className="mt-6 text-body-lg">
              Founded in 2020 under India's Vehicle Scrappage Policy, we are a Registered Vehicle 
              Scrapping Facility (RVSF) committed to environmentally responsible and compliant 
              vehicle scrapping services.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="card p-8 md:p-12">
              <h2 className="text-headline text-[var(--color-text)]">Our Story</h2>
              <p className="mt-6 text-body-lg">
                Global Ultra Tech was established in 2020 as one of the pioneering Registered Vehicle 
                Scrapping Facilities in Uttar Pradesh, responding to India's national Vehicle Scrappage Policy.
              </p>
              <p className="mt-4 text-body">
                Based in Village Bishanpur Jagir, District Rampur-244921, we have grown to become the 
                leading RVSF in the region by the number of vehicles scrapped. Our facility is directly 
                linked with the Ministry of Road Transport and Highways and registered on the Vahan portal.
              </p>
              <p className="mt-4 text-body">
                We serve vehicle owners across Rampur and nearby districts, providing end-to-end scrapping 
                services that include vehicle pickup, documentation, scrapping, and certificate issuance — 
                all aligned with national standards.
              </p>
            </div>
            <div>
              <div className="card p-8">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">Location</h3>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-[var(--color-text)] font-medium">Village Bishanpur Jagir</div>
                    <div className="text-[var(--color-text-muted)]">District Rampur-244921</div>
                    <div className="text-[var(--color-text-muted)]">Uttar Pradesh, India</div>
                  </div>
                </div>
              </div>
              <div className="card p-8 mt-6">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">Credentials</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="badge">MoRTH Linked</span>
                    <span className="text-sm text-[var(--color-text-muted)]">Ministry of Road Transport & Highways</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge">Vahan Registered</span>
                    <span className="text-sm text-[var(--color-text-muted)]">National Vehicle Registry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={`section ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-[var(--color-text)]">Mission & Values</h2>
            <p className="mt-4 text-body-lg">
              To deliver safe, transparent, and efficient vehicle scrappage services that protect 
              the environment, support circular economy goals, and simplify the process for vehicle owners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{value.title}</h3>
                <p className="mt-3 text-body">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-headline text-[var(--color-text)]">What We Do</h2>
                <p className="mt-4 text-body-lg">
                  We provide comprehensive vehicle scrapping services under MoRTH guidelines, 
                  from initial contact to final certificate issuance.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                  View all services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div>
                <ul className="space-y-4">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-body">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-[var(--color-text)]">Our Journey</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-emerald-400 font-semibold text-lg w-16 shrink-0">{milestone.year}</div>
                  <div className="flex-1 card p-6">
                    <p className="text-body">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="card p-8 md:p-12 text-center">
            <h2 className="text-headline text-[var(--color-text)]">Ready to Work With Us?</h2>
            <p className="mt-4 text-body-lg max-w-xl mx-auto">
              Our team is here to guide you through the entire vehicle scrapping process.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/pricing" className="btn-secondary">
                Check Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
