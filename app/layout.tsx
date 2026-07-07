import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patorex & Associates | Results that resonate',
  description: 'Premier marketing agency delivering innovative strategies and creative excellence. Transform your brand with our comprehensive digital marketing solutions.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
