import { Reveal } from '../ui/Reveal'

const AfterNinetyDays: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            Once we've proven it works, we keep going. Same team. Same rhythm. Month after month.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-neutral-300 mb-6 leading-relaxed max-w-3xl">
            Or you walk away with everything we built. It's yours either way.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl font-medium text-brand-gold">
            You own everything we create, no matter what.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default AfterNinetyDays
