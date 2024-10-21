"use client";
import React from 'react'; 
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-[#2c3e50] p-5 flex justify-between items-center text-white max-w-7xl mx-auto">
      <h1 className="text-xl mb-0 sm:text-2xl">MD RASHEDUZZAMAN</h1>
      <nav>
        <ul className="flex list-none m-0 p-0">
          <li className="mx-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-4">
            <Link href="/about">About</Link>
          </li>
          <li className="mx-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="mx-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
