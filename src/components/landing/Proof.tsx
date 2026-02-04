import { Quote } from 'lucide-react'
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal'

const testimonials = [
  {
    quote: "Within 60 days, people said they saw us everywhere. We stopped being a secret.",
    name: "Sarah Martinez",
    business: "Casa Oaxaca",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "They didn't ask me what to post. They showed up knowing what to do.",
    name: "Marcus Chen",
    business: "Precision Auto",
    img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "I expected content. I got a partner who actually understands my business.",
    name: "Jamie Reeves",
    business: "The Beauty Bar",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"
  }
]

const Proof: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-16 text-brand-dark">
            Here's what happens.
          </h2>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden border-2 border-brand-dark mb-6">
                  <img
                    src={item.img}
                    alt={`${item.name} from ${item.business}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <Quote className="w-8 h-8 text-brand-gold mb-4 rotate-180" aria-hidden="true" />
                  <blockquote className="text-lg text-brand-dark font-medium leading-relaxed mb-4 flex-1">
                    "{item.quote}"
                  </blockquote>
                  <footer>
                    <p className="font-bold text-brand-dark">{item.name}</p>
                    <p className="font-mono text-xs text-neutral-500 uppercase">
                      {item.business}
                    </p>
                  </footer>
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
