import React from "react";

const Services = () => {
  const serviceCards = [
    {
      title: "Skilled Domestic Workers",
      description:
        "We train and place qualified housemaids, nannies, and caregivers in private homes across the Middle East, Europe, and Asia with full legal compliance.",
      icon: "👩‍🍳",
      delay: "0s",
    },
    {
      title: "Professional Stewards & Cooks",
      description:
        "Supplying experienced stewards and professional cooks for private households, yachts, and hospitality sectors worldwide.",
      icon: "🍽️",
      delay: "0.2s",
    },
    {
      title: "Certified Caregivers",
      description:
        "Our caregivers receive international-standard training and are placed in senior care, medical, and home support roles globally.",
      icon: "🩺",
      delay: "0.4s",
    },
    {
      title: "Reliable Staffing Solutions",
      description:
        "We connect families and employers with trustworthy, culturally matched domestic staff, ensuring seamless integration and long-term satisfaction.",
      icon: "🤝",
      delay: "0.6s",
    },
    {
      title: "Work Visa Processing",
      description:
        "Assistance with full work visa processing for domestic staff, hospitality workers, and skilled professionals traveling to Gulf countries and beyond.",
      icon: "🛂",
      delay: "0.8s",
    },
    {
      title: "Study Abroad Guidance",
      description:
        "Support for individuals seeking education opportunities abroad, including visa application, documentation, and placement in accredited institutions.",
      icon: "🎓",
      delay: "1.0s",
    },
    {
      title: "Visit & Family Visas",
      description:
        "We help families and individuals apply for visit visas to join relatives or travel for tourism in countries like Saudi Arabia, UAE, and Qatar.",
      icon: "✈️",
      delay: "1.2s",
    },
    {
      title: "Pre-Departure Training",
      description:
        "Comprehensive training in language, cultural awareness, job skills, and legal rights to prepare candidates for successful international employment.",
      icon: "📘",
      delay: "1.4s",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our <span className="text-blue-600">Services</span> at ABC Agencies (PVT) LTD
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
          We specialize in training, placing, and supporting skilled professionals for international employment, 
          while providing end-to-end visa assistance for work, study, and family visits.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-8">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            style={{
              animationDelay: card.delay,
              opacity: 0,
              animation: `fadeInUp 0.6s ease forwards`,
            }}
          >
            {/* Icon */}
            <div className="flex justify-center pt-8 text-5xl">{card.icon}</div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;