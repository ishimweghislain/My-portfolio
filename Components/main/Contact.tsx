import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-900 min-h-screen">
      {/* Left column - Contact Form */}
      <div className="w-full md:w-1/2 bg-gray-800 p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              id="fullname"
              className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Request Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 p-2 w-full border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
              placeholder="Enter your message"
            />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">Send Message</button>
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
