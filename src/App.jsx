"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import TravelCard from "./components/TravelCard"
import Hero from "./components/Hero"

const travelStories = [
  {
    id: 1,
    title: "Adventures in the Amazon Rainforest of my dreams",
    image: "/placeholder.svg?height=200&width=300",
    author: "Alex Chen",
    date: "Aug 15, 2024",
    excerpt:
      "Exploring the depths of the Amazon revealed incredible biodiversity and unforgettable experiences with local communities.",
    category: "Adventure",
  },
  {
    id: 2,
    title: "Sunset at Santorini Cliffs",
    image: "/placeholder.svg?height=200&width=300",
    author: "Maria Santos",
    date: "Jul 22, 2024",
    excerpt: "Witnessing the most breathtaking sunset from the iconic blue-domed churches of Santorini.",
    category: "Photography",
  },
  {
    id: 3,
    title: "Mountain Peak Adventures",
    image: "/placeholder.svg?height=200&width=300",
    author: "John Walker",
    date: "Sep 5, 2024",
    excerpt: "Conquering the highest peaks and discovering the serenity that comes with mountain solitude.",
    category: "Hiking",
  },
  {
    id: 4,
    title: "Exploring Ancient Temples",
    image: "/placeholder.svg?height=200&width=300",
    author: "Sarah Kim",
    date: "Aug 30, 2024",
    excerpt: "Journey through time as we explore magnificent ancient temples and their rich cultural heritage.",
    category: "Culture",
  },
  {
    id: 5,
    title: "A Night in Cappadocia",
    image: "/placeholder.svg?height=200&width=300",
    author: "David Miller",
    date: "Sep 12, 2024",
    excerpt: "Floating above the fairy chimneys in a hot air balloon at sunrise in magical Cappadocia.",
    category: "Adventure",
  },
  {
    id: 6,
    title: "Tropical Paradise Found",
    image: "/placeholder.svg?height=200&width=300",
    author: "Emma Johnson",
    date: "Sep 18, 2024",
    excerpt: "Discovering hidden beaches and crystal-clear waters in an untouched tropical paradise.",
    category: "Beach",
  },
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredStories =
    selectedCategory === "All" ? travelStories : travelStories.filter((story) => story.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Hero />

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {["All", "Adventure", "Photography", "Hiking", "Culture", "Beach"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-cyan-500 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-cyan-50 hover:text-cyan-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStories.map((story) => (
                <TravelCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Full Stack Travel Story App</h3>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">E</span>
              </div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">R</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">T</span>
              </div>
            </div>
            <p className="text-gray-300">Share your adventures with the world</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
