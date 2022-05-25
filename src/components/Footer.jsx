import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';
import UpArrow from '../Icons/UpArrow';

const Footer = () => {
    const { footer } = useContext(PortfolioContext);
    const { networks } = footer;

    return (
        <footer className="footer navbar-static-bottom">
            <Container>
                <Link to="hero" smooth duration={1000}>
                    <span className="back-to-top my-5">
                        <UpArrow size={45} />
                    </span>
                </Link>
                <div className="social-links">
                    {networks &&
                        networks.map((network) => {
                            const { id, name, url, icon } = network;
                            return (
                                <a
                                    key={id}
                                    href={url || '#'}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={name}
                                    style={{ borderRadius: '50%' }}
                                >
                                    {icon}
                                </a>
                            );
                        })}
                </div>
                <p className="footer__text">
                    © {new Date().getFullYear()} - Made With 💜 by&nbsp;
                    <a
                        href="https://github.com/ss497254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-weight-bolder"
                    >
                        Saurabh Singh
                    </a>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
