import React from 'react';
import { Envelope, Facebook, Twitter, Instagram, Linkedin, Github, Rss } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Welcome to our blog! We provide the latest insights on technology, design, and more. Stay tuned for regular updates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="/about" className="hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
              <li className="mb-2"><a href="/sitemap" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="/category/technology" className="hover:text-white">Technology</a></li>
              <li className="mb-2"><a href="/category/design" className="hover:text-white">Design</a></li>
              <li className="mb-2"><a href="/category/lifestyle" className="hover:text-white">Lifestyle</a></li>
              <li className="mb-2"><a href="/category/business" className="hover:text-white">Business</a></li>
              <li className="mb-2"><a href="/category/travel" className="hover:text-white">Travel</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white p-2 rounded mb-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="/rss" className="text-gray-400 hover:text-white">
              <Rss size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;