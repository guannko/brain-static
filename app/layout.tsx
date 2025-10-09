import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brain Index - AI Visibility Analytics Platform | GEO для бизнеса',
  description: 'Проверьте как ChatGPT, Claude и другие AI системы видят ваш бренд. Получите анализ AI видимости, отслеживайте конкурентов и улучшите присутствие в AI-поиске.',
  keywords: 'AI visibility, GEO, generative engine optimization, ChatGPT visibility, Claude AI, brand visibility, AI search optimization, brain index',
  openGraph: {
    title: 'Brain Index - AI Visibility Analytics Platform',
    description: 'Discover how AI systems like ChatGPT see your brand. Get actionable insights to improve your AI visibility.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'en': '/en',
      'ru': '/ru',
    },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}