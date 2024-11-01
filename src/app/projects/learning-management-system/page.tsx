import React from 'react';

const LearningManagementSystem = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Learning Management System (LMS)
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Empowering educators and learners with a comprehensive platform for online education.
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Learning Management System is designed to facilitate online learning and training. It provides tools for course creation, student management, assessment, and progress tracking, enabling a streamlined educational experience for both instructors and learners.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Application</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Course Creation:</strong> Easily create and manage courses with multimedia content.</li>
                    <li><strong>Student Management:</strong> Enroll, track, and manage student progress and engagement.</li>
                    <li><strong>Assessment Tools:</strong> Design quizzes, assignments, and exams with automated grading.</li>
                    <li><strong>Reporting & Analytics:</strong> Gain insights into student performance and course effectiveness.</li>
                    <li><strong>Discussion Forums:</strong> Foster collaboration and communication among students and instructors.</li>
                    <li><strong>Certification Generation:</strong> Automatically issue certificates upon course completion.</li>
                    <li><strong>Mobile Compatibility:</strong> Access courses and materials on-the-go from any device.</li>
                    <li><strong>Integration Options:</strong> Connect with third-party tools for enhanced functionality.</li>
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
                    The LMS leverages React.js for a dynamic and responsive user interface, providing a seamless user experience. Node.js and Express.js ensure a powerful backend capable of handling multiple concurrent users, while MongoDB offers flexible data storage for various course materials and student information.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">User Engagement</h3>
                        <p className="text-gray-600">
                            Maintaining student engagement in online courses was a challenge. We introduced interactive elements and gamification to enhance the learning experience.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Scalability</h3>
                        <p className="text-gray-600">
                            Ensuring the platform could scale effectively was crucial. We adopted microservices architecture to handle increased user load without compromising performance.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Content Management</h3>
                        <p className="text-gray-600">
                            Managing diverse course content efficiently was essential. We implemented a user-friendly content management system (CMS) for easy updates and organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Designed a user-friendly interface focusing on the learner's journey.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed the client-side application with responsive features.</li>
                    <li><strong>2 Backend Developers:</strong> Built a robust backend for managing courses and user data.</li>
                    <li><strong>1 Database Administrator:</strong> Ensured data integrity and optimized database performance.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Conducted testing to maintain high product quality.</li>
                    <li><strong>1 Project Manager (Your Role):</strong> Led the project to success, coordinating between teams and managing timelines.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“This LMS transformed the way we deliver training to our employees. Highly recommended!”</p>
                        <p className="font-semibold text-gray-800">— Sarah Lee, Training Coordinator</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“The platform is intuitive and easy to navigate. Our students love it!”</p>
                        <p className="font-semibold text-gray-800">— David Smith, Educator</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Learning Management System empowers educational institutions and businesses to deliver engaging online courses effectively. With its robust features and user-centric design, it enhances the learning experience and fosters student success.
                </p>
            </section>
        </div>
    );
};

export default LearningManagementSystem;
