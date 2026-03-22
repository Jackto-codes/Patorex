import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patorex & Associates | Results that resonate',
  description: 'Premier marketing agency delivering innovative strategies and creative excellence. Transform your brand with our comprehensive digital marketing solutions.',
  icons: {
    icon: '/Patorex logo.jpg',
    shortcut: '/Patorex logo.jpg',
    apple: '/Patorex logo.jpg',
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
