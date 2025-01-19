const About = () => {
  return (
    <section className="relative py-16 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/OmkjNSm6aEdwlXovJ7nPC4qOUg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column - Image */}
          <div>
            <img
              src="https://framerusercontent.com/images/qrPzrzKgD7wd3ty7GpeQ8i313s.png"
              alt="Support Image"
              className="w-full rounded-lg"
            />
          </div>

          {/* Center Column - Content */}
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Support and<br />ticketing system
            </h2>
            <p className="text-gray-200 mb-8">
              That dry I Were image waters own bring light subdue Meat she'd upon very 
              first cattle evening own grass.
            </p>
            <a
              href="/learn-more"
              className="inline-flex px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition shadow-lg"
            >
              Learn More
            </a>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="text-gray-200">Client satisfaction</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl font-bold">1.2M</h3>
              <p className="text-gray-200">Play Store download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 