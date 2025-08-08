import React from "react";

const Services = () => {
  const serviceCards = [
    
  {
    title: "Skilled Domestic Workers",
    description:
      "We recruit, train, and legally place experienced housemaids, nannies, and household helpers in homes across the Middle East, Europe, and Asia, ensuring ethical employment standards.",
    image: "https://images.pexels.com/photos/3768123/pexels-photo-3768123.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "0s"
  },
  {
    title: "Professional Stewards & Cooks",
    description:
      "Our agency provides expertly trained stewards and chefs for private homes, luxury yachts, and five-star hospitality venues globally, with culinary and service excellence.",
    image: "https://images.pexels.com/photos/4109132/pexels-photo-4109132.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "0.2s"
  },
  {
    title: "Certified Caregivers",
    description:
      "We place internationally certified caregivers in roles supporting elderly care, individuals with disabilities, and home-based medical support, ensuring compassion and professionalism.",
    image: "https://images.pexels.com/photos/4109145/pexels-photo-4109145.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "0.4s"
  },
  {
    title: "Reliable Staffing Solutions",
    description:
      "We match families and organizations with culturally compatible and background-verified domestic staff to ensure trust, comfort, and lasting placements.",
    image: "https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "0.6s"
  },
  {
    title: "Work Visa Processing",
    description:
      "End-to-end assistance with work visa applications, documentation, and embassy coordination for skilled domestic workers and hospitality professionals.",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "0.8s"
  },
  {
    title: "Study Abroad Guidance",
    description:
      "We provide expert support for students pursuing education abroad—covering admission guidance, student visa processing, and placement in accredited universities.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "1.0s"
  },
  {
    title: "Visit & Family Visas",
    description:
      "Application assistance for short-term visit visas, family reunification, and tourism travel to Gulf countries including UAE, Saudi Arabia, and Qatar.",
    image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "1.2s"
  },
  {
    title: "Pre-Departure Training",
    description:
      "Comprehensive orientation including soft skills, cultural adaptation, language basics, and workers’ rights to ensure candidates succeed abroad.",
    image: "https://images.pexels.com/photos/4109139/pexels-photo-4109139.jpeg?auto=compress&cs=tinysrgb&w=600",
    delay: "1.4s"
  }

  ];

  return (
    <section className="py-20 from-gray-300 to-gray-50 bg-gradient-to-r">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our <span className="text-green-600">Services</span> at ABC Agencies (PVT) LTD
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
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            style={{
              animationDelay: card.delay,
              opacity: 0,
              animation: `fadeInUp 0.6s ease forwards`,
            }}
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
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