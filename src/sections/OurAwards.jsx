import React from "react";

const OurAwards = () => {
  const awards = [
    {
      title: "Best Manpower Agency 2023",
      description: "Awarded by Sri Lanka HR Excellence Awards for outstanding service in overseas recruitment.",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "ISO 9001:2015 Certified",
      description: "Recognized for maintaining international standards in quality management and service delivery.",
      image: "https://images.pexels.com/photos/4102755/pexels-photo-4102755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Top Employer Award",
      description: "Honored by Asian Recruitment Council for ethical practices and employee satisfaction.",
      image: "https://images.pexels.com/photos/4102755/pexels-photo-4102755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Government Licensed Agency",
      description: "Fully licensed and registered with the Sri Lanka Bureau of Foreign Employment (SLBFE).",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-20 from-gray-400 to-gray-100 bg-gradient-to-tl">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our <span className="text-blue-600">Awards & Achievements</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Proud recipients of prestigious recognitions for excellence, integrity, and leadership in global manpower services.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-6 lg:px-8 max-w-6xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
          >
            {/* Award Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: License Badge */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium shadow-md cursor-pointer hover:bg-blue-200 transition duration-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span>Officially Licensed by SLBFE | License No: ABC-12345</span>
        </div>
      </div>
    </section>
  );
};

export default OurAwards;