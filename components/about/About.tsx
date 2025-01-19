const About = () => {
  return (
    <section>
      {/* Background Image */}
      <div>
        <img
          src="https://placehold.co/1663x348"
          alt="Background"
        />
        <div></div>
      </div>

      <div>
        <div>
          {/* Left Column - Image */}
          <div>
            <img
              src="https://placehold.co/349x233"
              alt="Support Image"
            />
          </div>

          {/* Center Column - Content */}
          <div>
            <h2>
              Support and<br />ticketing system
            </h2>
            <p>
              That dry I Were image waters own bring light subdue Meat she'd upon very 
              first cattle evening own grass.
            </p>
            <a href="/learn-more">
              Learn More
            </a>
          </div>

          {/* Right Column - Stats Box */}
          <div>
            {/* First Stat Row */}
            <div>
              <div>
                <h3>99%</h3>
                <p>Client Satisfaction</p>
              </div>
              <img 
                src="https://placehold.co/48x48" 
                alt="Satisfaction Icon" 
              />
            </div>

            {/* Second Stat Row */}
            <div>
              <img 
                src="https://placehold.co/48x48" 
                alt="Downloads Icon" 
              />
              <div>
                <h3>1.2M</h3>
                <p>Play Store Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
