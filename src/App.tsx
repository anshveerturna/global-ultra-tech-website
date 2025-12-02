import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import PolicyCompliance from './pages/PolicyCompliance'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="policy-compliance" element={<PolicyCompliance />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
