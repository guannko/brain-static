import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Тарифы | Brain Index GEO - Автоматизация бизнеса от €100',
  description: 'Прозрачные тарифы на автоматизацию бизнеса. Базовый пакет €100 включает одну страну. Дополнительные страны от €30. Начните с одной страны и масштабируйтесь.',
  keywords: 'тарифы автоматизация, цены бизнес автоматизация, стоимость интеграции систем, автоматизация по странам',
  openGraph: {
    title: 'Тарифы Brain Index GEO - От €100 за автоматизацию',
    description: 'Базовый пакет €100 + дополнительные страны от €30. Прозрачное ценообразование без скрытых платежей.',
    type: 'website',
  }
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Простые и честные <span className="text-blue-600">тарифы</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Начните с одной страны за €100, масштабируйтесь по мере роста. 
            Прозрачное ценообразование без скрытых платежей.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Без setup fees
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Без скрытых платежей
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Отмена в любой момент
            </div>
          </div>
        </div>

        {/* Base Package */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                Базовый пакет
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Стартовая автоматизация</h2>
              <div className="text-6xl font-bold text-blue-600 mb-2">€100</div>
              <p className="text-gray-600">за полную автоматизацию + 1 страна</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Что включено:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Полный анализ вашего проекта</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Настройка автоматизации</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Выход в продакшн</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span><strong>1 страна</strong> на ваш выбор</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span>Техническая поддержка</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Популярные страны:</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span>🇺🇦 Украина</span>
                    <span className="text-green-600 font-medium">Включено</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span>🇷🇺 Россия</span>
                    <span className="text-green-600 font-medium">Включено</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span>🇩🇪 Германия</span>
                    <span className="text-green-600 font-medium">Включено</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                    <span>🇵🇱 Польша</span>
                    <span className="text-green-600 font-medium">Включено</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                Начать автоматизацию
              </button>
            </div>
          </div>
        </div>

        {/* Additional Countries */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Дополнительные страны
            </h2>
            <p className="text-xl text-gray-600">
              Масштабируйтесь в новые рынки по мере роста бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Simple Countries */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Простые рынки</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">€30</div>
                <p className="text-gray-600">за каждую страну</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span>🇧🇾 Беларусь</span>
                  <span className="text-green-600">€30</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇰🇿 Казахстан</span>
                  <span className="text-green-600">€30</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇱🇻 Латвия</span>
                  <span className="text-green-600">€30</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇱🇹 Литва</span>
                  <span className="text-green-600">€30</span>
                </li>
              </ul>
              
              <div className="text-center">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Добавить страну
                </button>
              </div>
            </div>

            {/* Medium Countries */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Средние рынки</h3>
                <div className="text-4xl font-bold text-orange-600 mb-2">€40</div>
                <p className="text-gray-600">за каждую страну</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span>🇵🇱 Польша</span>
                  <span className="text-orange-600">€40</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇨🇿 Чехия</span>
                  <span className="text-orange-600">€40</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇪🇪 Эстония</span>
                  <span className="text-orange-600">€40</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇸🇰 Словакия</span>
                  <span className="text-orange-600">€40</span>
                </li>
              </ul>
              
              <div className="text-center">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Добавить страну
                </button>
              </div>
            </div>

            {/* Complex Countries */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сложные рынки</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">€50</div>
                <p className="text-gray-600">за каждую страну</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center justify-between">
                  <span>🇩🇪 Германия</span>
                  <span className="text-red-600">€50</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇺🇸 США</span>
                  <span className="text-red-600">€50</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇬🇧 Великобритания</span>
                  <span className="text-red-600">€50</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>🇫🇷 Франция</span>
                  <span className="text-red-600">€50</span>
                </li>
              </ul>
              
              <div className="text-center">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Добавить страну
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Packages */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Популярные пакеты
            </h2>
            <p className="text-xl text-gray-600">
              Готовые комбинации для разных типов бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Стартап</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">€100</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 1 страна на выбор</li>
                <li>• Полная автоматизация</li>
                <li>• Техподдержка</li>
              </ul>
              <div className="text-center">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Выбрать
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-500">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Популярный</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Региональный</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">€180</div>
              <div className="text-sm text-gray-500 mb-4">вместо €220</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 3 страны (CIS регион)</li>
                <li>• Скидка 18%</li>
                <li>• Приоритетная поддержка</li>
              </ul>
              <div className="text-center">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Выбрать
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Глобальный</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">от €500</div>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 10+ стран</li>
                <li>• Персональный менеджер</li>
                <li>• Индивидуальные условия</li>
              </ul>
              <div className="text-center">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Обсудить
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Можно ли добавить страны позже?
              </h3>
              <p className="text-gray-600">
                Да, вы можете добавлять новые страны в любой момент. Просто доплачиваете 
                стоимость дополнительной страны, и мы настроим автоматизацию.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Что если моей страны нет в списке?
              </h3>
              <p className="text-gray-600">
                Мы работаем с любыми странами. Стоимость рассчитывается индивидуально 
                в зависимости от сложности локализации и интеграций.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Есть ли скрытые платежи?
              </h3>
              <p className="text-gray-600">
                Нет скрытых платежей. Указанная цена включает все: анализ, настройку, 
                запуск и базовую поддержку. Доплачиваете только за дополнительные страны.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}