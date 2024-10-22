import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'; // Icons from react-icons
import profilePicture from '../../assets/images/rasheduzzaman.jpg';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <h1>John Doe</h1>
                <p>Full-Stack Developer</p>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#home"><FaHome /> Home</a></li>
                    <li><a href="#about"><FaUser /> About Me</a></li>
                    <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
                    <li><a href="#skills"><FaCode /> Skills</a></li>
                    <li><a href="#contact"><FaEnvelope /> Contact</a></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <h2>Find me on</h2>
                <div className="social-links">
                    <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">
                    <FaFilePdf /> Download Resume
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
