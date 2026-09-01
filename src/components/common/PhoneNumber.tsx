import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react'

interface PhoneNumberProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The phone number used for the `tel:` link and as the default text. */
  value: string
  /** The display text; overrides the default `value` rendering. */
  children?: ReactNode
  className?: string
}

const RTL_SAFE_STYLE: CSSProperties = {
  direction: 'ltr',
  unicodeBidi: 'plaintext',
}

/**
 * Renders a phone number in its natural left-to-right order, even when the
 * surrounding content is RTL, and links it to a `tel:` scheme.
 */
export default function PhoneNumber({
  value,
  children,
  style,
  className,
  ...props
}: PhoneNumberProps) {
  return (
    <a
      href={`tel:${value.replace(/\s/g, '')}`}
      style={{ ...RTL_SAFE_STYLE, ...style }}
      className={className}
      {...props}
    >
      {children ?? value}
    </a>
  )
}
