import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <footer
      className="bg-gray-900 text-white py-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-6">
        {/* Flex layout: stacked on mobile, horizontal on md+ */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left: Logo & Description */}
          <div className="flex-1 min-w-[220px] text-center md:text-left">
            <h3 className="mb-4 font-semibold text-lg">About Us</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
              alt="ABC PVT LTD Logo"
              className="w-28 h-auto mx-auto md:mx-0 mb-4"
            />
            <div className="text-gray-300 text-base leading-relaxed">
              <p className="mb-3">
                ABC PVT LTD is a leading manpower agency in Sri Lanka, connecting skilled professionals with top employers.
              </p>
              <button
                onClick={handleReadMore}
                className="text-cyan-400 hover:text-cyan-300 transition duration-200 text-sm font-medium focus:outline-none focus:underline flex items-center justify-center md:justify-start group mx-auto md:mx-0"
                aria-label="Learn more about ABC PVT LTD"
              >
                Read more
                <span className="ml-1 transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="md:w-[220px] flex-shrink-0 text-center md:text-left">
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition duration-200 text-base focus:outline-none focus:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div className="flex-1 min-w-[220px] text-center md:text-right">
            <h3 className="mb-4 font-semibold text-lg">Contact Us</h3>
            <div className="text-gray-300 text-base space-y-1">
              <p>ABC PVT LTD</p>
              <p>No: 00, Colombo Road, Narammala, Sri Lanka</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+94123456789"
                  className="text-cyan-400 hover:underline"
                >
                  0123456789
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:agency@email.com"
                  className="text-cyan-400 hover:underline"
                >
                  agency@email.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ABC PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;