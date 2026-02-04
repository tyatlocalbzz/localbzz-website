import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { Reveal } from '../ui/Reveal'

interface ContactProps {
  onContactClick: () => void
}

const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
  return (
    <section className="py-24 px-6 bg-brand-gold border-b-2 border-brand-dark" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Reveal direction="right" className="order-2 md:order-1">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 leading-[0.9]">
            Let's see if there's a fit.
          </h2>
          <p className="text-lg mb-4 text-brand-dark/80">
            This works best with trust on both sides. We're looking for business owners who want marketing handled, not managed. Who'd rather have a partner that leads than a vendor that waits.
          </p>
          <p className="text-lg mb-10 text-brand-dark/80">
            Schedule a 30-minute call. We'll ask about your business and your customers. If we can help, we'll tell you how. If not, we'll tell you that too.
          </p>
          <Button variant="secondary" onClick={onContactClick} aria-label="Schedule a call" className="w-full md:w-auto group">
            Let's Talk <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </Reveal>
        <div className="order-1 md:order-2">
          <Reveal direction="left" delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden border-2 border-brand-dark group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="The LocalBzz Team"
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
