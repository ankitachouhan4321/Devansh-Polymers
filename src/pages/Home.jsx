import React from 'react'

import About from '../components/About'

const Home = () => {
  return (
    <>
          {/* hero start */}
          <section className="dp-hero">

              {/* Background Video */}
              <video
                  className="dp-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/hero-poster.jpg"
              >
                  <source
                      src="/img/hero.mp4"
                      type="video/mp4"
                  />
              </video>

              {/* Dark Overlay */}
              <div className="dp-hero-overlay"></div>

              {/* Animated Company Name */}
              <div className="dp-hero-content">
                  <div className="dp-hero-title-wrap">
                      <h1 className="dp-hero-title">
                          <span className="dp-reveal">
                              DEVANSH
                          </span>
                          <span className="dp-reveal dp-reveal-delay">
                              POLYMERS
                          </span>
                      </h1>
                  </div>
              </div>

          </section>
          {/* hero end */}

          {/* about start */}
          <About/>
          {/* about end */}
    </>
  )
}

export default Home
