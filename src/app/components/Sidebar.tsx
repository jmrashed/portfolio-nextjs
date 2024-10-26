// Sidebar.tsx
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside
            className={`lg:w-64 h-full bg-gray-900 text-white p-4 space-y-4 fixed  top-0 left-0 transition-transform transform 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            {/* Toggle Button for Mobile */}
            <button
                className="lg:hidden text-white p-2 focus:outline-none fixed top-4 left-4 z-20"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            <div className={`lg:block ${isOpen ? "block" : "hidden"} lg:space-y-4`}>
                <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                <nav className="flex flex-col space-y-2">
                    <a href="#overview" className="hover:text-blue-300">Overview</a>
                    <a href="#experience" className="hover:text-blue-300">Experience</a>
                    <a href="#skills" className="hover:text-blue-300">Skills</a>
                    <a href="#certifications" className="hover:text-blue-300">Certifications</a>
                    <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
                    <a href="#projects" className="hover:text-blue-300">Projects</a>
                    <a href="#services" className="hover:text-blue-300">Services</a>
                    <a href="#contact" className="hover:text-blue-300">Contact</a>
                    <a href="#faq" className="hover:text-blue-300">FAQ</a>
                    <a href="#blog" className="hover:text-blue-300">Blog</a>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
