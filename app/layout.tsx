import './globals.css'
import Providers from './providers'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

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
    return (
          <html lang="en">
                <body className={`${inter.className} flex flex-col justify-center`}>
                      <Toaster position="bottom-right" />
                        <div><NavBar /></div>div>
                        <div>
                                  <Providers>{children}</Providers>Providers>
                        </div>div>
                        <Footer />
                </body>body>
          </html>html>
        )
}
</html>
