// src/components/ApplyNow.jsx
import React, { useState, useEffect } from "react";
import CustomerAIChat from "@/components/CustomerAIChat";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "",
    email: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    isSriLankanResident: "",
    workExperience: "",
    gender: "",
    languages: "",
    isSriLankanPassportHolder: "",
    applyingFor: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [vacancyTypes, setVacancyTypes] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [turnstileError, setTurnstileError] = useState(false);

  // Fetch job types from backend
  useEffect(() => {
    const loadVacancyTypes = async () => {
      try {
        const res = await fetch(`${API_URL}/api/applications/vacancies`);
        const data = await res.json();
        if (data.success) setVacancyTypes(data.data);
      } catch (err) {
        console.error("Failed to load job types");
      }
    };
    loadVacancyTypes();
  }, []);

  // Load Turnstile
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  // Turnstile callbacks
  window.turnstileCallback = () => setIsVerified(true);
  window.turnstileError = () => setTurnstileError(true);

  // DOB → Age Auto Calculation
  const handleDOBChange = (e) => {
    const dob = e.target.value;
    setFormData({ ...formData, dob });
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData((prev) => ({ ...prev, age }));
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please complete the 'I'm not a robot' verification.");
      return;
    }

    const required = ["fullName", "mobile", "addressLine1", "city", "applyingFor", "gender"];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`);
        return;
      }
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${API_URL}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          dob: "",
          age: "",
          email: "",
          mobile: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          isSriLankanResident: "",
          workExperience: "",
          gender: "",
          languages: "",
          isSriLankanPassportHolder: "",
          applyingFor: "",
        });
        if (window.turnstile) window.turnstile.reset();
        setIsVerified(false);
      } else {
        const error = await res.json();
        alert(error.message || "Failed to submit application.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Apply for a Job</h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below to apply for a position with <span className="font-semibold">ABC Agencies</span>.
          </p>

          {success ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center text-lg font-medium">
              ✅ Thank you! Your application has been submitted successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* DOB & Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleDOBChange}
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    readOnly
                    className="w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-600"
                  />
                </div>
              </div>

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Address Line 1 *</label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Applying For *</label>
                  <select
                    name="applyingFor"
                    value={formData.applyingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a job</option>
                    {vacancyTypes.map((type, i) => (
                      <option key={i} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Work Experience *</label>
                  <select
                    name="workExperience"
                    value={formData.workExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select</option>
                    <option>No Experience</option>
                    <option>Below 6 months</option>
                    <option>1 Year</option>
                    <option>2+ Years</option>
                  </select>
                </div>
              </div>

              {/* Radios */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Resident of Sri Lanka? *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="isSriLankanResident" value="true" onChange={handleChange} /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="isSriLankanResident" value="false" onChange={handleChange} /> No
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sri Lankan Passport Holder? *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="isSriLankanPassportHolder" value="true" onChange={handleChange} /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="isSriLankanPassportHolder" value="false" onChange={handleChange} /> No
                    </label>
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Prefer not to say" onChange={handleChange} /> Prefer not to say
                  </label>
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Languages Spoken *</label>
                <input
                  type="text"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  placeholder="e.g., English, Tamil, Sinhala"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Turnstile */}
              <div className="flex justify-center py-4">
                <div
                  className="cf-turnstile"
                  data-sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  data-callback="turnstileCallback"
                  data-theme="light"
                ></div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isVerified || loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-3 rounded-lg font-semibold shadow-md transition"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </div>
      <CustomerAIChat />
    </section>
  );
};

export default ApplyNow;
