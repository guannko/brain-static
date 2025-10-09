'use client'

interface QuickAnalysisProps {
  className?: string
}

export default function QuickAnalysis({ className = "" }: QuickAnalysisProps) {
  const handleAnalyze = () => {
    const brandInput = document.getElementById('brandInput') as HTMLInputElement
    if (brandInput?.value) {
      console.log('Analyzing brand:', brandInput.value)
      // Here we'll integrate with actual API
    }
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 ${className}`}>
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
          onClick={handleAnalyze}
        >
          🔍 Check AI Visibility
        </button>
        <p className="text-center text-gray-500 text-sm">
          Free analysis • No credit card required
        </p>
      </div>
    </div>
  )
}