
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="header-content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqgDQWDVIpy0zEP3s2L29K5FF-crSIlZHOg&s" alt="Shiv" className="side-logo left" />
                <img src="https://akcabs.site/wp-content/uploads/2022/06/TOURS-TRAVELS-1-1.png" alt="Cab Services Logo" className="center-logo" />
                <img src="https://png.pngtree.com/png-vector/20240106/ourmid/pngtree-lord-bal-ganesh-beautiful-a-chaturdashi-baby-ganesha-look-happy-chaturthi-png-image_11419959.png" alt="Ganesh" className="side-logo right" />
            </div>
            <nav className="navbar">
                {/* Desktop Links - Always visible */}
                <Link className="nav-link1" to="/" >Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/tour-packages">Tour Packages</Link>
                <Link className="nav-link" to="/outstation-cabs">Outstation Cabs</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                
                <button onClick={toggleMenu} className="nav-toggle-button">
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                {/* Mobile Links - Hidden initially, visible when menu is open */}
                {isOpen && (
                    <div className="mobile-nav">
                        {/* <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link> */}
                        <Link className="nav-link pl-4" to="/about" onClick={toggleMenu}>About</Link>
                        <Link className="nav-link" to="/tour-packages" onClick={toggleMenu}>Tour Packages</Link>
                        <Link className="nav-link" to="/outstation-cabs" onClick={toggleMenu}>Outstation Cabs</Link>
                        <Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
