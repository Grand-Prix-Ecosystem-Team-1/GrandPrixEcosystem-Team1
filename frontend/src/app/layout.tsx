import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Mono } from 'next/font/google'
import { Providers } from '@/providers'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}`,
    default: process.env.NEXT_PUBLIC_APP_NAME ?? 'App',
  },
  description: 'Built on garage-boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="flex h-screen flex-col">
        <Providers><Navbar />{children}</Providers>
      </body>
    </html>
  )
}
