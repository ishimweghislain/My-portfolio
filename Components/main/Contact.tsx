"use client";

import React, { useState } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ fullname: '', email: '', message: '' });
  };

  return (
    <section id='contact'>
      <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-900 min-h-screen">
        {/* Left column - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-white">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Request Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Send Message</button>
          </form>
        </div>

        {/* Right column - Contact Information */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 bg-gray-800 p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FiPhoneCall className="text-purple-500 text-2xl mr-3" />
            <span className="text-white">+250 781262526</span>
          </div>
          <div className="flex items-center">
            <FiMail className="text-purple-500 text-2xl mr-3" />
            <span className="text-white">ishimweghislain82@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
