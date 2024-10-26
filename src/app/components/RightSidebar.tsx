// src/app/components/RightSidebar.tsx

import React from 'react';
import { FiFolder } from 'react-icons/fi';

const RightSidebar: React.FC = () => {
    const projects = [
        { name: "School Management System (SMS) - Laravel" },
        { name: "Learning Management System (LMS) - Mobile App" },
        { name: "Learning Management System (LMS) - Web Application" },
        { name: "Customer Relationship Management (CRM) System" },
        { name: "CRM Multi-Platform Mobile Application" },
        { name: "Social App - Chat, Calling, and Live Media for iOS & Android" },
        { name: "Delivery Management Application" },
        { name: "Branding & Advertising - Flutter and Web Application" },
        { name: "HRM - QR Attendance System" },
        { name: "Club Management System - Multipurpose Flutter App" },
        { name: "News & Magazine Application - Flutter" },
        { name: "E-Commerce Application - Multipurpose & Multivendor" },
        { name: "Pharmacy E-Commerce - Multi Vendor UI Kit" },
        { name: "Human Resource Management (HRM) System" },
        { name: "Event Management Platform" },
        { name: "Restaurant Management System" },
        { name: "Queue Management System - Flutter v3.10" },
        { name: "E-Commerce Seller Application - Android & iOS" },
        { name: "Tailor Management Solution - All-in-One" },
        { name: "School Inspection Report - Flutter App" },
        { name: "Property Management Solution" },
        { name: "Music Streaming & Podcast Application - Offline Mode" },
        { name: "Complete Multi-vendor E-Commerce Platform" },
    ];

    return (
        <aside className="w-full md:w-64 bg-gray-100 text-gray-800 p-4 fixed right-0 top-0 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Our Projects</h2>
            <div className="overflow-y-auto flex-grow space-y-3">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-1 flex items-center">
                        <FiFolder className="text-blue-500 mr-2" /> {/* Icon added here */}
                        <a
                            href={`#project${index + 1}`}
                            className="hover:text-blue-500 text-sm md:text-base"
                        >
                            {project.name}
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-sm">
                    Email:{" "}
                    <a href="mailto:contact@onesttech.com" className="hover:text-blue-500">
                        contact@onesttech.com
                    </a>
                </p>
                <p className="text-sm">
                    Phone:{" "}
                    <a href="tel:+1234567890" className="hover:text-blue-500">
                        +1 (234) 567-890
                    </a>
                </p>
            </div>
        </aside>
    );
};

export default RightSidebar;
