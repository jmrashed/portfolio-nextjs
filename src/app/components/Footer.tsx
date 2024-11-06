// src/app/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-center">
       
          <p className="text-xs text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Rasheduzzaman. All rights reserved.
          </p> 
      </div>
    </footer>
  );
};

export default Footer;
