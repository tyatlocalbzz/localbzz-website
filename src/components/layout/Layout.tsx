import { useState, useEffect, useRef, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

  // Trigger entrance animation on mount
  useEffect(() => {
    setHasLoaded(true)
  }, [])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show at the top
      if (currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - hide
        setVisible(false)
        setMobileMenuOpen(false) // Close mobile menu on scroll
      } else {
        // Scrolling up - show
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Helper for Nav Item styles
  const getNavLinkClass = () => {
    return `text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all relative group ${
      currentView === 'home'
        ? 'text-neutral-400 hover:text-white'
        : 'text-neutral-500 hover:text-brand-dark'
    }`
  }

  const isDark = currentView === 'home'

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
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: hasLoaded && visible ? 0 : -100,
          opacity: hasLoaded && visible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          delay: hasLoaded ? 0 : 0.2
        }}
        className={`
          fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center
          ${isDark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark border-b-2 border-brand-dark'}
        `}
      >
        {/* Nav Texture Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
        />

        {/* Logo */}
        <motion.a
          href="#"
          role="button"
          aria-label="Go to homepage"
          className="relative z-10 flex items-center gap-3 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          onClick={(e) => {
            e.preventDefault()
            onNavigate('home')
            window.scrollTo(0, 0)
            setMobileMenuOpen(false)
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <img
            src="/images/localbzz-icon-white.svg"
            alt="LocalBzz Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display text-2xl uppercase tracking-tight">
            LOCAL<span className="text-brand-gold">BZZ</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="relative z-10 hidden md:flex gap-10 items-center">
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
            variant={isDark ? 'nav-dark' : 'nav-light'}
            aria-label="Schedule a call with LocalBzz"
            onClick={onContactClick}
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="relative z-10 md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-brand-dark'}`}
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 9 : 0
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
            <motion.span
              className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-brand-dark'}`}
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className={`block h-0.5 w-full ${isDark ? 'bg-white' : 'bg-brand-dark'}`}
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -9 : 0
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          </div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden ${
                isDark ? 'bg-brand-dark text-white' : 'bg-white text-brand-dark'
              }`}
            >
              {/* Texture */}
              <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
              />

              <div className="relative z-10 flex flex-col p-8 pt-24 gap-8">
                <button
                  onClick={() => {
                    onNavigate(currentView === 'home' ? 'approach' : 'home')
                    window.scrollTo(0, 0)
                    setMobileMenuOpen(false)
                  }}
                  className={`${getNavLinkClass()} text-left text-lg`}
                >
                  {currentView === 'home' ? 'Our Approach' : 'Back Home'}
                </button>

                <Button
                  variant={isDark ? 'nav-dark' : 'nav-light'}
                  aria-label="Schedule a call with LocalBzz"
                  onClick={() => {
                    onContactClick()
                    setMobileMenuOpen(false)
                  }}
                  fullWidth
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-[72px]">{children}</main>

      {/* Footer */}
      <footer role="contentinfo" className="bg-brand-dark text-neutral-500 py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-white/10">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm font-mono uppercase tracking-widest gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <img
              src="/images/localbzz-logo.webp"
              alt=""
              loading="lazy"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-50"
            />
            <span>LocalBzz</span>
          </div>
          <address className="not-italic">Flower Mound, TX</address>
          <div className="text-white text-center sm:text-left">
            Marketing for people who build things.
          </div>
        </motion.div>
      </footer>
    </div>
  )
}

export default Layout
