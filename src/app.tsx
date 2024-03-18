import { FeatureSection } from './components/feature-section'
import { Footer } from './components/footer'
import { HeroSection } from './components/hero-section'
import { NavBar } from './components/navbar'
import { Pricing } from './components/pricing'
import { Testimonials } from './components/testimonials'
import { Workflow } from './components/workflow'

export function App() {
  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
