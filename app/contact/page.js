"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData); // Show submitted data
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <main className="px-8 md:px-16 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Talk</h1>
      <p className="text-lg text-gray-600 mb-10">
        Have a project in mind or just want to say hi? Fill out the form below or send me an email directly.
      </p>

      {/* Contact Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">Message</label>
          <textarea 
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition"
          ></textarea>
        </div>

        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition w-full md:w-auto shadow-lg">
          Send Message
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-white">
        <p>Or email me at: <span className="text-white-600 font-bold">abdulmalek67343367@gmail.com</span></p>
      </div>

      {/* Submitted Data Display */}
      {submitted && (
        <div className="mt-10 p-6 rounded-xl bg-gray-100 border">
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Submitted Information</h2>

          <p><span className="font-semibold">Name:</span> {submitted.name}</p>
          <p><span className="font-semibold">Email:</span> {submitted.email}</p>
          <p><span className="font-semibold">Message:</span> {submitted.message}</p>
        </div>
      )}
    </main>
  );
}
