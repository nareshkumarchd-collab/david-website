import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-aeonik)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        cream:  '#f3f0ec',
        ink:    '#212325',
        canvas: '#0b1012',
        taupe:  '#d4cec6',
      },
      fontSize: {
        // fluid.glass scale
        label:   ['12px', { lineHeight: '1.3',  letterSpacing: '0.08em' }],
        body:    ['16px', { lineHeight: '20px'                          }],
        body_lg: ['18px', { lineHeight: '28px'                          }],
        h3:      ['24px', { lineHeight: '1.1',  letterSpacing: '-0.02em'}],
        h2:      ['40px', { lineHeight: '1.0',  letterSpacing: '-0.02em'}],
        h1:      ['56px', { lineHeight: '1.0',  letterSpacing: '-0.02em'}],
        display: ['clamp(48px,6.5vw,96px)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      transitionTimingFunction: {
        'out-quart':    'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-quart': 'cubic-bezier(0.77,  0,    0.175, 1)',
        'button':       'cubic-bezier(1, 0, 0, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
}

export default config
