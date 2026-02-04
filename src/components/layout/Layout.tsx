import { useState, useEffect, type ReactNode } from 'react'
import Button from '../ui/Button'
import { NOISE_SVG_DATA_URI } from '../../lib/theme'

interface LayoutProps {
  children: ReactNode
  currentView: 'home' | 'approach'
  onNavigate: (view: 'home' | 'approach') => void
  onContactClick: () => void
}

const Layout = ({
  children,
  currentView,
  onNavigate,
  onContactClick,
}: LayoutProps) => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show at the top
      if (currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setVisible(false)
      } else {
        // Scrolling up - show
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Helper for Nav Item styles
  const getNavLinkClass = () => {
    return `hidden md:block text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all relative group ${
      currentView === 'home'
        ? 'text-neutral-400 hover:text-white'
        : 'text-neutral-500 hover:text-brand-dark'
    }`
  }

  return (
    <div className="min-h-screen font-sans bg-brand-paper text-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-brand-dark relative">
      {/* Global SVG Filters */}
      <svg
        className="fixed w-0 h-0 pointer-events-none"
        style={{ position: 'absolute', zIndex: -1 }}
      >
        <defs>
          <filter id="rough-edges" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="5"
              seed="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className={`
        fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${currentView === 'home' ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark border-b-2 border-brand-dark'}
      `}
      >
        {/* Nav Texture Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
        />

        {/* Logo */}
        <a
          href="#"
          role="button"
          aria-label="Go to homepage"
          className="relative z-10 font-display text-3xl uppercase tracking-tight cursor-pointer select-none hover:scale-[1.02] transition-transform origin-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('home')
            window.scrollTo(0, 0)
          }}
        >
          LOCAL<span className="text-brand-gold">BZZ</span>
        </a>

        <div className="relative z-10 flex gap-6 md:gap-10 items-center">
          {/* Link */}
          <button
            onClick={() => {
              onNavigate(currentView === 'home' ? 'approach' : 'home')
              window.scrollTo(0, 0)
            }}
            aria-label={currentView === 'home' ? 'View our approach' : 'Go back home'}
            className={`${getNavLinkClass()} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold`}
          >
            <span className="text-brand-gold mr-1 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3" aria-hidden="true">
              //
            </span>
            {currentView === 'home' ? 'Our Approach' : 'Back Home'}
          </button>

          {/* CTA Button */}
          <Button
            variant="primary"
            aria-label="Schedule a call with LocalBzz"
            className={`
               relative overflow-hidden !py-2 !px-6 !text-xs !font-mono !font-bold !uppercase !tracking-widest
               ${
                 currentView === 'home'
                   ? '!bg-transparent !text-white !border-2 !border-white !shadow-none hover:!bg-white hover:!text-brand-dark'
                   : '!bg-brand-dark !text-white !border-2 !border-brand-dark !shadow-[4px_4px_0px_0px_#111] hover:!shadow-[6px_6px_0px_0px_#111]'
               }
             `}
            onClick={onContactClick}
          >
            <span className="relative z-10">Let&apos;s Talk</span>
            <div
              className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
            />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-[72px]">{children}</main>

      {/* Footer */}
      <footer role="contentinfo" className="bg-brand-dark text-neutral-500 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest gap-4">
          <div>LocalBzz</div>
          <address className="not-italic">Flower Mound, TX</address>
          <div className="text-white">
            Marketing for people who build things.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
