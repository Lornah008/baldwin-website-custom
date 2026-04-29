import './globals.css'
import Providers from './providers'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { validateAuthRequest } from '@/actions/auth/lucia'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Baldwin Enterprises',
  description: 'Offering EU compliant repeaters in Sub-Saharan Africa.',
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const { user } = await validateAuthRequest()

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-center`}>
      <Toaster position="bottom-right" />
        {!user && <div><NavBar /></div>}
        <div>
          <Providers>{children}</Providers>
        </div>
        {!user && <Footer />}
      </body>
    </html>
  )
}
