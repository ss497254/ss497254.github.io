import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import AboutImg from './Image/AboutImg';
import PortfolioContext from '../context/context';

const About = () => {
    const { about, isDesktop, isMobile } = useContext(PortfolioContext);
    const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

    return (
        <section id="about">
            <Container>
                <Title title="About Me" className="mt-5" />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1500}
                            delay={600}
                            distance="30px"
                        >
                            <div className="about-wrapper__image">
                                <AboutImg alt="profile picture" filename={img} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1500}
                            delay={600}
                            distance="30px"
                        >
                            <div className={'about-wrapper__info ' + (isMobile ? 'mx-5' : '')}>
                                <p className="about-wrapper__info-text">{paragraphOne}</p>
                                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                                <p className="about-wrapper__info-text">{paragraphThree}</p>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cta-btn cta-btn--resume py-4 px-5"
                                            href={resume}
                                        >
                                            Resume
                                        </a>
                                    </span>
                                )}
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
