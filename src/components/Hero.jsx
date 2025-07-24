const Hero = () => {
  return (
    <div className="relative mb-12 rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Capture Your
          <br />
          <span className="text-cyan-200">Journeys</span>
        </h1>
        <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
          Share your travel stories and inspire others to explore the world. Connect with fellow adventurers and
          discover amazing destinations.
        </p>
        <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-lg">
          Join Adventure
        </button>
      </div>
    </div>
  )
}

export default Hero
