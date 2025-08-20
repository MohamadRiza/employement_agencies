// src/components/Contact.jsx
import CustomerAIChat from "@/components/CustomerAIChat";
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone input
    if (name === "phone" && value !== "" && !value.startsWith("+94")) {
      setFormData({ ...formData, phone: "+94" + value.replace(/^\+94/, "") });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim() || !formData.phone.startsWith("+94")) {
      newErrors.phone = "Phone must be a valid Sri Lankan number (+94)";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-80"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-800/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16 bg-white/60 rounded-xl p-8 shadow-lg backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Info */}
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Our Office
              </h3>

              {/* Head Office */}
              <div className="flex items-start gap-4 mb-6">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Head Office - Narammala</h4>
                  <p className="text-gray-600">
                    No: 01, Colombo Road, Narammala, North Western Province, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 text-base">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 text-lg" />
                  <a href="mailto:riza@gmail.com" className="text-gray-700 hover:text-blue-600">
                    riza@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600 text-lg" />
                  <a href="tel:+94112345678" className="text-gray-700 hover:text-blue-600">
                    +94 11 234 5678
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-blue-600 text-lg" />
                  <a href="tel:+94771234567" className="text-gray-700 hover:text-blue-600">
                    +94 77 123 4567
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <iframe
                title="Google Map - Narammala Office"
                src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d3956.2578261865!2d80.21895957880406!3d7.4366978687864504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d7.4349159!2d80.218509!5e0!3m2!1sen!2slk!4v1754710367728!5m2!1sen!2slk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            {success ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 text-center">
                ✅ Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option>Visa Inquiry</option>
                    <option>Job Placement</option>
                    <option>Training Program</option>
                    <option>Complaint/Suggestion</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your message (minimum 5 characters)"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <CustomerAIChat />
    </section>
  );
};

export default Contact;