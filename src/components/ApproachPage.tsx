import {
  Fingerprint,
  MessageSquareQuote,
  MapPin,
  Check,
  ArrowRight,
} from 'lucide-react'
import Button from './ui/Button'
import PaperCard from './ui/PaperCard'
import { Reveal, StaggerContainer, StaggerItem } from './ui/Reveal'

interface ApproachPageProps {
  onContactClick: () => void
}

const ApproachPage = ({ onContactClick }: ApproachPageProps) => {
  return (
    <div className="flex flex-col">
      {/* HERO + THE GAP */}
      <section className="min-h-[70vh] flex flex-col justify-center bg-white text-brand-dark px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[1.1] mb-6 sm:mb-8">
              Your best customers <br className="hidden sm:block" />
              already get it. <br className="hidden sm:block" />
              <span className="text-brand-gold">Everyone else can't see it.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} direction="right">
            <p className="text-neutral-600 text-lg sm:text-xl md:text-2xl max-w-2xl mt-6 sm:mt-8">
              The people who know you, they trust you. They come back. They send their friends. The problem isn't your business. It's that what's true about you isn't visible to everyone else.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE FIX */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-4 sm:mb-6">
                We don't invent a brand. <br className="hidden sm:block" />
                <span className="text-brand-gold">We translate it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-neutral-400">
                Most agencies ask "what do you want to say?" We ask "what do your best customers already know about you that strangers can't see?" Then we make it visible.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: <Fingerprint className="w-8 h-8 text-brand-dark" strokeWidth={2.5} />,
                title: 'Who You Are',
                desc: 'The real personality that attracts the right people, not a polished version that could be anyone.',
              },
              {
                icon: <MessageSquareQuote className="w-8 h-8 text-brand-dark" strokeWidth={2.5} />,
                title: 'What You Say',
                desc: 'Messaging that sounds like you. Clear, specific, in your voice.',
              },
              {
                icon: <MapPin className="w-8 h-8 text-brand-dark" strokeWidth={2.5} />,
                title: 'Where You Show Up',
                desc: 'Consistent presence everywhere the right customers are looking.',
              },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 hover:border-brand-gold/30 transition-colors group h-full">
                  <div className="bg-brand-gold w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl uppercase mb-3 sm:mb-4 text-white">{card.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-6 sm:mb-8 text-brand-dark">
              We're not order-takers.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mb-10 sm:mb-16">
              Most marketing teams wait for direction. We show up knowing what to do. We learn your business well enough to have opinions, and we act on them.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <Reveal delay={0.3} direction="up">
              <div className="bg-brand-paper p-6 sm:p-8 md:p-10 border-2 border-brand-dark">
                <h3 className="font-display text-xl sm:text-2xl uppercase mb-4 sm:mb-6 text-brand-dark">What we believe</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Your personality is the product',
                    'Real earns trust',
                    'Consistency beats virality',
                    'The right customers matter more than more customers',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 sm:gap-4 text-base sm:text-lg text-brand-dark">
                      <Check className="text-brand-gold shrink-0 mt-1" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="up">
              <div className="bg-brand-gold p-6 sm:p-8 md:p-10 border-2 border-brand-dark">
                <h3 className="font-display text-xl sm:text-2xl uppercase mb-4 sm:mb-6 text-brand-dark">What that means for you</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'You don\'t come up with ideas, we do',
                    'You don\'t approve every post, we handle it',
                    'You don\'t explain your business every month, we already know',
                    'You run your business, we make sure the right people find it',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 sm:gap-4 text-base sm:text-lg text-brand-dark">
                      <Check className="text-brand-dark shrink-0 mt-1" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-paper border-y-2 border-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-3 sm:mb-4 text-brand-dark">Same people. Every time.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral-600 max-w-xl text-base sm:text-lg">
                When you work with LocalBzz, you work with us. Not a rotating cast of account managers. Not a junior team you've never met.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: 'Jeff',
                role: 'Relationships',
                desc: 'First call. Monthly check-ins. Makes sure things are working.',
                img: '/images/jeff-headshot.webp',
              },
              {
                name: 'Ty',
                role: 'Words',
                desc: 'Strategy, messaging, and the voice that sounds like you.',
                img: '/images/ty-headshot.webp',
              },
              {
                name: 'Corrie',
                role: 'Visuals',
                desc: 'Shoots, edits, and handles everything you see.',
                img: '/images/corrie-headshot.webp',
              },
            ].map((member, i) => (
              <StaggerItem key={i}>
                <PaperCard className="bg-white flex flex-col h-full" variant="white">
                  <div className="w-full aspect-square mb-4 sm:mb-6 overflow-hidden">
                    <img
                      src={member.img}
                      alt={`${member.name}, ${member.role}`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-brand-dark">{member.name}</h3>
                  <p className="text-xs font-mono font-bold uppercase tracking-widest text-brand-gold mb-3 sm:mb-4 mt-1">{member.role}</p>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{member.desc}</p>
                </PaperCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-brand-gold border-b-2 border-brand-dark" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal width="100%">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase mb-4 sm:mb-6 text-brand-dark">
              Let's see if there's a fit.
            </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-lg sm:text-xl text-brand-dark/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Schedule a 30-minute call. We'll ask about your business and your customers. If we can help, we'll tell you how. If not, we'll tell you that too.
            </p>
          </Reveal>
          <Reveal delay={0.4} width="100%">
            <div className="flex justify-center">
              <Button
                variant="secondary"
                aria-label="Schedule a call with LocalBzz"
                className="group"
                onClick={onContactClick}
              >
                Schedule a Call <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default ApproachPage
