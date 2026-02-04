import { Quote } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'
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
    quote: "Placeholder quote for Marty Bryan testimonial.",
    logo: "/images/martybs-logo.png"
  }
]

// Duplicate for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

const Proof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const x = useMotionValue(0)
  const baseVelocity = -50 // pixels per second
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<ReturnType<typeof animate> | null>(null)

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
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl uppercase text-white">
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
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="w-12 h-12 object-contain mb-4 mx-auto"
                  />
                ) : (
                  <Quote className="w-8 h-8 text-brand-gold mb-4 rotate-180 mx-auto" aria-hidden="true" />
                )}
                <blockquote className="text-lg text-neutral-300 leading-relaxed text-center">
                  "{item.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Proof
