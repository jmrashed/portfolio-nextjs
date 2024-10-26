// src/app/layout.tsx
"use client";
import { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSidebar from './components/LeftSidebar'; // Left Sidebar
import RightSidebar from './components/RightSidebar'; // Right Sidebar

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-grow container mx-auto lg:px-0"> {/* Remove default padding */}
            {/* Sidebar will be hidden on small screens */}
            <LeftSidebar className="hidden lg:block lg:w-1/4" />
            <main className="flex-grow px-4 py-8 mx-[220px]"> {/* Add 220px margin to left and right */}
              {children}
            </main>
            <RightSidebar className="hidden lg:block lg:w-1/4" />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
