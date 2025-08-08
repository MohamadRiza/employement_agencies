import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-300 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Why Choose <span className="text-blue-600">ABC Agencies (PVT) LTD</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          With decades of trusted service, we deliver tailor-made manpower solutions that prioritize integrity, quality, and long-term success.
        </p>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-8 mb-20">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">20+</div>
          <h3 className="text-xl font-semibold text-gray-800">Years of Experience</h3>
          <p className="text-gray-500 mt-2">Trusted excellence in global recruitment</p>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">50,000+</div>
          <h3 className="text-xl font-semibold text-gray-800">Placements</h3>
          <p className="text-gray-500 mt-2">Skilled professionals placed worldwide</p>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">98%</div>
          <h3 className="text-xl font-semibold text-gray-800">Client Satisfaction</h3>
          <p className="text-gray-500 mt-2">Happy families and employers globally</p>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">15+</div>
          <h3 className="text-xl font-semibold text-gray-800">Countries</h3>
          <p className="text-gray-500 mt-2">From Gulf to Asia, Europe & beyond</p>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Feature 1 */}
        <div className="flex gap-5 items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Well-Trained Employees</h3>
            <p className="text-gray-600 mt-2">
              Every candidate undergoes rigorous training in job skills, language, cultural awareness, and legal rights to ensure success abroad.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-5 items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.006z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Verified & Trusted Process</h3>
            <p className="text-gray-600 mt-2">
              We follow full legal compliance and transparent procedures, ensuring safe, secure, and ethical placements.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-5 items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Dedicated Support Team</h3>
            <p className="text-gray-600 mt-2">
              Our experienced consultants guide you from application to departure — and even after placement.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-5 items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">End-to-End Visa Assistance</h3>
            <p className="text-gray-600 mt-2">
              From documentation to final approval, we handle all visa processes with speed, accuracy, and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;