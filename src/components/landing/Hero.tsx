import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { Reveal } from '../ui/Reveal'

interface HeroProps {
  onContactClick: () => void
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-brand-dark text-white px-6 relative overflow-hidden border-b-4 border-brand-gold">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Background Image - fades from left, more visible on right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-owner.png"
          className="w-full h-full object-cover -scale-x-100"
          alt=""
          aria-hidden="true"
        />
        {/* Gradient overlay - solid on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
        <Reveal>
          <p className="font-mono text-xs md:text-sm text-neutral-400 mb-6 uppercase tracking-widest">
            Marketing for People Who Build Things <span className="text-brand-gold">•</span> DFW TEX
          </p>
        </Reveal>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] mb-8 drop-shadow-lg">
          <Reveal delay={0.1}>You know those</Reveal>
          <Reveal delay={0.2}>customers that</Reveal>
          <Reveal delay={0.3}>make business</Reveal>
          <Reveal delay={0.4}>
            <span className="text-brand-gold">easy?</span>
          </Reveal>
        </h1>
        <Reveal delay={0.6} direction="left">
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl">
            They trust you. They come back. They send their friends. What if you could build your whole business on people like that?
          </p>
        </Reveal>
        <Reveal delay={0.7} direction="up">
          <Button
            variant="primary"
            aria-label="Schedule a call with LocalBzz"
            onClick={onContactClick}
          >
            Let's Talk <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
