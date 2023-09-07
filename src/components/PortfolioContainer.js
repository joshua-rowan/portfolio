import React, { useState } from "react";
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Header from './Header';
import Footer from './Footer';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavTabs />
            {renderPage()}
            <Footer />
        </div>
    )
};