const TravelCard = ({ story }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={story.image || "/placeholder.svg"}
          alt={story.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">{story.category}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{story.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{story.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {story.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{story.author}</p>
              <p className="text-xs text-gray-500">{story.date}</p>
            </div>
          </div>

          <button className="text-cyan-500 hover:text-cyan-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TravelCard
