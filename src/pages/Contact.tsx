import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import SEO, { seoConfig } from '../components/SEO'

export default function Contact() {
  const { theme } = useTheme()
  const [requestForm, setRequestForm] = useState({
    name: '', email: '', phone: '', vehicleType: '', registrationNumber: '', message: ''
  })
  const [pickupForm, setPickupForm] = useState({
    name: '', phone: '', address: '', vehicleType: '', preferredDate: ''
  })

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you within 24 hours.')
  }

  const handlePickupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pickup request received! We will confirm the schedule shortly.')
  }

  return (
    <>
      <SEO {...seoConfig.contact} />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-display gradient-text">
              Get in Touch
            </h1>
            <p className="mt-6 text-body-lg">
              Have questions about vehicle scrapping? Need a quote or want to schedule a pickup? 
              We're here to help you through every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Visit Us</h3>
              <p className="mt-3 text-body">
                Village Bishanpur Jagir<br />
                District Rampur-244921<br />
                Uttar Pradesh, India
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Call Us</h3>
              <p className="mt-3 text-body">
                <a href="tel:+919756900011" className="hover:text-emerald-400 transition-colors">+91 97569 00011</a><br />
                <span className="text-[var(--color-text-muted)]">Mon–Sat, 9AM–6PM</span>
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Email Us</h3>
              <p className="mt-3 text-body">
                <a href="mailto:globalultratech@gmail.com" className="hover:text-emerald-400 transition-colors">globalultratech@gmail.com</a><br />
                <span className="text-[var(--color-text-muted)]">Response within 24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Forms */}
      <section className={`section-lg ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Request Scrapping Form */}
            <div className="card p-8 md:p-10">
              <h2 className="text-headline text-[var(--color-text)]">Request Scrapping</h2>
              <p className="mt-2 text-body">
                Fill in your vehicle details and we'll get back to you with a quote.
              </p>
              <form onSubmit={handleRequestSubmit} className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={requestForm.name}
                      onChange={e => setRequestForm({...requestForm, name: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={requestForm.phone}
                      onChange={e => setRequestForm({...requestForm, phone: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email</label>
                  <input
                    type="email"
                    value={requestForm.email}
                    onChange={e => setRequestForm({...requestForm, email: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Vehicle Type *</label>
                    <select
                      required
                      value={requestForm.vehicleType}
                      onChange={e => setRequestForm({...requestForm, vehicleType: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="">Select type</option>
                      <option value="two-wheeler">Two Wheeler</option>
                      <option value="three-wheeler">Three Wheeler</option>
                      <option value="car">Car / SUV</option>
                      <option value="commercial">Commercial Vehicle</option>
                      <option value="bus">Bus</option>
                      <option value="truck">Truck</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Registration Number *</label>
                    <input
                      type="text"
                      required
                      value={requestForm.registrationNumber}
                      onChange={e => setRequestForm({...requestForm, registrationNumber: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                      placeholder="UP-XX-XX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    value={requestForm.message}
                    onChange={e => setRequestForm({...requestForm, message: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="Any additional information about your vehicle..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Request Quote
                </button>
              </form>
            </div>

            {/* Get Pickup Form */}
            <div className="card p-8 md:p-10">
              <h2 className="text-headline text-[var(--color-text)]">Schedule Pickup</h2>
              <p className="mt-2 text-body">
                Can't bring your vehicle? We offer paid pickup service across the region.
              </p>
              <form onSubmit={handlePickupSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={pickupForm.name}
                    onChange={e => setPickupForm({...pickupForm, name: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={pickupForm.phone}
                    onChange={e => setPickupForm({...pickupForm, phone: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Pickup Address *</label>
                  <textarea
                    rows={3}
                    required
                    value={pickupForm.address}
                    onChange={e => setPickupForm({...pickupForm, address: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none ${
                      theme === 'dark' 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                    placeholder="Full address where vehicle is located..."
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Vehicle Type *</label>
                    <select
                      required
                      value={pickupForm.vehicleType}
                      onChange={e => setPickupForm({...pickupForm, vehicleType: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="">Select type</option>
                      <option value="two-wheeler">Two Wheeler</option>
                      <option value="three-wheeler">Three Wheeler</option>
                      <option value="car">Car / SUV</option>
                      <option value="commercial">Commercial Vehicle</option>
                      <option value="bus">Bus</option>
                      <option value="truck">Truck</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={pickupForm.preferredDate}
                      onChange={e => setPickupForm({...pickupForm, preferredDate: e.target.value})}
                      className={`w-full px-4 py-3 rounded-lg border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors ${
                        theme === 'dark' 
                          ? 'bg-neutral-800 border-neutral-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Schedule Pickup
                </button>
              </form>
              <p className="mt-6 text-sm text-[var(--color-text-muted)] text-center">
                * Pickup charges vary based on distance and vehicle type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Map Section */}
      <section className="section-lg">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-caption uppercase tracking-widest mb-4">Our Location</p>
            <h2 className="text-headline text-[var(--color-text)]">Find Us</h2>
            <p className="mt-4 text-body-lg">
              Visit our facility in Bishanpur Jagir, Rampur — easily accessible from the city center and surrounding districts.
            </p>
          </div>

          {/* Map Container with Premium Styling */}
          <div className="relative">
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-emerald-500/20 rounded-3xl blur-xl opacity-50" />
            
            {/* Map wrapper */}
            <div className={`relative rounded-2xl overflow-hidden border ${theme === 'dark' ? 'border-white/10 bg-neutral-900' : 'border-black/10 bg-white'}`}>
              {/* Top bar with location info */}
              <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b ${theme === 'dark' ? 'border-white/10 bg-neutral-900/80' : 'border-black/10 bg-white/80'} backdrop-blur-sm`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">Global Ultra Tech RVSF</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Village Bishanpur Jagir, District Rampur-244921, UP</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/LXL64Zq52F1RzfHy9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'} text-sm font-medium text-[var(--color-text)] hover:border-emerald-500/30 transition-all`}
                >
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* Map iframe with dark overlay effect */}
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.4903829006616!2d79.24084547556309!3d28.91348827551245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a8423aaaaaaab%3A0xf705a24ec0146206!2sGlobal%20Ultratech!5e0!3m2!1sen!2sin!4v1764614122053!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Global Ultra Tech Location"
                />
                {/* Subtle dark overlay for premium look */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-900/20 via-transparent to-neutral-900/10" />
              </div>

              {/* Bottom info bar */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-px ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <div className={`p-4 md:p-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} text-center`}>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Working Hours</div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Mon–Sat, 9AM–6PM</div>
                </div>
                <div className={`p-4 md:p-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} text-center`}>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">District</div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Rampur, UP</div>
                </div>
                <div className={`p-4 md:p-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} text-center`}>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">PIN Code</div>
                  <div className="text-sm font-medium text-[var(--color-text)]">244921</div>
                </div>
                <div className={`p-4 md:p-6 ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} text-center`}>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Pickup Service</div>
                  <div className="text-sm font-medium text-emerald-400">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
