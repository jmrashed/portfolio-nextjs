import React from 'react';

const EcommerceApplication = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    E-Commerce Application
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Transform your online shopping experience with our robust and user-friendly e-commerce platform.
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our e-commerce application provides a seamless shopping experience, allowing users to browse, search, and purchase products effortlessly. Designed with a modern UI, it enhances user engagement and drives conversions.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Application</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>User Registration & Authentication:</strong> Secure and simple sign-up and login process.</li>
                    <li><strong>Product Catalog:</strong> Comprehensive listing of products with filters and categories for easy navigation.</li>
                    <li><strong>Shopping Cart:</strong> Add, remove, and modify product quantities before checkout.</li>
                    <li><strong>Payment Integration:</strong> Support for multiple payment gateways for secure transactions.</li>
                    <li><strong>Order Management:</strong> Track order status and history for enhanced user experience.</li>
                    <li><strong>User Reviews & Ratings:</strong> Allow customers to leave feedback on products.</li>
                    <li><strong>Admin Dashboard:</strong> Manage products, orders, and users from a centralized admin panel.</li>
                    <li><strong>Promotions & Discounts:</strong> Set up coupon codes and special offers to boost sales.</li>
                    <li><strong>Responsive Design:</strong> Optimized for both desktop and mobile devices for a smooth user experience.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    <div className="bg-gray-100 p-4 rounded shadow">React.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Node.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Express.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">MongoDB</div>
                </div>
            </section>

            {/* Why Choose This Technology */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose This Technology</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    We opted for React.js for its component-based architecture, which allows for reusable UI components, enhancing maintainability and scalability. Node.js and Express.js offer a robust backend framework, while MongoDB provides flexible data storage solutions suitable for dynamic product listings.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">High Traffic Management</h3>
                        <p className="text-gray-600">
                            Handling peak traffic during sales events was challenging. We implemented caching strategies and load balancing to ensure high availability.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Security Concerns</h3>
                        <p className="text-gray-600">
                            Ensuring user data security was critical. We utilized HTTPS and secure payment gateways to protect sensitive information.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Inventory Management</h3>
                        <p className="text-gray-600">
                            Keeping track of inventory levels was complex. We developed an automated inventory management system to sync stock levels in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Created an intuitive and engaging user interface.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed the client-side application with responsiveness in mind.</li>
                    <li><strong>2 Backend Developers:</strong> Built the server-side logic and database interactions.</li>
                    <li><strong>1 Database Administrator:</strong> Ensured data integrity and optimized database performance.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Performed testing to guarantee application reliability and performance.</li>
                    <li><strong>1 Project Manager (Your Role):</strong> Led the team, ensuring project milestones were met and communication flowed smoothly.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The e-commerce application has transformed our sales approach, allowing us to reach a wider audience with ease.”</p>
                        <p className="font-semibold text-gray-800">— Sarah Connor, E-commerce Manager</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“User experience has never been better! Our customers love the new interface.”</p>
                        <p className="font-semibold text-gray-800">— John Smith, Marketing Director</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our e-commerce application is designed to enhance the online shopping experience, providing robust features and technology that meet the needs of modern consumers. With an emphasis on security, usability, and performance, we aim to help businesses thrive in the digital marketplace.
                </p>
            </section>
        </div>
    );
};

export default EcommerceApplication;
