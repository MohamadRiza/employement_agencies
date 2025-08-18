import CustomerAIChat from "@/components/CustomerAIChat";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is ABC Agencies (PVT) LTD officially licensed?",
      answer:
        "Yes, we are a government-licensed manpower agency registered with the Sri Lanka Bureau of Foreign Employment (SLBFE) under License No: ABC-12345. All our operations comply with national and international labor laws.",
    },
    {
      question: "Which countries do you provide staffing services to?",
      answer:
        "We place skilled workers in countries across the Middle East (UAE, Saudi Arabia, Qatar, Oman), Asia (Malaysia, Singapore), and other regions including Australia and Europe.",
    },
    {
      question: "What types of jobs do you offer?",
      answer:
        "We specialize in placing domestic helpers, housemaids, nannies, professional cooks, stewards, caregivers, and hospitality staff in private homes, hotels, and institutions abroad.",
    },
    {
      question: "How long does the placement process take?",
      answer:
        "The process typically takes 4 to 8 weeks, depending on the destination country, visa processing time, and candidate readiness. We provide regular updates throughout the journey.",
    },
    {
      question: "Do you provide pre-departure training?",
      answer:
        "Yes, all candidates undergo comprehensive training in language basics, job skills, cultural awareness, legal rights, and workplace ethics to ensure a smooth transition and successful employment abroad.",
    },
    {
      question: "What documents are required for overseas employment?",
      answer:
        "You will need a valid passport, national ID, educational certificates, medical fitness report, police clearance, and any job-specific certifications. Our team will guide you through each step.",
    },
    {
      question: "Can I track the status of my application?",
      answer:
        "Yes, once registered, you’ll receive a tracking ID and access to our support team. You can call or email us anytime to check your application status.",
    },
    {
      question: "Do you assist with visa processing?",
      answer:
        "Absolutely. We handle end-to-end visa processing, including documentation, employer coordination, embassy appointments, and travel arrangements, ensuring a hassle-free experience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 from-gray-400 via-gray-50 to-gray-300 bg-gradient-to-b">
      {/* Heading with Background Image */}
      <div
        className="relative bg-cover bg-center text-white py-40 px-6 bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Get clear answers to the most common questions about overseas employment, visa processing, and our services.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16 space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 px-6 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Need Help Section */}
      <div className="text-center mt-20">
        <p className="text-gray-600 mb-4">Still have questions?</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us Now
        </button>
      </div>
      <CustomerAIChat/>
    </section>
  );
};

export default FAQ;
