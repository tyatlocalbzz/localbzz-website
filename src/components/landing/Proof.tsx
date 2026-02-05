import { Quote } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: "Bob McClaren",
    type: "44 Farms",
    quote: "They invest the time to understand our business, then jump right in. They're not just executing, they're thinking.",
    logo: "/images/44farms-logo.png"
  },
  {
    name: "Marty Turco",
    type: "Kingsville / Dallas Stars",
    quote: "They're amazing at telling our story. We're proud to have them representing our brand.",
    logo: "/images/stars-logo.png"
  },
  {
    name: "Jessica Trent",
    type: "Business Owner",
    quote: "They made the shoot low key and didn't disrupt our business day. I'd highly recommend them for visibility.",
    logo: null
  },
  {
    name: "Rafaelo Infante",
    type: "Socorro & Jalisco",
    quote: "They opened our eyes to what the local community thinks. Their insights helped us create content that captivated.",
    logo: null
  },
  {
    name: "Marty Bryan",
    type: "Marty B's",
    quote: "LocalBzz gets it. They know how to capture who we are and share it with the people who need to see it.",
    logo: "/images/martybs-logo.png"
  }
]

// Duplicate for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

// Card component with hover effects
const TestimonialCard = ({ item, index, baseIndex }: { item: typeof testimonials[0], index: number, baseIndex: number }) => {
  const [isCardHovered, setIsCardHovered] = useState(false)

  // Parallax depth - cards at different positions move at slightly different speeds
  const depthOffset = (baseIndex % 3) * 0.15 // 0, 0.15, or 0.3

  return (
    <motion.div
      className="w-[320px] sm:w-[400px] h-auto sm:h-[336px] flex-shrink-0 bg-brand-dark border-2 border-white/20 p-6 sm:p-8 flex flex-col cursor-pointer"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      animate={{
        scale: isCardHovered ? 1.01 : 1,
        y: isCardHovered ? -4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      style={{
        boxShadow: isCardHovered
          ? '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)'
          : '0 0 0 rgba(0,0,0,0)',
        borderColor: isCardHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)',
      }}
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
        {item.logo ? (
          <motion.img
            src={item.logo}
            alt={`${item.name} logo`}
            loading="lazy"
            className="w-12 h-12 object-contain mb-4 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Quote className="w-8 h-8 text-brand-gold mb-4 rotate-180 mx-auto" aria-hidden="true" />
          </motion.div>
        )}
        <blockquote className="text-base sm:text-lg text-neutral-300 leading-relaxed text-center">
          "{item.quote}"
        </blockquote>
      </div>
    </motion.div>
  )
}

const Proof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const x = useMotionValue(0)
  const baseVelocity = -50 // pixels per second
  const [isHovered, setIsHovered] = useState(false)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Trigger staggered entrance when in view
  useEffect(() => {
    if (isInView && !hasAnimatedIn) {
      setHasAnimatedIn(true)
    }
  }, [isInView, hasAnimatedIn])

  // Measure content width
  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  // Smooth velocity using spring
  const smoothVelocity = useSpring(baseVelocity, {
    stiffness: 150,
    damping: 30,
  })

  // Update velocity based on hover
  useEffect(() => {
    smoothVelocity.set(isHovered ? 0 : baseVelocity)
  }, [isHovered, smoothVelocity])

  // Animation loop
  useEffect(() => {
    if (contentWidth === 0) return

    let lastTime = performance.now()
    let rafId: number

    const tick = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000 // Convert to seconds
      lastTime = currentTime

      const velocity = smoothVelocity.get()
      const currentX = x.get()
      let newX = currentX + velocity * delta

      // Reset position for infinite loop
      if (newX <= -contentWidth) {
        newX += contentWidth
      } else if (newX > 0) {
        newX -= contentWidth
      }

      x.set(newX)
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(rafId)
  }, [contentWidth, smoothVelocity, x])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white">
            Businesses that trust us with theirs.
          </h2>
        </Reveal>
      </div>

      {/* Infinite scroll container */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6"
          style={{
            x,
            width: 'max-content',
          }}
        >
          {duplicatedTestimonials.map((item, i) => {
            const baseIndex = i % testimonials.length
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={hasAnimatedIn ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: (baseIndex * 0.1), // Stagger based on original index
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <TestimonialCard item={item} index={i} baseIndex={baseIndex} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Proof
