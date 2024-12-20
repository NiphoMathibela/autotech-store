import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a3042] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">AutoTech Spares</h3>
            <p className="mb-4 text-gray-300">
              Your trusted source for quality auto parts and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-[#64ee85]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-[#64ee85]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-[#64ee85]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#64ee85]">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#64ee85]">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#64ee85]">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#64ee85]">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#64ee85]">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+27 (011) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>support@autotechspares.co.za</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>123 Main Street, Johannesburg, 2000</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to receive updates and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-[#64ee85] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-[#64ee85] px-4 py-2 text-[#0a3042] hover:bg-[#64ee85]/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AutoTech Spares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
