import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const granules = [
  { name: "Natural Granules", color: "#dfbd85", image: "/images/natural-granules.png" },
  { name: "Blue Granules", color: "#2455a4", image: "/images/blue-granules.png" },
  { name: "Red Granules", color: "#ed3535", image: "/images/red-granules.png" },
  { name: "Black Granules", color: "#252525", image: "/images/black-granules.png" },
  { name: "Grey Granules", color: "#9ca3af", image: "/images/grey-granules.png" },
  { name: "Pink Granules", color: "#dc2878", image: "/images/pink-granules.png" },
  { name: "Orange Granules", color: "#ff842f", image: "/images/orange-granules.png" },
  { name: "Yellow Granules", color: "#edc73e", image: "/images/yellow-granules.png" },
  { name: "Green Granules", color: "#38a653", image: "/img/about.png" },
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
                    className={`dp-colour-dot ${
                      active === index ? "active" : ""
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

              <span className="sub-heading">
                <span className="heading-dot"></span>
                About Devansh Polymers
              </span>

                          <h2 className="heading">
                              Quality Polymers.
                              <br />
                              <span>Better Solutions.</span>
                              <br />
                              Stronger Tomorrow.
                          </h2>

              <p>
                At Devansh Polymers, we are committed to
                delivering quality plastic granules that
                meet the diverse needs of modern
                manufacturing industries.
              </p>

              <p>
                With a focus on consistency, quality and
                reliability, we provide polymer solutions
                designed to support efficient production
                and long-term business growth.
              </p>

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