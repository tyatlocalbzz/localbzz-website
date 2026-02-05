import { Reveal } from '../ui/Reveal'

const Partnership: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-b-2 border-brand-dark">
      {/* Constrained width container for better readability */}
      <div className="max-w-3xl mx-auto">
        {/* Headline - will break into blocky shape due to constrained width */}
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase mb-8 leading-[1.1] text-brand-dark">
            We learn what your best customers already know about you.
          </h2>
        </Reveal>

        {/* Body with yellow accent border */}
        <div className="border-l-4 border-brand-gold pl-4 sm:pl-8">
          {/* Lead-in paragraph - larger and bolder */}
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl text-brand-dark font-medium mb-6 leading-relaxed">
              Then we make sure everyone else can see it too. Online, in person, everywhere they encounter you.
            </p>
          </Reveal>

          {/* Supporting copy - high contrast dark text */}
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              More of the customers that make business easy—the ones who trust you, come back, and send their friends—find you. They get it before they get there. You stop explaining your business to people who should already understand.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Partnership
