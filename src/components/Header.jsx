"use client"

import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-cyan-600">TravelStory</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
              Stories
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
              Destinations
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
              About
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-cyan-600 transition-colors">Sign In</button>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
              Share Story
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Stories
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                Destinations
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button className="text-gray-600 hover:text-cyan-600 transition-colors text-left">Sign In</button>
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                  Share Story
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
