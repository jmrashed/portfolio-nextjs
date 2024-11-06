import React from 'react';

const NewsPortal = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    News Portal
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Stay informed with the latest news articles from around the world.
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our News Portal provides real-time updates and insightful articles on current events, politics, technology, entertainment, and more. With a user-friendly interface, users can easily navigate through various categories to find the news that matters most to them.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Application</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Real-Time News Updates:</strong> Get the latest news articles as they happen.</li>
                    <li><strong>Category Filtering:</strong> Browse news articles by categories such as Politics, Technology, Sports, and Entertainment.</li>
                    <li><strong>Search Functionality:</strong> Quickly find articles using keywords.</li>
                    <li><strong>User Comments:</strong> Engage with articles through comments and discussions.</li>
                    <li><strong>Personalized Feed:</strong> Customize your news feed based on interests and reading history.</li>
                    <li><strong>Multimedia Support:</strong> View images, videos, and infographics alongside articles.</li>
                    <li><strong>Push Notifications:</strong> Receive alerts for breaking news and important updates.</li>
                    <li><strong>Mobile Responsiveness:</strong> Access the portal from any device, anywhere.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    <div className="bg-gray-100 p-4 rounded shadow">Next.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Node.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Express.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">MongoDB</div>
                </div>
            </section>

            {/* Why Choose This Technology */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose This Technology</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    The combination of Next.js for server-side rendering and Node.js for backend operations allows for a fast and scalable news portal. Express.js simplifies the API development, while MongoDB provides a flexible and efficient data storage solution, ideal for managing large volumes of news articles and user interactions.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Content Curation</h3>
                        <p className="text-gray-600">
                            Selecting relevant news articles was a challenge. We implemented an algorithm to aggregate and display trending news based on user interests and engagement metrics.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Performance Optimization</h3>
                        <p className="text-gray-600">
                            Ensuring fast load times was critical. We utilized caching strategies and optimized images to improve performance and user experience.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">User Engagement</h3>
                        <p className="text-gray-600">
                            Keeping users engaged was essential. We added features like personalized feeds and notifications to encourage return visits and interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Crafted an intuitive and engaging user interface.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed a responsive frontend using Next.js.</li>
                    <li><strong>2 Backend Developers:</strong> Built robust APIs to support the news portal functionality.</li>
                    <li><strong>1 Database Administrator:</strong> Managed the database to ensure optimal performance.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Ensured the platform met quality standards through rigorous testing.</li>
                    <li><strong>1 Project Manager (Your Role):</strong> Oversaw the project, coordinating efforts between teams and managing timelines.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“This news portal keeps me updated with everything I need to know. It's user-friendly and reliable!”</p>
                        <p className="font-semibold text-gray-800">— Emma Johnson, Regular User</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The ability to filter news by category has changed how I stay informed. Highly recommend!”</p>
                        <p className="font-semibold text-gray-800">— Michael Brown, News Enthusiast</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our News Portal is designed to deliver the latest news efficiently and engagingly. With its comprehensive features and user-centric design, it serves as a reliable source for news and information for our audience.
                </p>
            </section>
        </div>
    );
};

export default NewsPortal;
