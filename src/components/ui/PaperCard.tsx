import { type ReactNode, type HTMLAttributes } from 'react'
import { NOISE_SVG_DATA_URI } from '../../lib/theme'

interface PaperCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  variant?: 'white' | 'dark' | 'outline' | 'cream'
  rotate?: 'left' | 'right' | 'none'
}

const PaperCard = ({
  children,
  className = '',
  variant = 'white',
  rotate = 'none',
  ...props
}: PaperCardProps) => {
  // Outer container: Handles positioning, rotation, hover lift, padding
  // INCREASED PADDING: p-8 -> p-10/p-12 to open up gutter space
  const containerClasses =
    'relative p-10 md:p-12 isolate transition-transform duration-300 ease-out'

  // Background layer: Handles border, background color, shadow.
  // We apply the SVG filter here to create the torn/rough edge effect on the borders/box.
  const visualClasses =
    'absolute inset-0 z-[-1] border-2 border-brand-dark transition-all duration-300 ease-out'

  const variants = {
    white: 'bg-white shadow-hard group-hover:shadow-[10px_10px_0px_0px_#111]',
    cream:
      'bg-brand-paper shadow-hard group-hover:shadow-[10px_10px_0px_0px_#111]',
    dark: 'bg-brand-dark text-white shadow-[6px_6px_0px_0px_#FFC000] border-brand-gold group-hover:shadow-[10px_10px_0px_0px_#FFC000]',
    outline:
      'bg-transparent border-dashed group-hover:border-solid shadow-hard group-hover:shadow-[8px_8px_0px_0px_#111]',
  }

  const hoverLift = 'hover:-translate-y-1 hover:-translate-x-1'

  // Retain rotate prop support if passed explicitly, but default is 'none'
  const rotateClasses = {
    none: '',
    left: '-rotate-1 hover:rotate-0',
    right: 'rotate-1 hover:rotate-0',
  }

  // Combine classes for the container
  const finalContainerClasses = `${containerClasses} ${variants[variant].includes('bg-brand-dark') ? 'text-white' : ''} ${hoverLift} ${rotateClasses[rotate]} ${className}`

  return (
    <div className={finalContainerClasses} {...props}>
      {/* Visual Background (Rough Edges) */}
      <div
        className={`${visualClasses} ${variants[variant]}`}
        style={{ filter: 'url(#rough-edges)' }}
      >
        {/* Internal Noise Texture for Tactile Feel - visible on lighter backgrounds */}
        {variant !== 'outline' && (
          <div
            className="absolute inset-0 opacity-[0.08] w-full h-full pointer-events-none mix-blend-multiply"
            style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export default PaperCard
