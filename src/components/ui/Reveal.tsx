import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

// Shared easing curves for consistency
const EASE_REVEAL: [number, number, number, number] = [0.22, 1, 0.36, 1]
const DURATION_REVEAL = 0.5

interface RevealProps {
  children?: ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  threshold?: number
}

export const Reveal = ({
  children,
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.2,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px',
    amount: threshold,
  })

  const getVariants = () => {
    const distance = 30

    const baseHidden = { opacity: 0 }
    const baseVisible = { opacity: 1 }

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseHidden, y: distance },
          visible: { ...baseVisible, y: 0 },
        }
      case 'down':
        return {
          hidden: { ...baseHidden, y: -distance },
          visible: { ...baseVisible, y: 0 },
        }
      case 'left':
        return {
          hidden: { ...baseHidden, x: distance },
          visible: { ...baseVisible, x: 0 },
        }
      case 'right':
        return {
          hidden: { ...baseHidden, x: -distance },
          visible: { ...baseVisible, x: 0 },
        }
      case 'none':
        return {
          hidden: { ...baseHidden, scale: 0.95 },
          visible: { ...baseVisible, scale: 1 },
        }
      default:
        return {
          hidden: { ...baseHidden, y: distance },
          visible: { ...baseVisible, y: 0 },
        }
    }
  }

  return (
    <div
      ref={ref}
      style={{ width, position: 'relative' }}
      className={className}
    >
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: DURATION_REVEAL,
          delay,
          ease: EASE_REVEAL,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface StaggerContainerProps {
  children?: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export const StaggerContainer = ({
  children,
  className = '',
  delayChildren = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children?: ReactNode
  className?: string
}

export const StaggerItem = ({ children, className = '' }: StaggerItemProps) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: DURATION_REVEAL,
            ease: EASE_REVEAL,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
