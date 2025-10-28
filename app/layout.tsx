import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyIBDCompass - Manage IBD with Clarity',
  description: 'Track IBD symptoms, identify trigger foods, and get personalized insights. Built by gastroenterologists for better IBD management through nutrition.',
  generator: 'MyIBDCompass',
  metadataBase: new URL('https://myibdcompass.ca'),
  openGraph: {
    title: 'MyIBDCompass - Manage IBD with Clarity',
    description: 'Track IBD symptoms, identify trigger foods, and get personalized insights. Built by gastroenterologists for better IBD management through nutrition.',
    url: 'https://myibdcompass.ca',
    siteName: 'MyIBDCompass',
    images: [
      {
        url: '/app-screens/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'MyIBDCompass App Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyIBDCompass - Manage IBD with Clarity',
    description: 'Track IBD symptoms, identify trigger foods, and get personalized insights. Built by gastroenterologists for better IBD management through nutrition.',
    images: ['/app-screens/preview.jpg'],
    creator: '@myibdcompass'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
