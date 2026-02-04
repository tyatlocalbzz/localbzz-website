import { motion } from 'framer-motion'
import { type ReactNode, type MouseEventHandler } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  children: ReactNode
  fullWidth?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

const Button = ({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  onClick,
  disabled,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) => {
  const baseStyles =
    'group px-8 py-4 font-display text-xl tracking-wide uppercase flex items-center justify-center gap-2 border-2 border-brand-dark relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark'

  const variants = {
    // We handle the movement in framer motion variants now, so we remove hover translate classes
    primary:
      'bg-brand-gold text-brand-dark shadow-hard hover:shadow-[8px_8px_0px_0px_#111]',
    secondary:
      'bg-brand-dark text-white shadow-hard hover:shadow-[8px_8px_0px_0px_#111]',
    outline:
      'bg-transparent border-2 border-brand-dark text-brand-dark shadow-hard hover:shadow-[8px_8px_0px_0px_#111]',
    ghost:
      'bg-transparent text-brand-dark px-0 border-none shadow-none hover:bg-transparent',
  }

  const widthClass = fullWidth ? 'w-full' : 'w-auto'
  const isGhost = variant === 'ghost'

  return (
    <motion.button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
      initial={false}
      whileHover={isGhost ? { x: 5 } : { y: -2, x: -2 }}
      whileTap={
        isGhost
          ? { scale: 0.95 }
          : { y: 2, x: 2, boxShadow: '0px 0px 0px 0px #111' }
      }
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {/* Sheen Effect - Only for solid buttons */}
      {!isGhost && variant !== 'outline' && (
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}

export default Button
