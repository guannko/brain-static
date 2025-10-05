import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brain Index GEO - AI Visibility Platform',
  description: 'AI-powered business intelligence and website analysis platform',
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