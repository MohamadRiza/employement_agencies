import React from "react";

const OurAwards = () => {
  const awards = [
    {
      title: "Best Manpower Agency 2023",
      description:
        "Awarded by Sri Lanka HR Excellence Awards for outstanding service in overseas recruitment.",
      image:
        "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "ISO 9001:2015 Certified",
      description:
        "Recognized for maintaining international standards in quality management and service delivery.",
      image:
        "https://images.pexels.com/photos/4102755/pexels-photo-4102755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Top Employer Award",
      description:
        "Honored by Asian Recruitment Council for ethical practices and employee satisfaction.",
      image:
        "https://images.pexels.com/photos/4102755/pexels-photo-4102755.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Government Licensed Agency",
      description:
        "Fully licensed and registered with the Sri Lanka Bureau of Foreign Employment (SLBFE).",
      image:
        "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-l from-gray-300 to-gray-50 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-t from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>

      {/* Heading */}
      <div className="relative max-w-4xl mx-auto text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our <span className="text-blue-600">Awards & Achievements</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Celebrating milestones of excellence, integrity, and leadership in
          global manpower services.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Vertical line */}
        <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-300 to-transparent rounded"></div>

        <div className="space-y-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-8 relative ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="800"
            >
              {/* Award Image (Circle Medal Style) */}
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-yellow-400 bg-white relative z-10 flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Text */}
              <div className="sm:w-1/2 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {award.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* License Badge */}
      <div className="text-center mt-24 relative z-10">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 rounded-full font-medium shadow-md hover:shadow-lg hover:from-blue-200 hover:to-blue-100 transition duration-300">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span>
            Officially Licensed by SLBFE | License No:{" "}
            <strong className="text-blue-700">ABC-12345</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurAwards;
