// LeftSidebar.tsx

import React from 'react';

const LeftSidebar: React.FC = () => {
    const links = [
        { name: "Overview", href: "#overview" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Certifications", href: "#certifications" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <aside className="w-full md:w-64 bg-gray-900 text-white p-4 fixed left-0 top-0 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <nav className="overflow-y-auto flex-grow space-y-3">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="block hover:text-blue-300 text-sm md:text-base"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold">About Us</h3>
                <p className="text-sm">
                    Learn more about our journey, mission, and values at{" "}
                    <a href="https://onesttech.com/about" className="hover:text-blue-300">
                        OnestTech
                    </a>.
                </p>
                <p className="text-sm">
                    Need assistance? Contact our team directly through our{" "}
                    <a href="#contact" className="hover:text-blue-300">
                        Contact page
                    </a>.
                </p>
            </div>
        </aside>
    );
};

export default LeftSidebar;
