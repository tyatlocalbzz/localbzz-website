import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './ui/Reveal'

const questions = [
  {
    question: "What do your best customers say about you that you wish everyone knew?",
    hint: "Think about the compliments that make you think 'yes, that's exactly it.'"
  },
  {
    question: "What's the one thing you do differently than everyone else in your space?",
    hint: "Not better. Different. The thing that makes you, you."
  },
  {
    question: "If you could only keep 20% of your customers, which ones would you keep?",
    hint: "What do those people have in common?"
  },
  {
    question: "What's frustrating you most about your marketing right now?",
    hint: "Be specific. 'It's not working' is a symptom. What's the actual problem?"
  },
  {
    question: "What would 'working' look like for you in 90 days?",
    hint: "Not a dream scenario. A realistic win you'd be proud of."
  }
]

const PrepPage = () => {
  return (
    <div className="min-h-screen bg-brand-paper">
      {/* Header */}
      <div className="bg-brand-dark text-white py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to LocalBzz
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl uppercase mb-4">
            Before We Talk
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-neutral-600 mb-4">
            You don't need to prepare anything for our call. Seriously.
          </p>
          <p className="text-lg text-neutral-600 mb-12">
            But if you're the type who likes to think things through beforehand, here are a few questions that might help. No need to write anything down — just let them sit with you.
          </p>
        </Reveal>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((item, i) => (
            <Reveal key={i} delay={0.1 + (i * 0.05)}>
              <div className="bg-white border-2 border-brand-dark p-6 shadow-hard">
                <p className="font-display text-xl uppercase mb-3">
                  {i + 1}. {item.question}
                </p>
                <p className="text-sm text-neutral-500 italic">
                  {item.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={0.4}>
          <div className="mt-12 p-6 bg-brand-gold border-2 border-brand-dark">
            <p className="text-brand-dark">
              <strong>That's it.</strong> These aren't trick questions and there are no wrong answers. They're just meant to get you thinking about your business in a way that'll make our conversation more useful.
            </p>
            <p className="text-brand-dark/70 mt-4 text-sm">
              Talk soon.
              <br />
              — The LocalBzz Team
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default PrepPage
