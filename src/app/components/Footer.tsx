// src/app/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-center">
        <div>
          <h2 className="text-lg font-semibold">OnestTech</h2>
          <p className="text-sm mt-1">
            Your trusted partner in tech solutions.
          </p>
        </div>
        <div className="flex flex-col space-y-1 mt-4 md:mt-0">
          <a href="#about" className="text-gray-300 hover:text-blue-300 text-sm">
            About Us
          </a>
          <a href="#services" className="text-gray-300 hover:text-blue-300 text-sm">
            Services
          </a>
          <a href="#projects" className="text-gray-300 hover:text-blue-300 text-sm">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-300 text-sm">
            Contact
          </a>
        </div>
        <div className="flex flex-col space-y-1 mt-4 md:mt-0">
          <p className="text-sm">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:contact@onesttech.com" className="hover:text-blue-300">
              contact@onesttech.com
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+1234567890" className="hover:text-blue-300">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} OnestTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
