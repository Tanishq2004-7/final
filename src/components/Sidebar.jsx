"use client"

import { useState } from "react"

const Sidebar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === new Date().getDate() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getFullYear() === new Date().getFullYear()

      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center text-sm rounded-full cursor-pointer hover:bg-cyan-100 ${
            isToday ? "bg-cyan-500 text-white" : "text-gray-700"
          }`}
        >
          {day}
        </div>,
      )
    }

    return days
  }

  return (
    <div className="space-y-6">
      {/* Calendar Widget */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="w-8 h-8 flex items-center justify-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Destinations</h3>
        <div className="space-y-3">
          {[
            { name: "Bali, Indonesia", count: "234 stories" },
            { name: "Tokyo, Japan", count: "189 stories" },
            { name: "Paris, France", count: "156 stories" },
            { name: "New York, USA", count: "143 stories" },
            { name: "London, UK", count: "128 stories" },
          ].map((destination, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-800">{destination.name}</p>
                <p className="text-xs text-gray-500">{destination.count}</p>
              </div>
              <button className="text-cyan-500 hover:text-cyan-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-cyan-100 text-sm mb-4">
          Get the latest travel stories and destination guides delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-cyan-600 py-2 rounded-lg font-medium hover:bg-cyan-50 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
