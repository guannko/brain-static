'use client'

import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Requesting report for:', email)
      // Here we'll integrate with actual API
      setEmail('')
    }
  }

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Dominate AI Search?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Get your free AI visibility report and discover how to improve your presence across all major AI platforms.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0"
            placeholder="Enter your email"
            required
          />
          <button 
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Free Report
          </button>
        </form>
        
        <p className="text-sm mt-4 opacity-75">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}