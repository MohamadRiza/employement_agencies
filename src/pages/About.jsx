import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            About <span className="text-yellow-200">ABC Agencies (PVT) LTD</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90">
            With over 20 years of excellence, we are Sri Lanka’s trusted partner in global manpower solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="/images/about-team.jpg"
              alt="ABC Agencies Team"
              className="rounded-2xl shadow-xl w-full object-cover h-80 lg:h-96"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded in 2003, <strong>ABC Agencies (PVT) LTD</strong> began with a simple mission: to connect skilled Sri Lankan professionals with rewarding opportunities abroad — safely, ethically, and successfully.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we are one of the most trusted manpower agencies in the country, with over <span className="font-semibold text-green-600">20+ years of service</span> and more than <span className="font-semibold text-green-600">50,000 successful placements</span> across the Gulf, Asia, and beyond.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower Sri Lankan professionals with global opportunities through ethical recruitment, comprehensive training, and end-to-end support — ensuring dignity, safety, and success abroad.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and respected manpower agency in Sri Lanka, recognized for excellence, integrity, and transformative impact in international employment.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-green-600">ABC Agencies?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We go beyond recruitment — we build futures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Ethical & Legal Compliance",
              description: "We follow full SLBFE and international regulations to ensure safe, legal, and transparent placements.",
            },
            {
              title: "Comprehensive Training",
              description: "Every candidate receives training in language, job skills, cultural awareness, and rights.",
            },
            {
              title: "Global Reach",
              description: "We place professionals in Qatar, UAE, Saudi Arabia, Malaysia, Singapore, and more.",
            },
            {
              title: "Dedicated Support",
              description: "From visa processing to pre-departure guidance, we support you every step of the way.",
            },
            {
              title: "Trusted by Thousands",
              description: "Over 50,000 families and employers have trusted us with their staffing needs.",
            },
            {
              title: "Transparent Process",
              description: "No hidden fees. Clear communication. Honest expectations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
              Whether you're seeking employment abroad or hiring skilled staff, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us Today
            </button>
            <button
              onClick={() => (window.location.href = "/services")}
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;