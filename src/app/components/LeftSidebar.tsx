// LeftSidebar.tsx

import React from 'react';

const LeftSidebar: React.FC = () => {
    const links = [
        { name: "Overview", href: "#overview" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Educations", href: "#educations" },
        { name: "Certifications", href: "#certifications" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <aside className="w-full  bg-gray-900 text-white p-4 full-height-screen flex flex-col ">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <nav className="overflow-y-auto flex-grow space-y-3">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="block hover:text-blue-300 text-sm md:text-base antialiased"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold">About Me</h3>
                <p className="text-sm">
                Tech lead at Onest Tech LLC, specializing in PHP, Node.js, Python, and JavaScript. With 8 years of experience in software development.
                </p> 
            </div>
        </aside>
    );
};

export default LeftSidebar;
