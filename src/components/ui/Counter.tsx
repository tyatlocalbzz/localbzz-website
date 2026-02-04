import { useEffect, useRef } from 'react'
import { useSpring, useMotionValue } from 'framer-motion'

interface CounterProps {
  value: number
}

const Counter = ({ value }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const isInView = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isInView.current = true
          motionValue.set(value)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current && isInView.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
  }, [springValue])

  return <span ref={ref}>0</span>
}

export default Counter
