import { CheckIcon } from '@heroicons/react/24/solid'
import { Reveal } from '../ui/Reveal'

const deliverables = [
  'Content that shows people who you actually are',
  'An online experience that tells your story and drives inquiries',
  "Social media that's active, consistent, and sounds like you",
  'A clear message that attracts the right customers',
]

const Pricing: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-paper border-b-2 border-brand-dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-6 text-brand-dark leading-[1.1]">
            We start with 90 days.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base sm:text-lg text-neutral-700 mb-12 leading-relaxed">
            Shorter commitment. Faster pace. Enough time to build real momentum, and for you to see what changes.
          </p>
        </Reveal>

        {/* Deliverables */}
        <Reveal delay={0.2}>
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-neutral-500 mb-6">
            In the first 90 days:
          </h3>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="space-y-5 mb-8">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-base sm:text-lg text-neutral-600">
                {/* Black circle with gold checkmark for better contrast */}
                <div className="w-6 h-6 bg-brand-dark rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Bridge text - anchored closer to the list */}
        <Reveal delay={0.4}>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10 border-l-4 border-brand-gold pl-5">
            By the end, more of the right people are finding you, and you're not thinking about marketing anymore.
          </p>
        </Reveal>

        {/* After 90 Days Card - matches width of content above */}
        <Reveal delay={0.5}>
          <div className="bg-brand-dark text-white p-6 sm:p-8 md:p-10">
            {/* Day 91+ header in gold and larger */}
            <h3 className="font-display text-3xl md:text-4xl uppercase text-brand-gold mb-6">
              Day 91+
            </h3>
            <p className="text-base sm:text-lg text-neutral-300 mb-4 leading-relaxed">
              Once we've proven it works, we keep going. Same team. Same rhythm. Month after month.
            </p>
            <p className="text-base sm:text-lg text-neutral-300 mb-6 leading-relaxed">
              Or you walk away with everything we built. It's yours either way.
            </p>
            <p className="text-xl font-medium text-white border-t border-white/20 pt-5">
              You own everything we create, no matter what.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Pricing
