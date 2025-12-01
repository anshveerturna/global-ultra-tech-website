import { Link } from 'react-router-dom'

export default function Home() {
  const processSteps = [
    { num: '01', title: 'Contact Us', desc: 'Reach out via phone, email, or our online form to initiate the scrapping process.' },
    { num: '02', title: 'Documentation', desc: 'Submit required documents online or visit our facility for verification.' },
    { num: '03', title: 'Vehicle Deposit', desc: 'Deposit your vehicle at our facility or book our paid pickup service.' },
    { num: '04', title: 'Certificate of Deposit', desc: 'Receive your CoD along with the calculated scrap value per MoRTH norms.' },
    { num: '05', title: 'Scrapping Process', desc: 'Your vehicle is dismantled following strict MoRTH safety and environmental procedures.' },
    { num: '06', title: 'RTO Submission', desc: 'Chassis plate and number plate are submitted to the respective RTO.' },
    { num: '07', title: 'Certificate of Scrappage', desc: 'Receive your final CoVS, completing the official deregistration process.' },
  ]

  const benefits = [
    { icon: '₹', title: 'Fair Scrap Value', desc: 'Transparent valuation calculated per MoRTH and authority guidelines.' },
    { icon: '✓', title: 'Government Incentives', desc: 'Access state and RTO benefits when purchasing your next vehicle.' },
    { icon: '↔', title: 'Trade Your CoD', desc: 'Exchange your Certificate of Deposit with us for immediate additional value.' },
    { icon: '♻', title: 'Eco-Friendly Process', desc: 'Responsible recycling that reduces pollution and supports circular economy.' },
    { icon: '📋', title: 'Complete Transparency', desc: 'Clear documentation and audit-ready records at every step.' },
    { icon: '🚛', title: 'Pickup Available', desc: 'Convenient paid pickup service based on your location and vehicle type.' },
  ]

  const stats = [
    { value: '2020', label: 'Established' },
    { value: '1000+', label: 'Vehicles Scrapped' },
    { value: '100%', label: 'Compliance Rate' },
    { value: '24-48h', label: 'CoD Issuance' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        
        <div className="relative container-custom py-24 md:py-32">
          {/* Text content */}
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="badge">MoRTH Registered</span>
              <span className="badge">Vahan Linked</span>
            </div>

            {/* Headline */}
            <h1 className="text-display gradient-text">
              India's Premier Vehicle Scrapping Facility
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-body-lg max-w-2xl">
              Global Ultra Tech provides environmentally responsible, regulation-compliant vehicle 
              scrapping under India's Vehicle Scrappage Policy. We issue Certificates of Deposit 
              and Certificates of Vehicle Scrappage — all aligned with MoRTH systems.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Request Scrapping
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Pickup Service
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-caption mb-4">Trusted & Verified</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  MoRTH Linked
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Vahan Registered
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rampur, UP
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Facility Image */}
          <div className="mt-16 relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-emerald-500/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/images/glob1.jpg" 
                alt="Global Ultra Tech - Professional Vehicle Scrapping Facility" 
                className="w-full h-auto object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-neutral-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className={`py-12 px-6 text-center ${i !== stats.length - 1 ? 'border-r border-white/5' : ''}`}>
                <div className="text-3xl md:text-4xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is RVSF Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-caption uppercase tracking-widest mb-4">Understanding RVSF</p>
              <h2 className="text-headline text-white">
                What is a Registered Vehicle Scrapping Facility?
              </h2>
              <p className="mt-6 text-body-lg">
                An RVSF is a government-authorized facility designed to dismantle end-of-life vehicles 
                in a safe, traceable, and environmentally responsible manner. We ensure standardized 
                depollution, parts segregation, and material recovery while maintaining complete 
                documentation for deregistration and certificates.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
                Learn more about our services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            {/* Eco car image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-3xl blur-2xl opacity-50" />
              <img 
                src="/images/glob2.png" 
                alt="Eco-friendly vehicle recycling" 
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Feature cards below */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {[
              { title: 'Legal Compliance', desc: 'Fully authorized under MoRTH guidelines and Vehicle Scrappage Policy' },
              { title: 'Safe Depollution', desc: 'Proper handling of fluids, batteries, and hazardous materials' },
              { title: 'Full Traceability', desc: 'Complete documentation trail for deregistration and certificates' },
              { title: 'Eco-Responsible', desc: 'Sustainable recycling that reduces pollution and waste' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom"><div className="divider" /></div>

      {/* Process Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-caption uppercase tracking-widest mb-4">The Process</p>
            <h2 className="text-headline text-white">
              Simple, Transparent Vehicle Scrapping
            </h2>
            <p className="mt-4 text-body">
              From initial contact to final certificate — we guide you through every step 
              with complete transparency and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.slice(0, 6).map((step, i) => (
              <div key={i} className="card p-8 group">
                <div className="step-number mb-6">{step.num}</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-body">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Final step - highlighted */}
          <div className="mt-6 card p-8 bg-gradient-to-r from-emerald-950/50 to-neutral-900 border-emerald-900/50">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="step-number">{processSteps[6].num}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{processSteps[6].title}</h3>
                <p className="mt-2 text-body">{processSteps[6].desc}</p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">
                Start Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom"><div className="divider" /></div>

      {/* Benefits Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-caption uppercase tracking-widest mb-4">Why Choose Us</p>
            <h2 className="text-headline text-white">
              Benefits & Incentives
            </h2>
            <p className="mt-4 text-body">
              Scrapping your end-of-life vehicle through Global Ultra Tech unlocks 
              multiple benefits and government incentives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-body">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoRTH Section */}
      <section className="section bg-neutral-950">
        <div className="container-custom">
          <div className="card-glass p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-caption uppercase tracking-widest mb-4">Government Authorized</p>
                <h2 className="text-headline text-white">
                  MoRTH & Vahan Linkage
                </h2>
                <p className="mt-6 text-body-lg">
                  Global Ultra Tech is directly linked with the Ministry of Road Transport and Highways 
                  and registered on the Vahan portal. This ensures your vehicle's end-of-life processing, 
                  certificates, and deregistration are handled within recognized national systems.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-semibold text-emerald-400">✓</div>
                    <div className="mt-2 text-xs text-neutral-400">Government Linked</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-semibold text-emerald-400">✓</div>
                    <div className="mt-2 text-xs text-neutral-400">Recognized Certs</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-semibold text-emerald-400">✓</div>
                    <div className="mt-2 text-xs text-neutral-400">Easy Deregistration</div>
                  </div>
                </div>
              </div>
              {/* RVSF MoRTH Logo */}
              <div className="flex justify-center">
                <div className="relative p-8 rounded-2xl bg-white/95 shadow-2xl">
                  <img 
                    src="/images/glob3.png" 
                    alt="RVSF - Registered Vehicle Scrapping Facility - Government of India" 
                    className="w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-700 p-12 md:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />
            </div>

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-headline text-white">
                Ready to Scrap Your Vehicle?
              </h2>
              <p className="mt-4 text-lg text-emerald-100">
                Get started today. Our team will guide you through the entire process — 
                from documentation to final certificate.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary !bg-white !text-emerald-900 hover:!bg-neutral-100">
                  Request Scrapping
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-secondary !border-white/30 !text-white hover:!bg-white/10">
                  Book Pickup Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
