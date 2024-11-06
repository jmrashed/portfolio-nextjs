import React from 'react';

const PropertyManagementSolution = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Property Management Solution
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Streamline your property management processes with our comprehensive solution tailored for landlords and property managers.
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Property Management Solution is designed to simplify the management of residential and commercial properties. With robust features and a user-friendly interface, our platform enables landlords and property managers to efficiently handle all aspects of property management.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Property Management Solution</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Tenant Management:</strong> Efficiently manage tenant information, leases, and communication.</li>
                    <li><strong>Online Rent Collection:</strong> Secure online payment options for tenants to pay rent seamlessly.</li>
                    <li><strong>Maintenance Requests:</strong> Streamlined process for tenants to submit maintenance requests.</li>
                    <li><strong>Document Management:</strong> Store important documents, such as leases and property regulations.</li>
                    <li><strong>Reporting and Analytics:</strong> Generate detailed reports on occupancy rates, revenue, and expenses.</li>
                    <li><strong>Property Listings:</strong> Showcase available properties with detailed descriptions and photos.</li>
                    <li><strong>Automated Reminders:</strong> Set reminders for lease renewals, payment due dates, and maintenance schedules.</li>
                    <li><strong>Communication Tools:</strong> Built-in messaging features to facilitate communication between tenants and managers.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    <div className="bg-gray-100 p-4 rounded shadow">Node.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">React.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">MongoDB</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Express.js</div>
                </div>
            </section>

            {/* Why Choose This Technology */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose This Technology</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    We chose a tech stack of Node.js, Express.js, and MongoDB for their scalability and performance. This stack enables rapid development while ensuring that our solution can handle the demands of growing property management needs.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Data Security</h3>
                        <p className="text-gray-600">
                            Ensuring the security of sensitive tenant data was paramount. We implemented industry-standard encryption and access controls to protect information.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">User Adoption</h3>
                        <p className="text-gray-600">
                            To enhance user adoption, we provided extensive training materials and support for both landlords and tenants.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Integration with Existing Systems</h3>
                        <p className="text-gray-600">
                            Many users had existing systems. We designed APIs for seamless integration with current property management tools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Crafted a user-friendly interface focusing on tenant and landlord experiences.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed responsive web and mobile applications.</li>
                    <li><strong>2 Backend Developers:</strong> Built the server-side logic and managed database interactions.</li>
                    <li><strong>1 Database Administrator:</strong> Oversaw the management and optimization of the database.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Conducted thorough testing to ensure software reliability and performance.</li>
                    <li><strong>1 Project Manager (My Role):</strong> Coordinated the project from inception to launch, ensuring it met user needs and deadlines.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“This property management system has transformed the way we operate. It’s easy to use, and our tenants love it!”</p>
                        <p className="font-semibold text-gray-800">— Jessica Lee, Property Manager</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The automated payment system has made rent collection effortless. Highly recommend!”</p>
                        <p className="font-semibold text-gray-800">— David Wilson, Landlord</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Property Management Solution offers a comprehensive toolkit for property managers and landlords, enabling them to enhance efficiency and tenant satisfaction. Join us to transform your property management experience.
                </p>
            </section>
        </div>
    );
};

export default PropertyManagementSolution;
