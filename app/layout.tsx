import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'

const aeonik = localFont({
  src: [
    { path: '../public/fonts/Aeonik-Light.otf',        weight: '300', style: 'normal'  },
    { path: '../public/fonts/Aeonik-LightItalic.otf',  weight: '300', style: 'italic'  },
    { path: '../public/fonts/Aeonik-Regular.otf',      weight: '400', style: 'normal'  },
    { path: '../public/fonts/Aeonik-RegularItalic.otf',weight: '400', style: 'italic'  },
    { path: '../public/fonts/Aeonik-Medium.otf',       weight: '500', style: 'normal'  },
    { path: '../public/fonts/Aeonik-MediumItalic.otf', weight: '500', style: 'italic'  },
    { path: '../public/fonts/Aeonik-Bold.otf',         weight: '700', style: 'normal'  },
    { path: '../public/fonts/Aeonik-BoldItalic.otf',   weight: '700', style: 'italic'  },
    { path: '../public/fonts/Aeonik-Black.otf',        weight: '900', style: 'normal'  },
  ],
  variable: '--font-aeonik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'David Robinson — Operational Systems Strategist',
  description:
    'I help founders and COOs fix operational chaos so they can scale with clarity. 13+ years building systems across real estate, fintech, logistics, and beyond.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={aeonik.variable}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  )
}
