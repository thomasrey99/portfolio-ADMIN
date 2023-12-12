import type { Metadata } from 'next'
import { Providers } from '@/lib/Providers'
import Navbar from '@/components/navbar/navbar'
import Menu from '@/components/menu/menu'
import Footer from '@/components/footer/footer'

import './globals.scss'



export const metadata: Metadata = {
  title: 'Thomas Rey DEV',
  description: 'web developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className="generalLayout">
            <Menu/>
            <Navbar/>
            {children}
            <Footer/>
        </body>
      </html>
    </Providers>
  )
}
