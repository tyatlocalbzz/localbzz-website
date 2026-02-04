import { Quote } from 'lucide-react'
import { Reveal } from '../ui/Reveal'

const testimonials = [
  {
    name: "44 Farms",
    type: "Ranch & Premium Beef",
    quote: "They invest the time to understand our business, then jump right in. They're not just executing, they're thinking."
  },
  {
    name: "Marty Turco",
    type: "Dallas Stars",
    quote: "They're amazing at telling our story. We're proud to have them representing our brand."
  },
  {
    name: "Jessica Trent",
    type: "Business Owner",
    quote: "They made the shoot low key and didn't disrupt our business day. I'd highly recommend them for visibility."
  },
  {
    name: "Rafaelo Infante",
    type: "Socorro & Jalisco",
    quote: "They opened our eyes to what the local community thinks. Their insights helped us create content that captivated."
  }
]

// Duplicate for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

const Proof: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white">
            Businesses that trust us with theirs.
          </h2>
        </Reveal>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div
          className="flex gap-6 animate-scroll hover:[animation-play-state:paused]"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedTestimonials.map((item, i) => (
            <div
              key={i}
              className="w-[400px] flex-shrink-0 bg-brand-dark border-2 border-white/20 p-8 flex flex-col"
            >
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
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Proof
