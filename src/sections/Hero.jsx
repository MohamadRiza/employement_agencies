import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://careers.srilankan.com/group/images/cabin-crew.jpg",
    "https://i.ytimg.com/vi/C882r8LaDj8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/qeMbcHDzae0/maxresdefault.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Background Image Slider */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Committed To Excellence <br />
          <span className="text-blue-400">For 40+ Years</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          With over 40 years of expertise, we are dedicated to providing
          exceptional service in immigration consulting and global staffing
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
            onClick={() => navigate("/contect")}
          >
            Start Your Journey
          </button>
          <button
            className="border border-white text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentImageIndex ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrentImageIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
