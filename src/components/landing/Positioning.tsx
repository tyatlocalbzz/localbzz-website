import { Reveal } from '../ui/Reveal'

const roles = ['Entrepreneurs', 'Operators', 'Leaders', 'People Who Build Things']

const Positioning: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-paper border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            {/* Headline with increased line height to prevent text collision */}
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-8 leading-[1.15] md:leading-[1.1]">
                Your reputation is strong. <span className="text-brand-dark/40">Not everyone can see it yet.</span>
              </h2>
            </Reveal>

            {/* Role pills with proper gap for both horizontal and vertical spacing */}
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3 mb-12">
                {roles.map((role, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border-2 border-brand-dark font-mono text-xs uppercase tracking-widest bg-white"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Body copy with increased top margin for separation */}
            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <Reveal delay={0.2}>
                <p className="text-neutral-600">
                  <strong className="text-brand-dark">Your best customers know how good you are.</strong> They talk about you. They send people your way. But someone encountering you for the first time? They can't see what your customers see. Not yet.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Image with thicker border to match tags */}
          <Reveal direction="left" delay={0.2} className="hidden md:block">
            <div className="aspect-[4/5] overflow-hidden border-[3px] border-brand-dark group">
              <img
                src="/images/positioning-hero.webp"
                width={1696}
                height={2528}
                alt="Local business owner at work"
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Positioning
