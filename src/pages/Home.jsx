import React from 'react'
import {Link} from 'react-router-dom'

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

const products = [
    {
        id: 1,
        title: "PP Dark Blue Plastic Granules",
        images: [
            "/img/prod-1.1.png",
            "/img/prod-1.png",
        ],
        description:
            "Quality PP granules for diverse plastic manufacturing and industrial applications.",
        link: "/products/pp-dark-blue-plastic-granules",
    },
    {
        id: 2,
        title: "ABS Green Plastic Granules",
        images: [
            "/img/prod-1.1.png",
            "/img/prod-1.png",
        ],
        description:
            "Green ABS plastic granules suitable for various industrial manufacturing needs.",
        link: "/products/abs-green-plastic-granules",
    },
    {
        id: 3,
        title: "ABS Natural Plastic Granules",
        images: [
            "/img/prod-1.1.png",
            "/img/prod-1.png",
        ],
        description:
            "Natural ABS plastic granules for versatile manufacturing and plastic production.",
        link: "/products/abs-natural-plastic-granules",
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

          {/* product-sec start */}
          <section className="dp-products-section">
              <div className="container">

                  {/* Section Heading */}

                  <div className="dp-products-heading text-center">
                      <h2 className="heading">Our Products</h2>

                      <p>
                          At Devansh Polymers, we offer a wide range of PP
                          and ABS plastic granules to meet diverse industrial
                          requirements. Backed by robust infrastructural
                          facilities and a skilled team, we focus on delivering
                          quality products and reliable polymer solutions to
                          our valued customers. Our product range includes
                          the following:
                      </p>
                  </div>

                  {/* Product Cards */}

                  <div className="row g-4">

                      {products.map((product) => (
                          <div
                              className="col-lg-4 col-md-6 col-12"
                              key={product.id}
                          >
                              <div className="dp-product-image">
                                  <Link to={product.link}>

                                      {product.images.map((image, index) => (
                                          <img
                                              key={index}
                                              src={image}
                                              alt={`${product.title} - View ${index + 1}`}
                                              className={`dp-product-slide dp-slide-${index + 1}`}
                                              loading="lazy"
                                          />
                                      ))}

                                  </Link>
                              </div>
                          </div>
                      ))}

                  </div>
              </div>
          </section>
          {/* product-sec end */}

         

         
    </>
  )
}

export default Home


// https://www.markandeypolymers.com/
// https://vanshikaplastic.com/
// https://www.nitpol.net/