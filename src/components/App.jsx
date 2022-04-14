import React from 'react';
import Header from './Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { hero, about, projects, contact, footer } from '../mock/data';

function App() {
    return (
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </PortfolioProvider>
    );
}

export default App;
