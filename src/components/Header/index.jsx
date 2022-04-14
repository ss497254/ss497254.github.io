import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

const Header = ({ variant = 'light' }) => {
    function changeBackground() {
        let header = document.getElementsByClassName('header-nav')[0];
        let toggler = document.getElementsByClassName('navbar-toggler')[0];
        if (window.scrollY < 300) {
            if (header) {
                toggler.style.height = '80px';
                header.classList.remove('header-nav-scrolled');
            }
        } else {
            if (header) {
                toggler.style.height = '65px';
                header.classList.add('header-nav-scrolled');
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    const [collapseClass, setcollapseClass] = useState('mr-4');

    const handleTogglerClick = () => {
        if (collapseClass === '') {
            setcollapseClass('mr-4');
        } else {
            setcollapseClass('');
        }
    };

    return (
        <Navbar className={`header-nav ${variant}`} fixed="top" collapseOnSelect expand="xl">
            <Fade>
                <Link
                    to="hero"
                    className="brand-name ml-5 navbar-brand"
                    smooth
                    duration={1000}
                    style={{ cursor: 'pointer' }}
                >
                    <h1 id="main-logo">{'<ss497254 />'}</h1>
                </Link>
            </Fade>
            <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={handleTogglerClick}
                style={{ height: 80, fontSize: '1.8rem', marginRight: 20, border: 'none' }}
            />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                style={{
                    justifyContent: 'flex-end',
                    backgroundImage:
                        collapseClass === ''
                            ? 'linear-gradient(90deg, $secondary-color 0%, $primary-color 100%)'
                            : '',
                }}
            >
                <Fade>
                    <Nav>
                        <Link
                            className={'px-2 nav-link ' + collapseClass}
                            to="hero"
                            smooth
                            duration={1000}
                        >
                            Home
                        </Link>
                        <Link
                            className={'px-2 nav-link ' + collapseClass}
                            to="about"
                            smooth
                            duration={1000}
                        >
                            About
                        </Link>
                        <Link
                            className={'px-2 nav-link ' + collapseClass}
                            to="projects"
                            smooth
                            duration={1000}
                        >
                            Projects
                        </Link>
                        <Link
                            className={'px-2 nav-link ' + collapseClass}
                            to="contact"
                            smooth
                            duration={1000}
                        >
                            Contact
                        </Link>
                    </Nav>
                </Fade>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
