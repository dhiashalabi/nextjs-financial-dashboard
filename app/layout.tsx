import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'Acme Dashboard is a dashboard for Acme Inc.',
  metadataBase: new URL('https://acme-dashboard.dhiashalabi.info'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <main className="flex h-screen flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
