import Header from "./components/Header";
import { useState } from 'react';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const handlePageChange = (page) => setCurrentPage(page);
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
    return (
        <div className="main-header-menu">
            <h1>SwanCode: A React Porfolio by James Swanson</h1>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <main classname='main-container mx-3'>{renderPage()}</main>
            <Footer />
        </div>
    );
}

export default App;