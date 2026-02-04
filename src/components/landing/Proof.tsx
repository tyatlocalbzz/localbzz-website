import { Quote } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal'

const testimonials = [
  {
    name: "44 Farms",
    type: "Ranch & Premium Beef",
    quote: "They invest the time to understand our business, then jump right in. They're not just executing—they're thinking."
  },
  {
    name: "Marty Bryan",
    type: "Entrepreneur",
    quote: "They're amazing at telling our story. We're proud to have them representing our brand."
  }
]

const Proof: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-16 text-white text-center">
            Businesses that trust us with theirs.
          </h2>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-brand-dark border-2 border-white/20 p-8 h-full flex flex-col">
                {/* Client name & type */}
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl uppercase text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    {item.type}
                  </p>
                </div>

                {/* Quote */}
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-brand-gold mb-4 rotate-180 mx-auto" aria-hidden="true" />
                  <blockquote className="text-lg text-neutral-300 leading-relaxed text-center">
                    "{item.quote}"
                  </blockquote>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Proof
