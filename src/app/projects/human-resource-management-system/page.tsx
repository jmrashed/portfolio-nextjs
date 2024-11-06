import React from 'react';

export default function HRMCaseStudy() {
    return (
        <div className="container mx-auto px-6 lg:px-8 py-12 space-y-16">
            {/* Page Title */}
            <section className="text-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Human Resource Management (HRM) System
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A comprehensive solution to streamline human resource operations and enhance organizational efficiency.
                </p>
            </section>

            {/* Why Need HRM */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why HRM is Essential</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    In modern organizations, managing human resources is vital for ensuring productivity, regulatory compliance, and employee satisfaction. An efficient HRM system helps automate administrative tasks, centralize employee information, and support data-driven decision-making.
                </p>
            </section>

            {/* Complete Features */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Complete HRMS Features</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>Employee Information Management</strong>: Centralized repository for personal, job, and contact details of employees.</li>
                    <li><strong>Recruitment and Applicant Tracking</strong>: Manage job postings, track applicants, schedule interviews, and manage hiring workflows.</li>
                    <li><strong>Onboarding and Offboarding</strong>: Structured onboarding for new hires and offboarding workflows to handle employee exits.</li>
                    <li><strong>Attendance and Time Tracking</strong>: Monitor employee attendance, track work hours, overtime, and manage shift schedules.</li>
                    <li><strong>Leave Management</strong>: Easy leave request, approval, and tracking system with custom leave policies.</li>
                    <li><strong>Payroll Management</strong>: Automated payroll calculations, tax deductions, and benefits administration, integrated with attendance data.</li>
                    <li><strong>Performance Appraisal</strong>: Set performance goals, conduct reviews, provide feedback, and track key performance indicators.</li>
                    <li><strong>Learning and Development</strong>: Track employee training, certifications, and professional development plans.</li>
                    <li><strong>Employee Self-Service Portal</strong>: Empower employees to view pay slips, update personal information, submit requests, and manage leave.</li>
                    <li><strong>Expense Management</strong>: Enable employees to submit expense reports and streamline approval workflows.</li>
                    <li><strong>Benefits Administration</strong>: Manage employee benefits such as health insurance, retirement plans, and other perks.</li>
                    <li><strong>Document Management</strong>: Centralized storage of employee-related documents with secure access controls.</li>
                    <li><strong>Compliance Management</strong>: Ensure regulatory compliance with employment laws and generate reports for audits.</li>
                    <li><strong>Reporting and Analytics</strong>: Real-time dashboards and customizable reports for workforce analytics and strategic planning.</li>
                    <li><strong>Succession Planning</strong>: Identify and prepare employees for leadership roles to ensure organizational continuity.</li>
                    <li><strong>Employee Recognition</strong>: Reward systems and feedback tools to recognize and motivate employees.</li>
                    <li><strong>Health and Safety Management</strong>: Record and manage health incidents, and track compliance with safety protocols.</li>
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
                    Laravel offers a robust backend framework with an elegant syntax, making development fast and efficient. jQuery simplifies DOM manipulation and enhances user interactions, while Bootstrap provides responsive design components, ensuring the application looks great on all devices. For the mobile app, Flutter enables rapid development with a native feel, supporting high performance and smooth animations.
                </p>
            </section>

            {/* Challenges and Solutions */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Challenges and Solutions</h2>
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Data Security and Compliance</h3>
                        <p className="text-gray-600">
                            Protecting sensitive employee data and ensuring compliance with GDPR, HIPAA, and other regulations is crucial. We addressed this by implementing end-to-end encryption, secure authentication, and role-based access controls to ensure data security and privacy.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">Scalability</h3>
                        <p className="text-gray-600">
                            As the organization grows, HRM needs to scale effectively. By utilizing microservices architecture and containerization with Docker and Kubernetes, we ensured the HRM system can handle large-scale data and high user volumes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-800">User Experience</h3>
                        <p className="text-gray-600">
                            Ensuring a user-friendly interface for HR staff and employees was essential. We conducted UI/UX research to design a straightforward and intuitive interface, leveraging React and Tailwind CSS for responsive and accessible design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Team Members</h2>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 max-w-3xl">
                    <li><strong>1 UI/UX Designer</strong>: Responsible for designing an intuitive and engaging user interface.</li>
                    <li><strong>2 Frontend Developers</strong>: Focused on implementing the user interface and enhancing user interactions.</li>
                    <li><strong>2 Backend Developers</strong>: Managed server-side logic and database integration.</li>
                    <li><strong>1 Software Quality Assurance (SQA)</strong>: Ensured the product meets quality standards through testing.</li>
                    <li><strong>1 Team Lead (My Role)</strong>: Oversaw the project, coordinated between teams, and ensured timely delivery.</li>
                </ul>
            </section>

            {/* Why Our HRM System Stands Out */}
            <section className="space-y-4">
                <h2 className="text-3xl font-semibold text-gray-700">Why Our HRM System Stands Out</h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                    Our HRM system is tailored to meet the unique needs of organizations with an intuitive, scalable, and secure platform. With seamless integration capabilities, customizable modules, and extensive analytics, it enables organizations to maximize HR productivity while reducing overhead costs. Enhanced with industry-best security standards, our HRM system offers peace of mind for managing sensitive data.
                </p>
            </section>
        </div>
    );
}
