import Hero from './landing/Hero'
import Positioning from './landing/Positioning'
import Partnership from './landing/Partnership'
import Pricing from './landing/Pricing'
import AfterNinetyDays from './landing/AfterNinetyDays'
import Proof from './landing/Proof'
import Contact from './landing/Contact'

interface LandingPageProps {
  onContactClick: () => void
}

const LandingPage = ({ onContactClick }: LandingPageProps) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero onContactClick={onContactClick} />
      <Positioning />
      <Partnership />
      <Pricing />
      <AfterNinetyDays />
      <Contact onContactClick={onContactClick} />
      <Proof />
    </div>
  )
}

export default LandingPage
