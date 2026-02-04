import { Check } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const deliverables = [
  'Professional photos and video of your business',
  'A website that tells your story and drives inquiries',
  "Social media that's active, consistent, and sounds like you",
  'A clear message that attracts the right customers',
]

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-paper border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 text-brand-dark leading-[1.1]">
            We start with 90 days.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-neutral-700 mb-12 max-w-3xl leading-relaxed">
            It's a shorter commitment—but not a slower pace. We move fast to build momentum and get you real results. By the end, you'll have the proof you need to feel confident about working together long-term.
          </p>
        </Reveal>

        {/* Deliverables */}
        <Reveal delay={0.2}>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
            In the first 90 days:
          </h3>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="space-y-4 mb-10 max-w-2xl">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-neutral-700">
                <Check className="text-brand-gold shrink-0 mt-1" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-lg text-neutral-600 leading-relaxed mb-12">
            By the end, you'll see what it feels like to have marketing handled.
          </p>
        </Reveal>

        {/* After 90 Days Card */}
        <Reveal delay={0.5}>
          <div className="bg-brand-dark text-white p-8 md:p-10 max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl uppercase text-white mb-6">
              Day 91+
            </h3>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              Once we've proven it works, we keep going. Same team. Same rhythm. Month after month.
            </p>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              Or you walk away with everything we built. It's yours either way.
            </p>
            <p className="text-xl font-medium text-brand-gold">
              You own everything we create—no matter what.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Pricing
