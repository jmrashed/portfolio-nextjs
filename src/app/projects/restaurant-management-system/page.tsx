import React from 'react';

export default function RestaurantManagementSystem() {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Restaurant Management System
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A comprehensive platform designed to enhance the efficiency and productivity of restaurant operations.
                </p>
            </section>

            {/* Why Need Restaurant Management System */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why a Restaurant Management System is Essential</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    In the fast-paced restaurant industry, an effective management system is crucial for streamlining operations, improving customer service, and increasing profitability. A dedicated Restaurant Management System simplifies inventory management, table reservations, and order processing, enabling staff to focus on delivering exceptional dining experiences.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Restaurant Management System</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Menu Management</strong>: Easily update and manage menu items, pricing, and descriptions.</li>
                    <li><strong>Order Management</strong>: Streamline order taking, processing, and tracking for dine-in and takeout.</li>
                    <li><strong>Table Reservation</strong>: Allow customers to reserve tables online, enhancing customer satisfaction.</li>
                    <li><strong>Inventory Management</strong>: Monitor stock levels, track inventory usage, and generate reorder alerts.</li>
                    <li><strong>Customer Management</strong>: Maintain customer profiles, preferences, and order history for personalized service.</li>
                    <li><strong>Billing and Payment Processing</strong>: Generate bills quickly and support multiple payment methods, including online payments.</li>
                    <li><strong>Staff Management</strong>: Schedule shifts, manage payroll, and track employee performance.</li>
                    <li><strong>Analytics and Reporting</strong>: Generate reports on sales, inventory, and customer behavior for data-driven decisions.</li>
                    <li><strong>Loyalty Programs</strong>: Implement loyalty programs to reward repeat customers and enhance retention.</li>
                    <li><strong>Multi-location Support</strong>: Manage multiple restaurant locations from a single dashboard.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    <div>Laravel</div>
                    <div>jQuery</div>
                    <div>Bootstrap</div>
                    <div>Flutter</div>
                </div>
            </section>

            {/* Why Choose This Technology */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose This Technology</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Laravel provides a robust framework with excellent support for database management and routing, making it ideal for complex applications like restaurant management systems. jQuery enhances the interactivity of the user interface, while Bootstrap ensures a responsive and mobile-friendly design. Flutter is utilized for the mobile app, enabling fast development cycles and high-performance user experiences.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Real-time Order Processing</h3>
                        <p className="text-gray-600">
                            Ensuring orders are processed in real time to avoid delays was a significant challenge. We implemented WebSocket technology for real-time communication between the kitchen and front-of-house staff, ensuring swift order fulfillment.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Customer Engagement</h3>
                        <p className="text-gray-600">
                            Engaging customers effectively can be challenging. We introduced a loyalty program and integrated it into the system to reward repeat customers, enhancing engagement and retention.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Inventory Management</h3>
                        <p className="text-gray-600">
                            Managing inventory efficiently is crucial for cost control. We built automated inventory tracking that alerts staff when stock levels are low, ensuring timely restocking and reducing waste.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer</strong>: Focused on creating an engaging and user-friendly interface.</li>
                    <li><strong>2 Frontend Developers</strong>: Responsible for building the user interface and client-side logic.</li>
                    <li><strong>2 Backend Developers</strong>: Handled server-side logic, API integrations, and database management.</li>
                    <li><strong>1 Software Quality Assurance (SQA)</strong>: Ensured the product met high-quality standards through rigorous testing.</li>
                    <li><strong>1 Team Lead (My Role)</strong>: Led the project, managed team collaboration, and ensured project goals were met.</li>
                </ul>
            </section>

            {/* Why Our Restaurant Management System Stands Out */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Our Restaurant Management System Stands Out</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Restaurant Management System combines modern technology with user-centered design to streamline restaurant operations. With its extensive feature set, robust reporting capabilities, and intuitive interface, it empowers restaurant managers to make informed decisions, improve operational efficiency, and enhance customer experiences. Its scalability ensures that it can grow with your business, adapting to changing needs in the dynamic restaurant industry.
                </p>
            </section>
        </div>
    );
}
