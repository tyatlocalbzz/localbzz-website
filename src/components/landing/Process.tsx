import PaperCard from '../ui/PaperCard'
import { Reveal, StaggerContainer, StaggerItem } from '../ui/Reveal'

const benefits = [
  {
    title: 'More of the right people find you',
    desc: "Google, social, your website, you show up where they're looking. Not a dead page from 2019.",
  },
  {
    title: 'They show up ready to buy',
    desc: "New customers already understand what makes you different. No more explaining your process or pricing.",
  },
  {
    title: 'They trust you before they walk in',
    desc: "What they see online matches what they experience in person. Your personality comes through.",
  },
  {
    title: 'You get your time back',
    desc: "Marketing leaves your to-do list. We handle the ideas, the content, the posting. You run your business.",
  },
]

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-b-2 border-brand-dark">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-16 text-brand-dark leading-[1.1]">
            We make sure they do.
          </h2>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <StaggerItem key={i}>
              <PaperCard className="flex flex-col h-full transition-all group" variant="white">
                <h3 className="font-display text-xl md:text-2xl uppercase mb-3 text-brand-dark leading-[1.1]">
                  {item.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">{item.desc}</p>
              </PaperCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Process
