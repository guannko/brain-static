import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brain Index - AI Visibility Analytics Platform | GEO для бизнеса',
  description: 'Проверьте как ChatGPT, Claude и другие AI системы видят ваш бренд. Получите анализ AI видимости и улучшите присутствие в AI-поиске.',
  keywords: 'AI visibility, GEO, generative engine optimization, ChatGPT visibility, Claude AI, brand visibility, AI search optimization',
  openGraph: {
    title: 'Brain Index - AI Visibility Analytics Platform',
    description: 'Discover how AI systems like ChatGPT see your brand. Get actionable insights to improve your AI visibility.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center">
        <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Is Your Brand Visible in <span className="text-blue-600">AI?</span>
              </h1>
              <div className="w-24 h-1 bg-orange-500 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-xl text-gray-700 mb-4 font-semibold">
                Check how ChatGPT, Claude, and other AI systems see your brand
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Discover your AI visibility score, track competitors, and get actionable insights 
                to improve your presence in AI-powered search results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link 
                  href="#analyze"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Analyze Now
                  <span className="ml-2">🔍</span>
                </Link>
                <Link 
                  href="#features"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Quick Analysis Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Quick Analysis</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  placeholder="Enter your brand name"
                  id="brandInput"
                />
                <button 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={() => console.log('Analyze brand')}
                >
                  🔍 Check AI Visibility
                </button>
                <p className="text-center text-gray-500 text-sm">
                  Free analysis • No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="py-20 bg-white" id="analyze">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">BRAIN INDEX</h3>
                  <p className="text-gray-600">AI Visibility Analytics</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Visibility Analytics</h2>
              <p className="text-xl text-gray-600 mb-4">
                Understand how artificial intelligence systems perceive and present your brand to millions of users worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Get detailed insights and actionable recommendations.
              </p>
              
              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-bold text-2xl text-blue-600">10+</div>
                    <div className="text-sm text-gray-600">AI systems analyzed</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-green-600">Real-time</div>
                    <div className="text-sm text-gray-600">monitoring</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-purple-600">Competitor</div>
                    <div className="text-sm text-gray-600">tracking</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-orange-600">Actionable</div>
                    <div className="text-sm text-gray-600">insights</div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/register"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
              >
                Start Free Trial
                <span className="ml-2">▶️</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="py-20 bg-gray-50" id="what-is-geo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What is GEO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generative Engine Optimization (GEO) is the new frontier of digital visibility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">From SEO to GEO: The Evolution</h3>
              <p className="text-lg text-gray-600 mb-4">
                While SEO helped you rank in Google search results, <strong className="text-gray-900">GEO ensures AI systems recommend your brand</strong> when users ask questions.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Think about it: When someone asks ChatGPT "What's the best CRM for startups?" or "Recommend a restaurant in London" - <strong className="text-gray-900">is YOUR business mentioned?</strong>
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">ChatGPT</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Claude</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Gemini</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Perplexity</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Copilot</span>
              </div>
              
              <p className="text-gray-600 mb-8">
                These AI systems are becoming the primary way people discover products and services.
              </p>
              
              <Link 
                href="#how-geo-works"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Learn How It Works
                <span className="ml-2">↓</span>
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">GEO Architecture</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">AI Training Data</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Knowledge Graph</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Context Understanding</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Recommendation Engine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The AI Revolution is Here</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't get left behind. AI is reshaping how customers find businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <div className="text-5xl font-bold text-orange-500 mb-2">37%</div>
              <p className="text-gray-600">of product searches now start in AI assistants</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-5xl font-bold text-orange-500 mb-2">60M+</div>
              <p className="text-gray-600">daily active ChatGPT users making decisions</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-5xl font-bold text-orange-500 mb-2">200%</div>
              <p className="text-gray-600">year-over-year growth in AI-powered searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* How GEO Works Section */}
      <section className="py-20 bg-gray-50" id="how-geo-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How GEO Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Content Structure</h3>
              <p className="text-gray-600 mb-4">
                AI systems prefer well-structured, authoritative content with clear facts and citations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Clear headings and sections
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Factual, cited information
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Structured data markup
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Knowledge Graph</h3>
              <p className="text-gray-600 mb-4">
                Build connections between your brand and relevant topics in AI training data.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Wikipedia presence
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Academic citations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  News mentions
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Authority Signals</h3>
              <p className="text-gray-600 mb-4">
                AI systems trust authoritative sources more than promotional content.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Third-party reviews
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Industry publications
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Expert endorsements
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700">
              Unlike SEO, GEO isn't about keywords - it's about <strong className="text-gray-900">context, credibility, and connections</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Platform Features</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features List */}
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-AI Analysis</h3>
                  <p className="text-gray-600">
                    Check your visibility across ChatGPT, Claude, Perplexity, and other major AI systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600">
                    Track your visibility score over time and get instant alerts when AI systems update their knowledge about your brand.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitor Analysis</h3>
                  <p className="text-gray-600">
                    Compare your AI visibility with competitors and identify opportunities to improve your presence.
                  </p>
                </div>
              </div>
            </div>
            
            {/* How It Works */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">How It Works</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-3">1</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Enter Your Brand</h4>
                  <p className="text-gray-600">Type your company or product name</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-3">2</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">AI Analysis</h4>
                  <p className="text-gray-600">We check multiple AI systems</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-3">3</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Get Insights</h4>
                  <p className="text-gray-600">Receive detailed report with recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate AI Search?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Get your free AI visibility report and discover how to improve your presence across all major AI platforms.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0"
              placeholder="Enter your email"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Free Report
            </button>
          </div>
          
          <p className="text-sm mt-4 opacity-75">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}