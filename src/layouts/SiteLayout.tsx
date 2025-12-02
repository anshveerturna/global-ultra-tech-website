import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Scrap Value' },
    { to: '/policy-compliance', label: 'Compliance' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ]

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors ${
      isActive 
        ? 'text-[var(--color-text)]' 
        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`absolute inset-0 backdrop-blur-xl border-b ${
        theme === 'dark' 
          ? 'bg-black/80 border-white/5' 
          : 'bg-white/80 border-black/5'
      }`} />
      <nav className="relative container-custom">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img 
              src="/images/glob2.png" 
              alt="RVSF - Registered Vehicle Scrapping Facility" 
              className="h-10 md:h-14 w-auto"
            />
            <img 
              src="/images/glob4.png" 
              alt="Global Ultra Tech Logo" 
              className="h-10 md:h-14 w-auto"
            />
            <span className="text-sm md:text-base font-semibold text-[var(--color-text)] tracking-tight">
              Global Ultra Tech
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link to="/contact" className="btn-secondary !py-2.5 !px-5 !text-sm">
                Contact
              </Link>
              <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
                Request Scrapping
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b py-4 ${
            theme === 'dark'
              ? 'bg-black/95 border-white/5'
              : 'bg-white/95 border-black/5'
          }`}>
            <div className="container-custom flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? `${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} text-[var(--color-text)]` 
                        : `text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`
                    }`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className={`flex flex-col gap-2 mt-4 pt-4 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-secondary w-full">
                  Contact
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
                  Request Scrapping
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const { theme } = useTheme()

  const footerLinks = {
    services: [
      { label: 'Vehicle Scrapping', to: '/services#vehicle-scrapping' },
      { label: 'Certificate of Deposit', to: '/services#certificate-of-deposit' },
      { label: 'Certificate of Scrappage', to: '/services#certificate-of-vehicle-scrappage' },
      { label: 'Trade CoD', to: '/services#trade-cod' },
    ],
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Policy & Compliance', to: '/policy-compliance' },
      { label: 'FAQ', to: '/faq' },
    ],
  }

  return (
    <footer className={`border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/glob2.png" 
                alt="RVSF - Registered Vehicle Scrapping Facility" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/glob4.png" 
                alt="Global Ultra Tech Logo" 
                className="h-10 w-auto"
              />
              <span className="text-base font-semibold text-[var(--color-text)] tracking-tight">
                Global Ultra Tech
              </span>
            </Link>
            <p className="mt-4 text-body max-w-sm">
              Registered Vehicle Scrapping Facility in Rampur, Uttar Pradesh. Compliant, transparent, 
              and environmentally responsible vehicle scrapping under MoRTH guidelines.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Village Bishanpur Jagir, District Rampur-244921, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          theme === 'dark' ? 'border-white/5' : 'border-black/5'
        }`}>
          <p className="text-sm text-[var(--color-text-muted)]">
            © {year} Global Ultra Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="badge">MoRTH Linked</span>
            <span className="badge">Vahan Registered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function SiteLayout() {
  const { theme } = useTheme()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-slate-900'
    }`}>
      <Header />
      <main className="pt-16 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
