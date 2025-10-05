export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            🧠 Brain Index GEO Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Next.js Migration Complete ✅
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">🏗️ Infrastructure</h3>
              <p className="text-gray-600">Next.js 14 + TypeScript + Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">🔧 Build Status</h3>
              <p className="text-green-600 font-medium">All Systems Ready</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">🚀 Deployment</h3>
              <p className="text-blue-600 font-medium">Vercel Production</p>
            </div>
          </div>
          <div className="mt-12">
            <a 
              href="/index.html" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Original Site
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}