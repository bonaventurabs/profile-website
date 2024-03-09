import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { GeistSans, GeistMono } from 'geist/font'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'
import cx from '@/utils/cx'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bagas.me/'),
  title: {
    default: 'Bonaventura Bagas',
    template: '%s | Bonaventura Bagas',
  },
  description: 'Bonaventura Bagas personal website',
  openGraph: {
    title: 'Bonaventura Bagas',
    description: 'Bonaventura Bagas personal website',
    url: 'https://bagas.me/',
    siteName: 'Bonaventura Bagas',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Bonaventura Bagas',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable,
        inter.variable,
        calSans.variable
      )}
    >
      <body className="bg-white text-black antialiased dark:bg-[#111010] dark:text-white">
        <Provider>
          <Navbar />
          <main className="container mx-auto mb-40 mt-6 flex h-full min-w-0 max-w-6xl flex-auto flex-col pt-4 lg:mx-auto">
            {children}
          </main>
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
