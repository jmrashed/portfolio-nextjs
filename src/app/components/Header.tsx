// src/app/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 w-full flex gap-8 items-center justify-center fixed top-0">
      <div className="text-2xl font-semibold text-gray-800">
        Md Rasheduzzaman
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </a>
        <a href="#services" className="text-gray-700 hover:text-blue-500">
          Services
        </a>
        <a href="#projects" className="text-gray-700 hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="text-gray-700 hover:text-blue-500">
          Contact
        </a>
      </nav>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
