import React from 'react'

import About from '../components/About'

import {
    MapPin,
    CalendarDays,
    Factory,
    Boxes,
    ShieldCheck,
    Users,
} from "lucide-react";

const stripData = [
    {
        icon: <CalendarDays size={19} />,
        text: "Established in 2010",
    },
    {
        icon: <Factory size={19} />,
        text: "Manufacturer & Supplier",
    },
    {
        icon: <Boxes size={19} />,
        text: "PP & ABS Plastic Granules",
    },
    {
        icon: <MapPin size={19} />,
        text: "Based in Delhi, India",
    },
    {
        icon: <ShieldCheck size={19} />,
        text: "Trusted Quality & Reliable Supply",
    },
    {
        icon: <Users size={19} />,
        text: "Customer-Focused Approach",
    },
];

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

          {/* strip start */}
          <section className="dp-top-strip">
              <div className="dp-strip-track">

                  {[0, 1].map((group) => (
                      <div
                          className="dp-strip-group"
                          key={group}
                          aria-hidden={group === 1}
                      >
                          {stripData.map((item, index) => (
                              <div className="dp-strip-item" key={index}>
                                  <span className="dp-strip-icon">
                                      {item.icon}
                                  </span>

                                  <span className="dp-strip-text">
                                      {item.text}
                                  </span>
                              </div>
                          ))}
                      </div>
                  ))}

              </div>
          </section>
          {/* strip end */}
      
          {/* about start */}
          <About/>
          {/* about end */}

         

         
    </>
  )
}

export default Home
