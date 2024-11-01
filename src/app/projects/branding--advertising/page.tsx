import React from 'react';

const MovingBillboardApp = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Branding & Advertising Moving Billboard
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Revolutionize your advertising strategy with our innovative moving billboard solutions that grab attention and deliver messages effectively.
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our moving billboard application provides a unique platform for brands to showcase their advertisements in high-traffic areas, maximizing visibility and engagement. With dynamic content capabilities, your message reaches the right audience at the right time.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Application</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Dynamic Content Management:</strong> Update advertisements in real-time based on location and audience demographics.</li>
                    <li><strong>GPS Tracking:</strong> Track billboard locations and movement in real-time to optimize advertising strategies.</li>
                    <li><strong>Scheduling & Timing:</strong> Schedule specific ads for peak times to maximize impact.</li>
                    <li><strong>Analytics Dashboard:</strong> Gain insights into ad performance with detailed analytics on reach and engagement.</li>
                    <li><strong>Customizable Designs:</strong> Create visually stunning ads with easy-to-use design tools.</li>
                    <li><strong>Integration with Social Media:</strong> Promote social media campaigns through billboard advertisements for cohesive branding.</li>
                    <li><strong>Client Portal:</strong> Access a dedicated portal for clients to manage their advertising campaigns effortlessly.</li>
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
                    We chose React.js for the front end to build an interactive and responsive user interface. Node.js and Express.js form the backbone of our server, providing a robust and scalable environment, while MongoDB allows us to handle diverse data requirements effectively.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Content Updates</h3>
                        <p className="text-gray-600">
                            Ensuring timely content updates was crucial. We implemented a user-friendly content management system to streamline this process.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Audience Engagement</h3>
                        <p className="text-gray-600">
                            Engaging viewers in a busy environment was a challenge. We incorporated dynamic content and interactive features to capture attention.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Data Management</h3>
                        <p className="text-gray-600">
                            Managing large datasets for performance analytics was complex. We utilized MongoDB's flexibility to create efficient data models.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Crafted an engaging user experience and visually appealing interface.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed the web application with an emphasis on user engagement.</li>
                    <li><strong>2 Backend Developers:</strong> Built the server infrastructure and database interactions.</li>
                    <li><strong>1 Database Administrator:</strong> Managed database optimization and data integrity.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Conducted thorough testing to ensure application reliability.</li>
                    <li><strong>1 Project Manager (Your Role):</strong> Led the project, coordinating between teams and ensuring timely delivery.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The moving billboards have significantly increased our brand visibility. A game changer!”</p>
                        <p className="font-semibold text-gray-800">— Jane Smith, Marketing Director</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The platform is incredibly intuitive. Managing our ads has never been easier!”</p>
                        <p className="font-semibold text-gray-800">— John Doe, Brand Manager</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Branding & Advertising Moving Billboard application provides a unique and effective way for businesses to advertise their products and services in dynamic environments. With powerful features and innovative technology, we help brands connect with their audience like never before.
                </p>
            </section>
        </div>
    );
};

export default MovingBillboardApp;
