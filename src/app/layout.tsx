import { ReactNode } from 'react';
import './globals.css';  // Import global styles here
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Header />
          <main role="main" className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
