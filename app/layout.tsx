import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'Acme Dashboard is a dashboard for Acme Inc.',
  metadataBase: new URL('https://acme-dashboard.dhiashalabi.info'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
