import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brain Index GEO - Автоматизация бизнеса за 5 минут от €100',
  description: 'Вставьте ссылку вашего проекта → получите автоматический анализ → оплатите подписку → всё в продакшн. Простая автоматизация для бизнеса любого размера.',
  keywords: 'автоматизация бизнеса, анализ сайта бесплатно, интеграция систем, подключить CRM, автоматизация процессов',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Автоматизация вашего бизнеса 
              <span className="text-blue-600"> за 5 минут</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Вставьте ссылку → Получите анализ → Запустите автоматизацию
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/analyze"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Анализировать проект бесплатно
              </Link>
              <Link 
                href="/pricing"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Посмотреть тарифы
              </Link>
            </div>
            <div className="text-gray-500">
              ⚡ Базовый пакет от <strong className="text-blue-600">€100</strong> • 
              🌍 Дополнительные страны от <strong className="text-blue-600">€30</strong> • 
              🚀 Запуск за 24 часа
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс из 4 шагов для полной автоматизации вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Регистрация</h3>
              <p className="text-gray-600">
                Создайте аккаунт на нашей платформе за 30 секунд
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Анализ</h3>
              <p className="text-gray-600">
                Вставьте ссылку вашего проекта и получите полный анализ
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Оплата</h3>
              <p className="text-gray-600">
                Выберите тариф и оплатите подписку для запуска
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Продакшн</h3>
              <p className="text-gray-600">
                Автоматизация запускается и работает 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Прозрачные цены
              </h3>
              <p className="text-gray-600">
                €100 за базовый пакет, €30-50 за дополнительные страны. 
                Никаких скрытых платежей.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Быстрый запуск
              </h3>
              <p className="text-gray-600">
                От анализа до продакшна за 24 часа. 
                Никаких месяцев разработки.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Масштабируемость
              </h3>
              <p className="text-gray-600">
                Начните с одной страны, добавляйте новые 
                по мере роста бизнеса.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Полная автоматизация
              </h3>
              <p className="text-gray-600">
                CRM, платежи, аналитика, уведомления — 
                всё работает автоматически.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Поддержка 24/7
              </h3>
              <p className="text-gray-600">
                Техническая поддержка и консультации 
                на каждом этапе.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Детальная аналитика
              </h3>
              <p className="text-gray-600">
                Полный контроль над процессами 
                и результатами автоматизации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Простые тарифы
            </h2>
            <p className="text-xl text-gray-600">
              Начните с €100, масштабируйтесь по мере роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Стартап</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">€100</div>
              <p className="text-gray-600 mb-6">1 страна + полная автоматизация</p>
              <Link 
                href="/pricing"
                className="block bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Начать
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-500 rounded-xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                  Популярный
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Региональный</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">€180</div>
              <p className="text-gray-600 mb-6">3 страны + скидка 18%</p>
              <Link 
                href="/pricing"
                className="block bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Выбрать
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Глобальный</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">€500+</div>
              <p className="text-gray-600 mb-6">10+ стран + персональный менеджер</p>
              <Link 
                href="/pricing"
                className="block bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Обсудить
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы автоматизировать ваш бизнес?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Получите бесплатный анализ вашего проекта уже сегодня
          </p>
          <Link 
            href="/analyze"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Начать анализ бесплатно
          </Link>
        </div>
      </section>
    </div>
  )
}