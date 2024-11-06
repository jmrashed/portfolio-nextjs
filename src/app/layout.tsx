// src/app/layout.tsx
"use client";
import { ReactNode } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftSidebar from "./components/LeftSidebar"; // Left Sidebar
import RightSidebar from "./components/RightSidebar"; // Right Sidebar

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="relative min-h-screen flex flex-col">
          <Header />

          <main className="flex-grow  grid grid-cols-12 max-w-[1400px] mx-auto gap-8 items-start">
            <div className="col-span-2 sticky top-0 left-0">
              <LeftSidebar/>
            </div>

            <div className="col-span-7">
              <div className="py-4 mt-14 pt-14">{children}</div>
            </div>

            
              <div className="col-span-3 sticky top-0 left-0">
                <RightSidebar />
              </div>
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
