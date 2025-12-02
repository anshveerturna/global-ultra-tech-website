import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import SEO, { seoConfig } from '../components/SEO'

type VehicleType = 'two-wheeler' | 'car' | 'suv' | 'lcv' | 'hcv-bus'

const vehicleOptions: { value: VehicleType; label: string; avgWeight: number }[] = [
  { value: 'two-wheeler', label: 'Two-wheeler', avgWeight: 120 },
  { value: 'car', label: 'Car / Sedan', avgWeight: 1000 },
  { value: 'suv', label: 'SUV / MUV', avgWeight: 1800 },
  { value: 'lcv', label: 'LCV (Light Commercial)', avgWeight: 2500 },
  { value: 'hcv-bus', label: 'HCV / Bus', avgWeight: 8000 },
]

const CATEGORY_RATE: Record<VehicleType, number> = {
  'two-wheeler': 18,
  'car': 24,
  'suv': 25,
  'lcv': 24,
  'hcv-bus': 26,
}

export default function ScrapValue() {
  const { theme } = useTheme()
  const [vehicleType, setVehicleType] = useState<VehicleType>('car')
  const [weightKg, setWeightKg] = useState<number>(1000)
  const [condition, setCondition] = useState<'intact' | 'partial'>('intact')
  const [marketRate, setMarketRate] = useState<number>(24)

  const estimate = useMemo(() => {
    const typeFactor = CATEGORY_RATE[vehicleType] / 24
    const conditionFactor = condition === 'intact' ? 1 : 0.85
    const base = weightKg * marketRate * typeFactor * conditionFactor
    const low = Math.max(0, base * 0.9)
    const high = base * 1.1
    return { low, base, high }
  }, [vehicleType, weightKg, condition, marketRate])

  const fmt = (v: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v)

  return (
    <>
      <SEO {...seoConfig.scrapValue} />
      
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-caption uppercase tracking-widest mb-4">Scrap Value Calculator</p>
            <h1 className="text-display gradient-text">
              Estimate Your Scrap Value
            </h1>
            <p className="mt-6 text-body-lg">
              Get an indicative estimate based on vehicle type, weight, and condition. 
              Final valuation is determined per MoRTH norms after physical verification.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 sticky top-24">
                <h2 className="text-lg font-semibold text-[var(--color-text)] mb-6">Vehicle Details</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Vehicle Type</label>
                    <select
                      value={vehicleType}
                      onChange={(e) => {
                        const type = e.target.value as VehicleType
                        setVehicleType(type)
                        const opt = vehicleOptions.find(v => v.value === type)
                        if (opt) setWeightKg(opt.avgWeight)
                      }}
                      className={`w-full px-4 py-3 rounded-xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                    >
                      {vehicleOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className={theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Approximate Weight (kg)
                    </label>
                    <input
                      type="number"
                      min={50}
                      step={10}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className={`w-full px-4 py-3 rounded-xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                    />
                    <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                      Tip: Check manufacturer specs or RC for curb weight
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Condition</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="condition"
                          checked={condition === 'intact'}
                          onChange={() => setCondition('intact')}
                          className={`w-4 h-4 text-emerald-500 ${theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/20'} focus:ring-emerald-500/50`}
                        />
                        <span className="text-sm text-[var(--color-text-muted)]">Intact</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="condition"
                          checked={condition === 'partial'}
                          onChange={() => setCondition('partial')}
                          className={`w-4 h-4 text-emerald-500 ${theme === 'dark' ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/20'} focus:ring-emerald-500/50`}
                        />
                        <span className="text-sm text-[var(--color-text-muted)]">Partial / Damaged</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Market Base Rate (₹/kg)
                    </label>
                    <input
                      type="number"
                      min={10}
                      step={1}
                      value={marketRate}
                      onChange={(e) => setMarketRate(Number(e.target.value))}
                      className={`w-full px-4 py-3 rounded-xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                    />
                    <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                      Adjust based on current scrap metal prices
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Estimate Card */}
              <div className="card p-8 bg-gradient-to-br from-emerald-950/50 to-neutral-900 border-emerald-900/50">
                <p className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Estimated Scrap Value</p>
                <div className="mt-4 text-5xl md:text-6xl font-semibold text-[var(--color-text)] tracking-tight">
                  {fmt(estimate.base)}
                </div>
                <div className="mt-2 text-[var(--color-text-muted)]">
                  Range: {fmt(estimate.low)} — {fmt(estimate.high)}
                </div>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    This is an indicative estimate based on your inputs. Final value will be confirmed 
                    after documentation and physical inspection as per MoRTH and relevant authority norms.
                  </p>
                </div>
              </div>

              {/* How we calculate */}
              <div className="card p-8">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">How We Calculate</h3>
                <ul className="space-y-3">
                  {[
                    'Weight × market base rate, adjusted for vehicle category',
                    'Condition factor applied (intact vs partial)',
                    'MoRTH-aligned process ensures transparent, fair valuation',
                    'Actual price may vary due to parts, materials, and condition',
                    'Final valuation after physical verification at our facility',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">Ready to Proceed?</h3>
                  <p className="mt-1 text-body">Share your details and we'll confirm the valuation.</p>
                </div>
                <Link to="/contact" className="btn-primary shrink-0">
                  Request Scrapping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className={`section ${theme === 'dark' ? 'bg-neutral-950' : 'bg-slate-50'}`}>
        <div className="container-custom">
          <div className="card-glass p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl shrink-0">
                ⚠️
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">Important Disclaimer</h3>
                <p className="mt-2 text-body">
                  The calculator provides an indicative estimate only. Actual scrap value is determined 
                  by MoRTH and relevant authority guidelines after physical verification, documentation 
                  review, and assessment of vehicle condition. Market rates for scrap materials fluctuate 
                  and may affect final valuation. Contact us for an accurate quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
