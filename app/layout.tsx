import type { Metadata } from 'next'
import Navigation from '../components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brain Index GEO - Автоматизация бизнеса от €100',
  description: 'Автоматизация вашего бизнеса за 5 минут. Вставьте ссылку → получите анализ → запустите автоматизацию. Базовый пакет €100 включает одну страну.',
  keywords: 'автоматизация бизнеса, анализ сайта, интеграция систем, CRM подключение, бизнес процессы',
  openGraph: {
    title: 'Brain Index GEO - Автоматизация бизнеса от €100',
    description: 'Простая автоматизация для любого бизнеса. Анализ → Настройка → Запуск в продакшн.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}