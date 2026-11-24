import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const granules = [
  { name: "Natural Granules", color: "#dfbd85", image: "/img/about1.png" },
  { name: "Blue Granules", color: "#2455a4", image: "/img/about2.png" },
  { name: "Red Granules", color: "#ed3535", image: "/img/about3.png" },
  { name: "Black Granules", color: "#252525", image: "/img/about4.png" },
  { name: "Grey Granules", color: "#9ca3af", image: "/img/about5.png" },
  { name: "Pink Granules", color: "#dc2878", image: "/img/about6.png" },
  { name: "Orange Granules", color: "#ff842f", image: "/img/about7.png" },
  { name: "Yellow Granules", color: "#edc73e", image: "/img/about8.png" },
  { name: "Green Granules", color: "#38a653", image: "/img/about9.png" },
];

const About = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % granules.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="dp-about">
      <div className="container">
        <div className="row align-items-center">

          <span className="sub-heading text-center">

            About Devansh Polymers
          </span>

          <h2 className="heading text-center">
            Shaping the Future of Polymers
          </h2>

          <p className="text-center" >
            Delhi, India – Manufacturer and supplier
          </p>
          
<br/>
          {/* Left Side */}
          <div className="col-lg-6">
            <div className="dp-granule-visual">

              <div className="dp-granule-orbit">

                {granules.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show ${item.name}`}
                    aria-pressed={active === index}
                    className={`dp-colour-dot ${active === index ? "active" : ""
                      }`}
                    style={{
                      "--angle": `${(360 / granules.length) * index}deg`,
                      "--dot-color": item.color,
                    }}
                    onClick={() => setActive(index)}
                  />
                ))}

                {/* Falling Granules */}
                <div
                  className="dp-falling-granules"
                  aria-hidden="true"
                  style={{
                    "--granule-color": granules[active].color,
                  }}
                >
                  {Array.from({ length: 16 }, (_, index) => (
                    <span
                      key={index}
                      style={{
                        "--delay": `${index * 0.15}s`,
                        "--position": `${(index * 17) % 65 - 32}px`,
                        "--rotation": `${index * 35}deg`,
                      }}
                    />
                  ))}
                </div>

                {/* Product Image */}
                <div className="dp-granule-product">
                  <img
                    key={active}
                    src={granules[active].image}
                    alt={granules[active].name}
                  />
                </div>

              </div>

              {/* Product Navigation */}
              <div className="dp-granule-info">
                <div>
                  <span className="dp-now-showing">
                    EXPLORE OUR MATERIALS
                  </span>

                  <h4 aria-live="polite">
                    {granules[active].name}
                  </h4>
                </div>

                <div className="dp-granule-controls">
                  <button
                    type="button"
                    aria-label="Previous granules"
                    onClick={() =>
                      setActive(
                        (active - 1 + granules.length) %
                        granules.length
                      )
                    }
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    aria-label="Next granules"
                    onClick={() =>
                      setActive(
                        (active + 1) % granules.length
                      )
                    }
                  >
                    →
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="dp-about-content">

             

              <p>
                Established in 2010, Devansh Polymers is a trusted manufacturer and supplier of plastic granules based in Delhi, India. We specialize in PP and ABS plastic granules, offering a wide range of colours and materials to meet the diverse requirements of modern industries.
              </p>

              <p>
                Backed by advanced infrastructure, a skilled team and a strong supply network, we are committed to delivering consistent quality, reliable products and customer satisfaction. Our customer-focused approach helps us understand specific business requirements and provide suitable polymer solutions.
              </p>
              <p>With over a decade of industry experience, we continue to build long-term business relationships through quality, reliability and professional service. At Devansh Polymers, our goal is to support your business growth with dependable plastic granule solutions.</p>

              <div className="dp-about-buttons">
                <Link to="/products" className="main-btn">
                  Explore Products <span>↗</span>
                </Link>

                <Link to="/contact" className="sec-btn">
                  Contact Us
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;