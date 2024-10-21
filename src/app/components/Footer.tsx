"use client";
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c3e50] text-white p-5 text-center flex flex-col items-center">
      <div className="my-5 flex flex-col sm:flex-row">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 text-lg hover:text-[#3498db] flex items-center"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 text-lg hover:text-[#3498db] flex items-center"
          aria-label="GitHub Profile"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
        <a
          href="mailto:jmrashed@gmail.com"
          className="text-white mx-2 text-lg hover:text-[#3498db] flex items-center"
          aria-label="Email"
        >
          <FaEnvelope className="mr-1" /> Email
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MD RASHEDUZZAMAN. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
