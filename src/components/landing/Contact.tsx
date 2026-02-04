import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { Reveal } from '../ui/Reveal'

interface ContactProps {
  onContactClick: () => void
}

const Contact: React.FC<ContactProps> = ({ onContactClick }) => {
  return (
    <section className="pt-16 md:pt-20 px-6 md:pr-0 bg-brand-gold border-b-2 border-brand-dark relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr,auto] gap-8 items-end relative z-10">
        <Reveal direction="right">
          <div className="pb-8 md:pb-12">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 leading-[0.9]">
              Let's see if there's a fit.
            </h2>
            <p className="text-lg mb-4 text-brand-dark/80">
              This works best with trust on both sides. We're looking for business owners who want marketing handled, not managed. Who'd rather have a partner that leads than a vendor that waits.
            </p>
            <p className="text-lg mb-8 text-brand-dark/80">
              Schedule a 30-minute call. We'll ask about your business and your customers. If we can help, we'll tell you how. If not, we'll tell you that too.
            </p>
            <Button variant="secondary" onClick={onContactClick} aria-label="Schedule a call" className="w-full md:w-auto group">
              Let's Talk <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
        {/* Team image - flush to right and bottom */}
        <div className="hidden md:block">
          <img
            src="/images/team-photo.png"
            alt="The LocalBzz Team"
            loading="lazy"
            className="h-72 lg:h-80 w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
