import React from 'react'

const VARIANTS = {
  solid: 'bg-charcoal-800 text-ivory hover:bg-charcoal-900',
  gold: 'bg-gold text-ivory hover:bg-gold-dark',
  outline: 'border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal-900',
  outlineDark: 'border border-charcoal-800/40 text-charcoal-900 hover:bg-charcoal-800 hover:text-ivory',
  ghost: 'text-charcoal-900 hover:text-gold',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/**
 * Shared button used across the site.
 * as="a" renders an anchor for in-page navigation; defaults to <button>.
 */
export default function Button({
  children,
  variant = 'solid',
  size = 'md',
  as = 'button',
  className = '',
  ...props
}) {
  const Tag = as
  const base =
    'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 ease-premium active:scale-[.98] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed'
  return (
    <Tag className={`${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
