import React from 'react';

// Project data organized by technology stack
const projectsByStack = {
    Laravel: [
        {
            title: "HRM - Human Resource Management System",
            description: "HRM is a comprehensive HRMS that includes both mobile and web apps.",
            link: "/projects/hrm", // Update with the actual link
        },
        {
            title: "CRM - Customer Relation Management System",
            description: "CRM is designed to manage customer relationships effectively.",
            link: "/projects/crm", // Update with the actual link
        },
        {
            title: "LMS - Online Learning Management System Web Application",
            description: "LMS web application crafted specifically for Online courses, University, College, and School.",
            link: "/projects/lms-web-app", // Update with the actual link
        },
        {
            title: "Schooled - School Management System",
            description: "Schooled is a powerful and feature-rich school management system that is built using the Laravel 9 framework.",
            link: "/projects/schooled", // Update with the actual link
        },
        {
            title: "Hotel Management System",
            description: "A complete solution for managing hotel operations efficiently.",
            link: "/projects/hotel-management", // Update with the actual link
        },
    ],
    NodeJS: [
        {
            title: "News - Online News Portal",
            description: "A comprehensive platform for delivering news articles and updates.",
            link: "/projects/news", // Update with the actual link
        },
        {
            title: "Onex Club Multi-Purpose Flutter App",
            description: "Onex Club is a mobile app that serves various club applications.",
            link: "/projects/onex-club", // Update with the actual link
        },
        {
            title: "Tailor - All in one app for tailor and customer management",
            description: "Tailor Bhai is a comprehensive tailoring and customer management app.",
            link: "/projects/tailor", // Update with the actual link
        },
        {
            title: "Real-Time Chat API",
            description: "A backend service for facilitating real-time chat applications.",
            link: "/projects/real-time-chat", // Update with the actual link
        },
    ],
    Flutter: [
        {
            title: "HRM QR Attendance",
            description: "HRM software streamlining HR processes and improving data management.",
            link: "/projects/hrm-qr-attendance", // Update with the actual link
        },
        {
            title: "LMS Mobile App",
            description: "LMS Mobile App is a comprehensive learning management system that includes a range of features for students.",
            link: "/projects/lms-mobile-app", // Update with the actual link
        },
        {
            title: "Schooled - School Management System Mobile App",
            description: "Schooled mobile app that enhances the school management system.",
            link: "/projects/schooled-mobile-app", // Update with the actual link
        },
        {
            title: "Tailor App",
            description: "A dedicated app for tailoring services and customer management.",
            link: "/projects/tailor-app", // Update with the actual link
        },
    ],
    ReactNextJS: [
        {
            title: "Personal Portfolio",
            description: "A personal portfolio site to showcase projects and skills.",
            link: "/projects/personal-portfolio", // Update with the actual link
        },
        {
            title: "Real-Time Chat App",
            description: "A chat application built with React and Next.js for real-time messaging.",
            link: "/projects/real-time-chat-app", // Update with the actual link
        },
        {
            title: "News Application",
            description: "A news application providing updates and articles using React.",
            link: "/projects/news-app", // Update with the actual link
        },
    ],
    GoLang: [
        {
            title: "REST API",
            description: "A RESTful API built using GoLang for various services.",
            link: "/projects/go-rest-api", // Update with the actual link
        },
        // Add more GoLang projects as needed
    ],
};

const ProjectsPage = () => {
    // Calculate statistics
    const totalProjects = Object.values(projectsByStack).flat().length; // Total number of projects
    const projectsPerStack = Object.keys(projectsByStack).map(stack => ({
        stack,
        count: projectsByStack[stack].length,
    }));

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Recent Projects</h1>
            <div className="mb-8 p-6 rounded-lg shadow-lg bg-white border border-gray-200">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Statistics</h2>
                <p className="mb-4  text-gray-700">
                    Total Projects: <span className="font-semibold text-blue-600">{totalProjects}</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectsPerStack.map(({ stack, count }) => (
                        <div key={stack} className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow transition duration-300 hover:shadow-lg">
                            <div className="mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Replace with appropriate icons or SVGs */}
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-semibold text-blue-500">{stack}:</span>
                                <span className="ml-1 font-semibold">{count}</span> projects
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {Object.entries(projectsByStack).map(([stack, projects]) => (
                <div key={stack} className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">{stack}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                                <h3 className="text-xl font-semibold mb-2">
                                    <a href={project.link} className="text-blue-500 hover:underline">{project.title}</a>
                                </h3>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsPage;
