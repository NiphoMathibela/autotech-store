import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#0a3042]">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Have a question or need assistance? We're here to help! Reach out to us through any
          of the following channels or fill out the contact form below.
        </p>
      </div>

      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#0a3042]">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-[#64ee85]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+27 (011) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-[#64ee85]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@autotechspares.co.za</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-[#64ee85]" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Main Street<br />Johannesburg, 2000<br />South Africa</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-4 h-6 w-6 text-[#64ee85]" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-[#0a3042]">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#64ee85] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#64ee85] focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#64ee85] focus:outline-none"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="order">Order Status</option>
                <option value="returns">Returns & Warranty</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#64ee85] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#64ee85] px-6 py-3 text-[#0a3042] hover:bg-[#64ee85]/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
