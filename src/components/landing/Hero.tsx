import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { Reveal } from '../ui/Reveal'

interface HeroProps {
  onContactClick: () => void
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-brand-dark text-white relative overflow-hidden border-b-4 border-brand-gold">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      {/* Background Image - fades from left, more visible on right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-owner.png"
          className="w-full h-full object-cover -scale-x-100"
          alt=""
          aria-hidden="true"
        />
        {/* Gradient overlay - darker on left for text legibility, more transparent overall */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 via-50% to-transparent"></div>
      </div>

      {/* Content with proper left padding - aligned to container grid */}
      <div className="max-w-7xl mx-auto w-full relative z-10 py-16 md:py-24 px-6 sm:px-10 lg:px-16">
        <Reveal>
          <p className="font-mono text-xs md:text-sm text-neutral-400 mb-6 uppercase tracking-widest">
            Marketing for People Who Build Things <span className="text-brand-gold">•</span> DFW
          </p>
        </Reveal>

        {/* Headline with increased line height and responsive sizing */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.1] sm:leading-[1.05] mb-8 drop-shadow-lg max-w-4xl">
          <Reveal delay={0.1}>You know those</Reveal>
          <Reveal delay={0.2}>customers that</Reveal>
          <Reveal delay={0.3}>make business</Reveal>
          <Reveal delay={0.4}>
            {/* Tighter letter spacing on highlight for "stamped" look */}
            <span className="text-brand-gold tracking-tight">easy?</span>
          </Reveal>
        </h1>

        <Reveal delay={0.6} direction="left">
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl leading-relaxed">
            They trust you. They come back. They send their friends. What if you could grow your business with more people like that?
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
