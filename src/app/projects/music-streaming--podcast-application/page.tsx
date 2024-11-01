import React from 'react';

const MusicStreamingPodcastApp = () => {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Music Streaming & Podcast Application
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Experience your favorite music and podcasts in one seamless application. Stream, download, and enjoy content anytime, anywhere!
                </p>
            </section>

            {/* Introduction */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Introduction</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Music Streaming & Podcast Application brings together the best of both worlds. With a vast library of songs and podcasts, users can dive into an immersive audio experience tailored to their tastes.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete Features of the Application</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Vast Music Library:</strong> Access millions of songs from various genres and artists.</li>
                    <li><strong>Podcast Directory:</strong> Explore a wide range of podcasts on topics you love.</li>
                    <li><strong>Offline Listening:</strong> Download music and podcasts for offline access.</li>
                    <li><strong>Personalized Playlists:</strong> Create and share custom playlists with friends.</li>
                    <li><strong>Smart Recommendations:</strong> Get tailored content suggestions based on your listening habits.</li>
                    <li><strong>Live Radio Stations:</strong> Stream live radio from around the world.</li>
                    <li><strong>Cross-Platform Sync:</strong> Seamlessly switch between devices without losing your place.</li>
                    <li><strong>Interactive Features:</strong> Rate, comment, and share your favorite tracks and episodes.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                    <div className="bg-gray-100 p-4 rounded shadow">React Native</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Node.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">Express.js</div>
                    <div className="bg-gray-100 p-4 rounded shadow">MongoDB</div>
                </div>
            </section>

            {/* Why Choose This Technology */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose This Technology</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    We opted for React Native to build a cross-platform mobile application, allowing us to reach both iOS and Android users effectively. The backend is powered by Node.js and Express.js, offering scalability and performance, while MongoDB manages our dynamic data requirements.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Content Licensing</h3>
                        <p className="text-gray-600">
                            Securing music and podcast licenses was challenging. We established partnerships with content providers to ensure compliance.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">User Retention</h3>
                        <p className="text-gray-600">
                            To improve user retention, we introduced personalized content and engaging features like social sharing.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Performance Optimization</h3>
                        <p className="text-gray-600">
                            Optimizing streaming quality across various network conditions required extensive testing and adaptive streaming techniques.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer:</strong> Designed an intuitive interface for an enhanced user experience.</li>
                    <li><strong>2 Frontend Developers:</strong> Developed the mobile application with a focus on performance and responsiveness.</li>
                    <li><strong>2 Backend Developers:</strong> Built and maintained the server-side logic and database management.</li>
                    <li><strong>1 Database Administrator:</strong> Managed database operations and ensured data integrity.</li>
                    <li><strong>1 Software Quality Assurance (SQA):</strong> Ensured application reliability through rigorous testing protocols.</li>
                    <li><strong>1 Project Manager (Your Role):</strong> Oversaw project timelines and facilitated communication among team members.</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Testimonials</h2>
                <div className="space-y-5 max-w-3xl">
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“This app has completely changed how I listen to music and podcasts. The user experience is fantastic!”</p>
                        <p className="font-semibold text-gray-800">— Sarah Johnson, User</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <p className="text-gray-600 italic">“I love the smart recommendations. It always knows what I want to listen to!”</p>
                        <p className="font-semibold text-gray-800">— Mark Davis, User</p>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Conclusion</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our Music Streaming & Podcast Application offers an all-in-one solution for music lovers and podcast enthusiasts alike. Join us for a unique auditory experience that keeps you engaged and entertained.
                </p>
            </section>
        </div>
    );
};

export default MusicStreamingPodcastApp;
