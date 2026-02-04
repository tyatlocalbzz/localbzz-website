import { X } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const notFor = [
  "If you're looking for the cheapest option, we're not it.",
  "If you need to approve every post, you'll be frustrated with us.",
  "If you want a vendor to direct, we're the wrong fit.",
]

const NotForEveryone: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white border-b-2 border-brand-dark">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-8">
            We're picky. You should be too.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xl text-neutral-300 mb-8">
            This works best when there's trust on both sides.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-lg text-neutral-300 mb-8">
            We're looking for business owners who want marketing handled, not managed. Who trust us to lead, not wait for direction. Who care about results more than control.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="space-y-4 mb-10">
            {notFor.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-neutral-400">
                <X className="text-neutral-500 shrink-0 mt-1" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-xl text-white font-medium">
            But if you want a partner who shows up knowing what to do, keep reading.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default NotForEveryone
