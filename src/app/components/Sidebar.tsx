import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa'; // Icons from react-icons
import profilePicture from '../../assets/images/rasheduzzaman.jpg';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header justify-center">
                <img src="https://avatars.githubusercontent.com/u/8583051?v=4" alt="Profile" className="profile-picture" />
                <h1>Rasheduzzaman</h1>
                <p>Tech Lead Officer</p>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li><a href="/"><FaHome /> Home</a></li>
                    <li><a href="/about"><FaUser /> About Me</a></li>
                    <li><a href="/projects"><FaProjectDiagram /> Projects</a></li>
                    <li><a href="/skills"><FaCode /> Skills</a></li>
                    <li><a href="/contact"><FaEnvelope /> Contact</a></li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <h2>Find me on</h2>
                <div className="social-links">
                    <a href="https://linkedin.com/in/jmrashed" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/jmrashed" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </div>
                <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">
                    Download Resume
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
