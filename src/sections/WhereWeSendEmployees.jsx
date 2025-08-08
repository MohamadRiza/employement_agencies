import React from "react";

const WhereWeSendEmployees = () => {
  const countries = [
    {
      name: "United Arab Emirates",
      flag: "🇦🇪",
      capital: "Abu Dhabi",
      visaType: "Work & Family Visas",
      jobs: "Domestic Workers, Hospitality, Security",
      info: "High demand for skilled domestic staff and service professionals.",
    },
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      capital: "Riyadh",
      visaType: "Work & Visit Visas",
      jobs: "Caregivers, Cooks, Drivers",
      info: "We support legal employment with pre-departure training and documentation.",
    },
    {
      name: "Qatar",
      flag: "🇶🇦",
      capital: "Doha",
      visaType: "Work Permits",
      jobs: "Stewards, Housemaids, Nannies",
      info: "Compliant placements in private households and corporate sectors.",
    },
    {
      name: "Kuwait",
      flag: "🇰🇼",
      capital: "Kuwait City",
      visaType: "Work Visa",
      jobs: "Domestic Helpers, Caregivers",
      info: "Trusted partner for safe and verified domestic worker placements.",
    },
    {
      name: "Oman",
      flag: "🇴🇲",
      capital: "Muscat",
      visaType: "Employment Visa",
      jobs: "Housekeepers, Cooks",
      info: "Ethical recruitment and full visa processing support.",
    },
    {
      name: "Bahrain",
      flag: "🇧🇭",
      capital: "Manama",
      visaType: "Work Visa",
      jobs: "Nannies, Drivers, Stewards",
      info: "Streamlined visa and onboarding process for all skill levels.",
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      capital: "London",
      visaType: "Care & Study Visas",
      jobs: "Caregivers, Students, Support Workers",
      info: "Support for skilled caregivers and international students.",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      capital: "Ottawa",
      visaType: "Study & Work Permits",
      jobs: "Caregivers, Students, Live-in Helpers",
      info: "Guidance through LMIA, work permits, and permanent residency pathways.",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      capital: "Canberra",
      visaType: "Work & Study Visas",
      jobs: "Support Workers, Students",
      info: "Assistance with skilled migration and caregiver programs.",
    },
  ];

  return (
    <section
      className="py-20 bg-cover bg-fixed bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
          Where We Send <span className="text-blue-300">Employees</span> Worldwide
        </h2>
        <p className="mt-6 text-lg text-gray-100 max-w-4xl mx-auto drop-shadow-sm">
          ABC Agencies (PVT) LTD supports skilled professionals in securing legal employment, 
          study opportunities, and family visits across the globe.
        </p>
      </div>

      {/* Country Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-8 lg:opacity-90">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:bg-blue-100"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Flag & Country Name */}
            <div className="text-center py-6 bg-gradient-to-r from-blue-50 to-indigo-100 border-b">
              <div className="text-6xl mb-2">{country.flag}</div>
              <h3 className="text-2xl font-bold text-gray-800">{country.name}</h3>
              <p className="text-sm text-gray-600">Capital: {country.capital}</p>
            </div>

            {/* Details */}
            <div className="p-6 space-y-3 text-center">
              <div>
                <span className="font-semibold text-gray-700">Visa Type:</span>
                <p className="text-gray-600 text-sm">{country.visaType}</p>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Common Jobs:</span>
                <p className="text-gray-600 text-sm">{country.jobs}</p>
              </div>

              <div>
                <span className="font-semibold text-gray-700">Info:</span>
                <p className="text-gray-600 text-sm">{country.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhereWeSendEmployees;