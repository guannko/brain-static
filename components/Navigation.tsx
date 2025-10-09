'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand - Original Style */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-black">
              BRAIN
            </span>
            <span className="text-2xl font-normal text-orange-500">
              INDEX
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              How it Works
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* Right Side - Login/Signup */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium flex items-center"
            >
              <span className="mr-2">🔑</span>
              Login
            </Link>
            <Link 
              href="/register" 
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors font-medium flex items-center"
            >
              <span className="mr-2">👤</span>
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-600 transition-all"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#features" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link 
                  href="/login" 
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium flex items-center px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">🔑</span>
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="border border-blue-600 text-blue-600 mx-4 mt-2 px-4 py-2 rounded hover:bg-blue-50 transition-colors font-medium text-center flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">👤</span>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}