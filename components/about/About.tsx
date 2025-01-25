const About = () => {
  return (
    <section className="relative bg-gray-900 py-16 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Wrapper Container */}
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/349x233"
            alt="Support Image"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Center Column - Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Support and<br />ticketing system
          </h2>
          <p className="text-gray-300 mb-6">
            That dry I Were image waters own bring light subdue Meat she'd upon very
            first cattle evening own grass.
          </p>
          <a
            href="/learn-more"
            className="bg-white text-gray-900 font-medium py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>

        {/* Right Column - Stats */}
        <div className="flex flex-col space-y-6">
          {/* First Stat Row */}
          <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">99%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <img
              src="https://placehold.co/48x48"
              alt="Satisfaction Icon"
              className="w-12 h-12"
            />
          </div>

          {/* Second Stat Row */}
          <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">1.2M</h3>
              <p className="text-gray-600">Play Store Downloads</p>
            </div>
            <img
              src="https://placehold.co/48x48"
              alt="Downloads Icon"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About