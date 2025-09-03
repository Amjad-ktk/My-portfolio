import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Amjad - Full Stack Developer',
  description: 'Muhammad Amjad - Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'MERN Stack', 'Web Development', 'JavaScript'],
  authors: [{ name: 'Muhammad Amjad' }],
  creator: 'Muhammad Amjad',
  openGraph: {
    title: 'Muhammad Amjad - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies',
    url: 'https://your-domain.com',
    siteName: 'Muhammad Amjad Portfolio',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630/667eea/ffffff?text=Muhammad+Amjad',
        width: 1200,
        height: 630,
        alt: 'Muhammad Amjad - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Amjad - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies',
    images: ['https://via.placeholder.com/1200x630/667eea/ffffff?text=Muhammad+Amjad'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
