import { Link } from 'react-router-dom'

export default function PolicyCompliance() {
  const complianceMeasures = [
    {
      icon: '🔧',
      title: 'Depollution Protocols',
      desc: 'Proper extraction and handling of fluids, batteries, airbags, and other hazardous components following environmental safety standards.',
    },
    {
      icon: '🔩',
      title: 'Secure Dismantling',
      desc: 'Standardized procedures for safe material segregation, parts recovery, and systematic disassembly of vehicle components.',
    },
    {
      icon: '📋',
      title: 'Documentation Integrity',
      desc: 'Complete audit trail from vehicle receipt to final certificate issuance, ensuring transparency and traceability.',
    },
    {
      icon: '🏛️',
      title: 'RTO Coordination',
      desc: 'Timely submission of chassis plate and number plate to respective RTO for official deregistration records.',
    },
  ]

  const checkpoints = [
    'Identity and ownership document verification',
    'Vehicle receipt and consent capture (CoD issuance)',
    'Depollution and dismantling as per SOPs',
    'Material segregation and recovery logging',
    'Submission of plates to respective RTO',
    'Issuance of Certificate of Vehicle Scrappage',
  ]

  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">Regulatory Framework</p>
            <h1 className="text-display gradient-text">
              Policy & Compliance
            </h1>
            <p className="mt-6 text-body-lg">
              We operate under India's Vehicle Scrappage Policy and follow Ministry of Road Transport 
              and Highways (MoRTH) procedures along with applicable environmental and safety regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-headline text-white">Vehicle Scrappage Policy</h2>
                <p className="mt-6 text-body-lg">
                  The national Vehicle Scrappage Policy promotes safe and environmentally sound scrapping 
                  of end-of-life vehicles. It improves road safety, reduces emissions, and enables formal 
                  recycling through standardized procedures.
                </p>
                <p className="mt-4 text-body">
                  The policy establishes a framework for inspection, dismantling, and documentation to 
                  ensure traceability and transparency throughout the vehicle's end-of-life process.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Road Safety', desc: 'Removing unfit vehicles from roads' },
                  { label: 'Emission Reduction', desc: 'Eliminating high-polluting old vehicles' },
                  { label: 'Formal Recycling', desc: 'Standardized material recovery process' },
                  { label: 'Traceability', desc: 'Complete documentation and audit trail' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                    <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-medium text-white">{item.label}</div>
                      <div className="text-sm text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="section bg-neutral-950">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-white">Regulatory Bodies</h2>
            <p className="mt-4 text-body">
              Our operations are governed by and aligned with multiple regulatory authorities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'MoRTH', desc: 'Ministry of Road Transport and Highways — policy and procedural framework for vehicle scrapping across India.' },
              { title: 'RTO', desc: 'Regional Transport Offices — deregistration, chassis/plate submission, and official vehicle records management.' },
              { title: 'Environmental Boards', desc: 'State pollution control boards — hazardous materials handling, emissions, and waste management compliance.' },
            ].map((body, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mx-auto mb-6">
                  🏛️
                </div>
                <h3 className="text-lg font-semibold text-white">{body.title}</h3>
                <p className="mt-3 text-body">{body.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Measures */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-headline text-white">Compliance Measures</h2>
            <p className="mt-4 text-body">
              We implement rigorous measures at every stage of the scrapping process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {complianceMeasures.map((measure, i) => (
              <div key={i} className="card p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl mb-6">
                  {measure.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{measure.title}</h3>
                <p className="mt-3 text-body">{measure.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Checkpoints */}
      <section className="section bg-neutral-950">
        <div className="container-custom">
          <div className="card-glass p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-headline text-white">Process Checkpoints</h2>
                <p className="mt-4 text-body-lg">
                  Every vehicle goes through a series of documented checkpoints to ensure 
                  complete compliance and traceability.
                </p>
              </div>
              <div>
                <ol className="space-y-4">
                  {checkpoints.map((checkpoint, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="step-number shrink-0">{String(i + 1).padStart(2, '0')}</div>
                      <span className="text-body">{checkpoint}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="card p-8 md:p-12 text-center">
            <h2 className="text-headline text-white">Our Commitment</h2>
            <p className="mt-4 text-body-lg max-w-2xl mx-auto">
              We continuously review our operating practices against evolving policy guidance and 
              local directives to maintain the highest standards of safety, environmental stewardship, 
              and documentation integrity.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
