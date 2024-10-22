import { ReactNode } from 'react';
import './globals.css'; // Import global styles here
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Import the Sidebar component

// Metadata for SEO purposes
export const metadata = {
  title: 'My Portfolio - Full-Stack Developer',
  description: 'A showcase of my projects, skills, and contact details as a full-stack developer',
  keywords: ['Portfolio', 'Full Stack Developer', 'Web Developer'],
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <div className="content-wrapper">
            <Sidebar /> {/* Add Sidebar */}
            <main role="main" className="main-content">
              <Header />
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
