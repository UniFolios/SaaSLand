import Image from 'next/image';

const About = () => {
  return (
    <section className="relative py-16 bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/500x300"
          alt="Background"
          className="w-full h-full object-cover"
          width={500}
          height={300}
          quality={75}
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column - Image */}
          <div>
            <Image
              src="https://placehold.co/349x233"
              alt="Support Image"
              className="w-full rounded-lg"
              width={349}
              height={233}
              quality={75}
            />
          </div>

          {/* Center Column - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Support and<br />ticketing system
            </h2>
            <p className="text-gray-200 mb-8">
              That dry I Were image waters own bring light subdue Meat she&apos;d upon very 
              first cattle evening own grass.
            </p>
            <a
              href="/learn-more"
              className="inline-flex px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition shadow-lg"
            >
              Learn More
            </a>
          </div>

          {/* Right Column - Stats Box */}
          <div className="bg-white/10 backdrop-blur-sm p-6 space-y-6">
            {/* First Stat Row */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-4xl font-bold text-white">99%</h3>
                <p className="text-gray-200">Client Satisfaction</p>
              </div>
              <Image 
                src="https://placehold.co/48x48" 
                alt="Satisfaction Icon" 
                className="w-12 h-12"
                width={48}
                height={48}
              />
            </div>

            {/* Second Stat Row */}
            <div className="flex items-start justify-between">
              <Image 
                src="https://placehold.co/48x48" 
                alt="Downloads Icon" 
                className="w-12 h-12"
                width={48}
                height={48}
              />
              <div className="text-right">
                <h3 className="text-4xl font-bold text-white">1.2M</h3>
                <p className="text-gray-200">Play Store Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 