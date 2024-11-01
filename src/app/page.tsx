import React from 'react';
import Link from 'next/link';
import { FaPhp, FaNodeJs, FaPython, FaDatabase, FaLink } from 'react-icons/fa';
 
const CVPage: React.FC = () => {
    return (
        <div className="flex antialiased">
            <main className="flex-1  mx-auto">
                <h1 className="text-3xl font-bold mb-4">Curriculum Vitae</h1>

                <section className="mb-8" id='overview'>
                    <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
                    <p>
                        Results-driven Tech Lead with 7+ years of experience in full-stack development, team leadership, and project management.
                        Skilled in delivering scalable, high-performance solutions using PHP, Node.js, Laravel, and React.
                        Proven ability to improve system architecture, optimize application performance, and mentor teams.
                        Seeking a leadership role to drive innovation and deliver impactful software solutions.
                    </p>
                </section>

                <section id="skills" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <Link className="text-blue-500 hover:text-blue-700" href="/php">
                                <FaPhp className="inline-block mr-1" /> PHP
                            </Link>
                            , Laravel, CodeIgniter |
                            <Link className="text-blue-500 hover:text-blue-700" href="/nodejs">
                                <FaNodeJs className="inline-block mr-1" /> NodeJs
                            </Link>
                            , Express, Fastify |
                            <Link className="text-blue-500 hover:text-blue-700" href="/python">
                                <FaPython className="inline-block mr-1" /> Python
                            </Link>
                            , FastAPI, Flask |
                            <Link className="text-blue-500 hover:text-blue-700" href="/mysql">
                                <FaDatabase className="inline-block mr-1" /> MySQL
                            </Link>
                            ,
                            <Link className="text-blue-500 hover:text-blue-700" href="/nosql">
                                <FaDatabase className="inline-block mr-1" /> NoSQL
                            </Link>
                            |
                            <Link className="text-blue-500 hover:text-blue-700" href="/restapi">
                                <FaLink className="inline-block mr-1" /> REST API
                            </Link>
                            , GraphQL
                        </li>
                        <li>HTML, CSS, Bootstrap, SASS, Tailwind CSS | UI/UX Design, Figma | System Design</li>
                        <li>cPanel, WHM Panel, VPS, Apache, Nginx | Monolithic Services | Docker</li>
                        <li>Skype, Slack, Asana, Trello, Jira | Clockify, RescueTime | Git, GitHub, GitLab, Bitbucket | Selenium, Postman, Jmeter | RabbitMQ, Kafka</li>
                    </ul>
                </section>


                <section className="mb-8" id="experience">
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>

                    {/* Experience Details */}
                    <ExperienceItem
                        title="Tech Lead"
                        company="Onest Tech LLC"
                        location="Banani, Dhaka, BD"
                        dates="09/2022 - Current"
                        responsibilities={[
                            "Lead a team of 36 developers in making critical technical decisions and implementing architectural strategies using PHP, Node, Python, JavaScript, jQuery, React, and various databases.",
                            "Oversee the successful development and deployment of full-stack applications, resulting in a 10% increase in application performance.",
                            "Architect and maintain RESTful APIs and GraphQL endpoints, improving data retrieval and exchange.",
                            "Mentored 40 developers, increasing team productivity and code quality."
                        ]}
                    />

                    <ExperienceItem
                        title="Project Manager"
                        company="Onest Tech LLC"
                        location="Banani, Dhaka, BD"
                        dates="01/2021 - 08/2022"
                        responsibilities={[
                            "Expertise in project management methodologies, including Agile, Scrum, Waterfall, and Kanban.",
                            "Strong leadership skills to guide cross-functional teams and manage stakeholder communications."
                        ]}
                    />

                    <ExperienceItem
                        title="Project Manager"
                        company="Spondon IT"
                        location="Panthapath, Dhaka, BD"
                        dates="04/2019 - 12/2020"
                        responsibilities={[
                            "Define project scope, objectives, and deliverables using PHP, Node, and Python."
                        ]}
                    />

                    <ExperienceItem
                        title="Senior Software Engineer"
                        company="Spondon IT"
                        location="Panthapath, Dhaka, BD"
                        dates="10/2017 - 03/2019"
                        responsibilities={[
                            "Lead the development using PHP (Laravel, CodeIgniter) and JavaScript."
                        ]}
                    />

                    <ExperienceItem
                        title="Software Engineer"
                        company="United Group"
                        location="Gulshan-2, Dhaka, BD"
                        dates="01/2017 - 10/2017"
                        responsibilities={[
                            "Lead end-to-end software development, from designing database schemas to implementing server-side logic."
                        ]}
                    />

                    <ExperienceItem
                        title="Junior Software Engineer"
                        company="United Group"
                        location="Gulshan-2, Dhaka, BD"
                        dates="01/2017 - 10/2017"
                        responsibilities={[
                            "Write, test, and maintain code for software applications using PHP, JavaScript, and MySQL."
                        ]}
                    />

                    <ExperienceItem
                        title="Software Engineer, Intern"
                        company="IWFM, BUET"
                        location="Polashi, Dhaka, BD"
                        dates="06/2016 - 12/2016"
                        responsibilities={[
                            "Assist in designing and developing user-friendly interfaces using HTML, CSS, Bootstrap, and JavaScript."
                        ]}
                    />
                </section>

                <section className="mb-8" id="educations">
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <h3 className="text-xl font-semibold">Bachelor of Science</h3>
                    <p className="text-gray-600">Stamford University Bangladesh, Dhaka, BD | 04/2012 - 04/2016</p>
                    <p>Major in Computer Science & Engineering - CGPA 3.73</p>


                    <h3 className="text-xl font-semibold mt-4">HSC</h3>
                    <p className="text-gray-600">Govt. K.C Collage, Jhenaidah | 2014 - 04/201










































































































































































                        
                    </p>
                    <p>Science Section</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>HRM - Human Resource Management System [ Microservices, Node.js, Go, Python, Kafka, ELK, Redis, Docker - Ongoing ]</li>
                        <li>LMS - Learning Management System [ Laravel, jQuery, Bootstrap, REST API ]</li>
                        <li>CRM - Client Relation Management System [ Laravel, jQuery, Bootstrap, REST API ]</li>
                        <li>School - School Management System [ Laravel, HTML, CSS, Bootstrap, JavaScript, jQuery ]</li>
                        <li>News - Online News Portal [ Node.js, Fastify, NoSQL, MongoDB, Laravel, HTML, CSS, jQuery ]</li>
                        <li>Ecommerce - Online Marketplace with Multi Vendor [ Next.js, Node.js, MongoDB, Laravel, MySQL ]</li>
                        <li>FaceAi - Face Recognition [ Python, OpenCV ]</li>
                        <li>ExpenseTracker - Mobile Expense Tracking [ Laravel, HTML, Tailwind CSS, Firebase ]</li>
                        <li>Portfolio Website [ React, HTML, CSS, JavaScript ]</li>
                        <li>Social Media Dashboard [ React.js, GraphQL, Node.js, MongoDB ]</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Amazon Web Services (AWS) Certified Solutions Architect - Associate</li>
                        <li>Scrum Master Certification</li>
                        <li>Oracle Certified Professional, Java SE 8 Programmer</li>
                        <li>Microsoft Certified: Azure Developer Associate</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Languages</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>English (Fluent)</li>
                        <li>Bangla (Native)</li>
                        <li>Arabic (Intermediate)</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

// Reusable Experience Item Component
const ExperienceItem: React.FC<{
    title: string;
    company: string;
    location: string;
    dates: string;
    responsibilities: string[];
}> = ({ title, company, location, dates, responsibilities }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{company} | {location} | {dates}</p>
            <ul className="list-disc ml-6">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CVPage;
