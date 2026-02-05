import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './ui/Reveal'

const WorksheetPage = () => {
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
            What Your Best Customers Already Know
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg text-neutral-600 mb-12">
            Your best customers "get it." They trust you. They come back. They send their friends. The problem is, strangers can't see what they see. This 5-minute exercise helps you figure out what that is.
          </p>
        </Reveal>

        {/* Section 1 */}
        <Reveal delay={0.15}>
          <div className="mb-12">
            <h2 className="font-display text-2xl uppercase mb-4 text-brand-dark">
              Step 1: Pick three of your best customers
            </h2>
            <p className="text-neutral-600 mb-4">
              Not your biggest. Your <em>best</em>. The ones who:
            </p>
            <ul className="space-y-2 text-neutral-600 ml-4">
              <li>• Never haggle on price</li>
              <li>• Are easy to work with</li>
              <li>• Refer other people like them</li>
              <li>• Make you think "I wish all my customers were like this"</li>
            </ul>
            <div className="mt-6 bg-white border-2 border-brand-dark p-6">
              <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-4">Write their names (or initials):</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="border-b-2 border-dashed border-neutral-300 pb-2 text-center text-neutral-400">1.</div>
                <div className="border-b-2 border-dashed border-neutral-300 pb-2 text-center text-neutral-400">2.</div>
                <div className="border-b-2 border-dashed border-neutral-300 pb-2 text-center text-neutral-400">3.</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section 2 */}
        <Reveal delay={0.2}>
          <div className="mb-12">
            <h2 className="font-display text-2xl uppercase mb-4 text-brand-dark">
              Step 2: What do they have in common?
            </h2>
            <p className="text-neutral-600 mb-4">
              Look at those three people. What's similar about them?
            </p>
            <div className="bg-white border-2 border-brand-dark p-6 space-y-4">
              <div>
                <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">How did they find you?</p>
                <div className="border-b-2 border-dashed border-neutral-300 h-8"></div>
              </div>
              <div>
                <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">What problem were they trying to solve?</p>
                <div className="border-b-2 border-dashed border-neutral-300 h-8"></div>
              </div>
              <div>
                <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2">What made them choose you over someone else?</p>
                <div className="border-b-2 border-dashed border-neutral-300 h-8"></div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section 3 */}
        <Reveal delay={0.25}>
          <div className="mb-12">
            <h2 className="font-display text-2xl uppercase mb-4 text-brand-dark">
              Step 3: What do they say about you?
            </h2>
            <p className="text-neutral-600 mb-4">
              Think about the compliments you've gotten. The reviews. The things people say when they refer you. What words come up over and over?
            </p>
            <div className="bg-white border-2 border-brand-dark p-6">
              <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-4">List 3-5 words or phrases you hear repeatedly:</p>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(n => (
                  <div key={n} className="flex items-center gap-3">
                    <span className="text-neutral-400">{n}.</span>
                    <div className="flex-1 border-b-2 border-dashed border-neutral-300 h-6"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Section 4 - The insight */}
        <Reveal delay={0.3}>
          <div className="bg-brand-dark text-white p-8 border-2 border-brand-dark mb-12">
            <h2 className="font-display text-2xl uppercase mb-4 text-brand-gold">
              Here's the thing:
            </h2>
            <p className="text-lg mb-4">
              The stuff you just wrote down? That's what your marketing should be about.
            </p>
            <p className="text-neutral-300">
              Not generic claims about quality or service. Not what you think people want to hear. The specific things that make your best customers trust you — those are the things strangers need to see.
            </p>
          </div>
        </Reveal>

        {/* Footer note */}
        <Reveal delay={0.35}>
          <div className="p-6 bg-brand-gold border-2 border-brand-dark">
            <p className="text-brand-dark">
              <strong>Bring this to our call if you want.</strong> It'll give us a head start on understanding what makes your business different — and how to make that visible to everyone, not just the people who already know you.
            </p>
            <p className="text-brand-dark/70 mt-4 text-sm">
              — The LocalBzz Team
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default WorksheetPage
