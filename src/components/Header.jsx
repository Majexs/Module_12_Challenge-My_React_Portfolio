// Importing all the necessary Dependencies & Components
import { useState} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// The root function of the app - includes the Header, Body (nagivable through the NavBar), & Footer
export default function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <h1>SwanCode: A React Porfolio by James Swanson</h1>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
}