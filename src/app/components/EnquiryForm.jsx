"use client";

import { useState } from "react";
import { CONTACT } from "../config/contact";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New Enquiry:%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Service: ${form.service}%0A
Message: ${form.message}`;

    window.open(
      `https://wa.me/${CONTACT.phone}?text=${text}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Online Enquiry / Booking
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Fill in your details and we’ll get back to you shortly
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 mt-10 rounded-xl text-center">
            <h3 className="text-lg font-semibold">
              Enquiry Sent Successfully ✅
            </h3>
            <p className="mt-2 text-sm">
              Thank you for contacting us. We’ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white mt-10 p-8 rounded-2xl shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full border bg-white text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              onChange={handleChange}
              className="w-full border bg-white text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full border bg-white text-gray-900 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service</option>
              <option>School Pick-Up & Drop</option>
              <option>Tuition / Coaching</option>
              <option>Extra-Curricular Activities</option>
              <option>Office Commute</option>
              <option>Customized Route</option>
            </select>

            <textarea
              name="message"
              placeholder="Additional Message (optional)"
              rows="4"
              onChange={handleChange}
              className="w-full border bg-white text-gray-900 placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium"
            >
              Submit Enquiry
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
