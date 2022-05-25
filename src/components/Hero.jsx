import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const Header = ({}) => {
    const { hero, isDesktop, isMobile, footer } = useContext(PortfolioContext);
    const { networks } = footer;
    const { title, subtitle } = hero;

    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={200}
                    distance="30px"
                >
                    <div id="Clouds">
                        <div className="Cloud Foreground"></div>
                        <div className="Cloud Background"></div>
                        <div className="Cloud Foreground"></div>
                        <div className="Cloud Background"></div>
                        <div className="Cloud Foreground"></div>
                        <div className="Cloud Background"></div>
                        <div className="Cloud Background"></div>
                        <div className="Cloud Foreground"></div>
                        <div className="Cloud Background"></div>
                        <div className="Cloud Background"></div>
                        <div className="hero__social-links">
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
                    </div>
                    <h1 className="hero-title">
                        Hi{' '}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                        {title || ', my name is'}{' '}
                        <span className="text-color-main">Saurabh Singh</span>
                        <br />
                        <span className="hero-subtitle">
                            {subtitle || "I'm a FullStack Web Developer."}
                        </span>
                    </h1>
                </Fade>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={400}
                    distance="30px"
                >
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero mr-2">
                            <Link to="about" smooth duration={1000}>
                                Know more
                            </Link>
                        </span>
                        <span className="cta-btn cta-btn--hero ml-2">
                            <Link to="projects" smooth duration={1000}>
                                See my work!
                            </Link>
                        </span>
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Header;
