import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PortfolioProvider } from '../context/context';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { hero, about, skills, experience, projects, contact, footer } from '../mock/data';

export default function Main() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
        setTimeout(() => setIsLoading(false), 100);
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ss497254 | PortFolio</title>
                <html lang="en" />
                <meta name="description" content="Portfolio Website" />
                <link rel="shortcut icon" href="favicon.png" />
            </Helmet>
            {isLoading ? (
                <div className="peeek-loading" id="loading">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            ) : (
                <>
                    <Header />
                    <PortfolioProvider
                        value={{
                            hero,
                            about,
                            skills,
                            experience,
                            projects,
                            contact,
                            footer,
                            isDesktop,
                            isMobile,
                        }}
                    >
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Contact />
                        <Footer />
                    </PortfolioProvider>
                </>
            )}
        </>
    );
}
