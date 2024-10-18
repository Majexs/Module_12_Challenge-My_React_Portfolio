// Importing all the necessary Dependencies & Components
import NavBar from './NavBar';

// The root function of the app - includes the Header, Body (nagivable through the NavBar), & Footer
export default function Header({
    currentPage, handlePageChange
}) {
    return (
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    );
}