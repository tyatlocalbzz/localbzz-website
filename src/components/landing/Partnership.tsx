import { Reveal } from '../ui/Reveal'

const Partnership: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-10 leading-[1.1]">
            We learn what your best customers already know about you.
          </h2>
        </Reveal>

        {/* Body */}
        <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              Then we make sure everyone else can see it too. Online, in person, everywhere they encounter you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              More of the customers that make business easy, the ones who trust you, come back, and send their friends, find you. They get it before they get there. You stop explaining your business to people who should already understand.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Partnership
