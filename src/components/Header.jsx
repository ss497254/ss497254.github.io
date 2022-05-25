import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const Header = () => {
    const btnRef = useRef(null);
    const navCollapsed = useRef(null);

    const [isScrolled, setisScrolled] = useState(false);
    const [isCollapsed, setisCollapsed] = useState(false);

    const handleCollapse = () => {
        if (isCollapsed) btnRef?.current?.click();
    };

    function changeBackground() {
        if (window.scrollY < 400) {
            setisScrolled(false);
        } else {
            setisScrolled(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    useOnClickOutside(navCollapsed, handleCollapse, btnRef);

    return (
        <Navbar
            className={`header-nav${isScrolled ? '-scrolled' : ' '} light`}
            fixed="top"
            collapseOnSelect
            style={{ backgroundColor: isScrolled ? (isCollapsed ? '#00a2ff' : '') : 'white' }}
            expand="xl"
        >
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
                onClick={() => setisCollapsed(!isCollapsed)}
                style={{
                    height: isScrolled ? 70 : 90,
                    fontSize: '1.8rem',
                    marginRight: 25,
                    border: 'none',
                }}
                ref={btnRef}
            />
            <Navbar.Collapse
                id="responsive-navbar-nav"
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: isCollapsed ? (isScrolled ? '' : 'white') : 'transparent',
                    backdropFilter: 'none',
                }}
                ref={navCollapsed}
            >
                <Nav style={{ color: 'black' }}>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="hero"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        Home
                    </Link>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="about"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        About
                    </Link>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="skills"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        Skills
                    </Link>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="experience"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        Experience
                    </Link>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="projects"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        Projects
                    </Link>
                    <Link
                        className={
                            (isScrolled && isCollapsed ? 'blurred ' : '') +
                            'px-2 nav-link ' +
                            (!isCollapsed ? 'mr-3' : '')
                        }
                        to="contact"
                        smooth
                        duration={1000}
                        onClick={handleCollapse}
                    >
                        Contact
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
