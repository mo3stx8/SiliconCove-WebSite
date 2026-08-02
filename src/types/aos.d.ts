import 'react'

declare module 'react' {
  interface AriaAttributes {
    'data-aos'?: string
    'data-aos-delay'?: number | string
    'data-aos-duration'?: number | string
    'data-aos-easing'?: string
    'data-aos-once'?: boolean | string
  }
}
