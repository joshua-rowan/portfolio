import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                  href="#aboutme"
                  onClick={() => handlePageChange('AboutMe')}
                  className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                About Me</a>
            </li>
        </ul>
    )
}

export default NavTabs;