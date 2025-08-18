import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Main Image */}
            <img
              src="https://z-p3-scontent.fcmb9-1.fna.fbcdn.net/v/t1.6435-9/89519288_1356375951228087_8887066421016657920_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eNbiMFla0esQ7kNvwF6qmDN&_nc_oc=AdlNNTeSEqYQ_0OygnQUlJ3IHpLuG20YfU2xj435NrRvJ7J_hdI2A4iKwCNP6URE-Mw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb9-1.fna&_nc_gid=IHRB792m7pQ_BUjZ6XKM6g&oh=00_AfWAkVLG-q8D9viAWcw5OeS4QBxWvEThPBWsueqdVwz7cA&oe=68CA1E8F"
              alt="ABC Agencies - Skilled Manpower Recruitment"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />

            {/* Experience Badge - Clean & Bold */}
            <div className="absolute -bottom-6 left-6 bg-white text-center text-blue-700 px-6 py-3 rounded-xl shadow-lg border-2 border-blue-200 font-bold flex items-center gap-2 min-w-36">
              <span className="text-2xl">20+</span>
              <span className="text-sm leading-tight">Years of Excellence</span>
            </div>

            {/* Airplane Icon - Global Reach */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-2xl transform rotate-12 hover:rotate-0 transition duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
              ABC Agencies (PVT) LTD
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            With over <span className="font-bold text-blue-700">20 years</span>{" "}
            of trusted service, we are Sri Lanka’s leading manpower agency,
            dedicated to connecting skilled professionals with rewarding
            opportunities abroad.
          </p>

          <p className="text-gray-600 text-base md:text-lg">
            Our commitment to transparency, comprehensive training, and
            personalized support has made us the preferred choice for families,
            employers, and overseas institutions across the Gulf, Asia, and
            beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => navigate("/about")}
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Learn About Us
            </button>
            <button
              onClick={() => navigate("/services")}
              className="cursor-pointer border-2 border-blue-600 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-900 px-7 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
