
import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

const links = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Products", url: "/products" },
    { title: "Industries", url: "/industries" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "/contact" },
];

const Icon = ({ name, size = 17 }) => {
    const paths = {
        phone: (
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72l.45 2.81a2 2 0 0 1-.57 1.7L8.1 11a16 16 0 0 0 4.9 4.9l1.77-1.78a2 2 0 0 1 1.7-.57l2.81.45A2 2 0 0 1 22 16.92Z" />
        ),
        mail: (
            <>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 6 10 7 10-7" />
            </>
        ),
        location: (
            <>
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
            </>
        ),
        search: (
            <>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
            </>
        ),
        menu: (
            <path d="M4 6h16M4 12h16M4 18h16" />
        ),
        close: (
            <path d="M5 5 19 19M19 5 5 19" />
        ),
        arrow: (
            <path d="M5 12h14m-6-6 6 6-6 6" />
        ),
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {paths[name]}
        </svg>
    );
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="dp-header">

            {/* TOP CONTACT BAR */}
            <div className="dp-topbar">
                <div className="dp-container dp-top-inner">
                    <div className="dp-contact-info">
                        <a href="tel:+910000000000">
                            <Icon name="phone" />
                            <span>+91 XXXXX XXXXX</span>
                        </a>

                        <span className="dp-top-divider" />

                        <span className="dp-address">
                            <Icon name="location" />
                            <span>Delhi, India</span>
                        </span>

                        <span className="dp-top-divider" />

                        <a href="mailto:info@example.com">
                            <Icon name="mail" />
                            <span>info@example.com</span>
                        </a>
                    </div>


                    <div className="dp-social">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>

                        <a href="#" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </div>

                   
                </div>
            </div>

            {/* MAIN NAVIGATION */}
            <div className="dp-navbar">
                <div className="dp-container dp-nav-inner">

                    {/* COMPANY LOGO */}
                    <a href="/" className="dp-logo">
                        <img src="/img/logo.jpg" alt="Devansh Polymers" className="img-fluid" />
                        
                    </a>

                    {/* NAV LINKS */}
                    <nav
                        id="dp-main-menu"
                        className={`dp-nav-links ${menuOpen ? "active" : ""}`}
                        aria-label="Main navigation"
                    >
                        {links.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* ACTIONS */}
                    <div className="dp-actions">
                        <button
                            className="dp-search-btn"
                            aria-label="Search"
                            aria-expanded={searchOpen}
                            onClick={() => setSearchOpen(!searchOpen)}
                        >
                            <Icon name="search" size={20} />
                        </button>

                        <a href="/contact" className="dp-quote-btn">
                            Get a Quote
                            <Icon name="arrow" size={17} />
                        </a>

                        <button
                            className="dp-menu-toggle"
                            aria-label="Toggle menu"
                            aria-controls="dp-main-menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <Icon name={menuOpen ? "close" : "menu"} size={25} />
                        </button>
                    </div>
                </div>

                {searchOpen && (
                    <form
                        className="dp-search-panel dp-container"
                        action="/search"
                        method="get"
                        role="search"
                    >
                        <input
                            name="q"
                            type="search"
                            placeholder="Search products..."
                            aria-label="Search products"
                            autoFocus
                        />
                        <button type="submit">Search</button>
                    </form>
                )}
            </div>
        </header>
    );
}
