// src/app/components/RightSidebar.tsx

import React from 'react';
import { FiFolder } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; // Import usePathname for routing

const RightSidebar: React.FC = () => {
    const pathname = usePathname(); // Get the current path
    const projects = [
        { name: "News Portal", views: 150 },
        { name: "Learning Management System", views: 200 },
        { name: "SaaS Customer Relationship Management", views: 300 },
        { name: "E-Commerce Application", views: 450 },
        { name: "Branding & Advertising", views: 120 },
        { name: "SaaS Club Management System", views: 80 },
        { name: "SaaS School Management Software", views: 600 },
        { name: "Human Resource Management System", views: 250 },
        { name: "Restaurant Management System", views: 90 },
        { name: "Queue Management System", views: 30 },
        { name: "Property Management Solution", views: 40 },
        { name: "Music Streaming & Podcast Application", views: 500 },
    ];

    const githubRepos = [
        { 
            name: "ZKTeco Package For Laravel", 
            url: "https://github.com/jmrashed/zkteco", 
            description: "This package provides seamless integration with ZKTeco devices within Laravel applications, enabling communication with attendance devices such as fingerprint, face recognition, etc.",
            language: "PHP", 
            stars: 15,
            forks: 4,
            license: "MIT License", 
            updated: "May 23"
        },
        { 
            name: "E-commerce Toolkit for Laravel", 
            url: "https://github.com/jmrashed/ecommerce", 
            description: "The E-commerce Toolkit for Laravel is a modular package providing essential features for building e-commerce websites.",
            language: "PHP", 
            stars: 3,
            forks: 1,
            license: "MIT License", 
            updated: "May 28"
        },
        { 
            name: "AdibaIcon - Custom Icon Library", 
            url: "https://github.com/jmrashed/adibaicon", 
            description: "AdibaIcon is a custom icon library that can be used in web projects.",
            language: "CSS", 
            stars: 3,
            forks: 3,
            license: "Other", 
            updated: "Sep 6, 2023"
        },
        { 
            name: "Laravel 2FA Authentication Package", 
            url: "https://github.com/jmrashed/two-factor-auth", 
            description: "This package provides two-factor authentication for Laravel applications.",
            language: "PHP", 
            stars: 2,
            forks: 2,
            license: "MIT License", 
            updated: "May 25"
        },
        { 
            name: "Go Starter Kit", 
            url: "https://github.com/jmrashed/go-starter-kit", 
            description: "The Go Starter Kit is a foundational project for building a portfolio website using Go.",
            language: "Go", 
            stars: 2,
            forks: 0,
            license: "MIT License", 
            updated: "May 15"
        },
        { 
            name: "phpMyAdmin", 
            url: "https://github.com/jmrashed/phpmyadmin", 
            description: "phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.",
            language: "PHP", 
            stars: 2,
            forks: 1,
            license: "GNU General Public License v2.0", 
            updated: "Oct 5, 2023"
        },
    ];

    const slugify = (text: string) => {
        return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    };

    return ( 
        <aside className="w-full bg-gray-100 text-gray-800 p-4 flex flex-col h-full full-height-screen">
            <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
            <div className="flex-grow overflow-y-auto max-h-60"> {/* Set max height for scrollable area */}
                {projects.map((project, index) => {
                    const projectSlug = `/projects/${slugify(project.name)}`;
                    const isActive = pathname === projectSlug; // Check if the project is active
                    
                    return (
                        <div key={index} className="space-y-1 flex items-center justify-between">
                            <div className="flex items-center">
                                <FiFolder className={`text-blue-500 mr-2 ${isActive ? 'text-red-500' : ''}`} />
                                <a
                                    href={projectSlug}
                                    className={`hover:text-blue-500 text-sm truncate antialiased ${isActive ? 'font-bold text-blue-600' : ''}`}
                                    style={{
                                        maxWidth: '150px',
                                    }}
                                >
                                    {project.name}
                                </a>
                            </div>
                            <span className="text-gray-500 text-sm">{project.views} views</span>
                        </div>
                    );
                })}
            </div>

            {/* Recent GitHub Repos Section */}
            <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold mb-4">Recent GitHub Repos</h2>
                <div className="overflow-y-auto flex-grow max-h-60"> {/* Set max height for scrollable area */}
                    {githubRepos.map((repo, index) => (
                        <div key={index} className="space-y-1 flex flex-col">
                            <div className="flex items-center mt-3">
                                <FiFolder className="text-blue-500 mr-2" />
                                <a
                                    href={repo.url}
                                    target="_blank" // Open link in new tab
                                    rel="noopener noreferrer" // Security feature
                                    className="hover:text-blue-500 text-sm truncate antialiased"
                                    style={{
                                        maxWidth: '250px', // Adjust width as needed
                                    }}
                                >
                                    {repo.name}
                                </a>
                            </div>
                            <p className="text-gray-600 text-xs">{repo.description}</p>
                            <div className="text-gray-500 text-xs flex justify-between">
                                <span className='text-red-400'>⤃ {repo.language}</span>
                                {/* <span>{repo.stars} ⭐ {repo.forks} 🍴</span> */}
                                {/* <span>{repo.license}</span> */}
                                {/* <span>Updated on {repo.updated}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="antialiased text-sm">
                    Email:{" "}
                    <a href="mailto:jmrashed@gmail.com" className="hover:text-blue-500">
                        jmrashed@gmail.com
                    </a>
                </p>
                <p className="antialiased text-sm">
                    Phone:{" "}
                    <a href="tel:+8801734446514" className="hover:text-blue-500">
                        +888 01734446514
                    </a>
                </p>
            </div>
        </aside>
    );
};

export default RightSidebar;
