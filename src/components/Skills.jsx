import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from './Title';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../context/context';

function Skills() {
    const { skills, isMobile } = React.useContext(PortfolioContext);

    return (
        <section id="skills">
            <Container className="w-100">
                <div className="project-wrapper">
                    <Title title="Skills" color="black" />
                    <div
                        className={
                            'about-wrapper__info mb-5 font-weight-bold pb-5 ' +
                            (isMobile ? 'mx-5' : '')
                        }
                    >
                        <Fade top duration={800}>
                            <p className="about-wrapper__info-text h2">{`These are the languages and framework that I use.`}</p>
                        </Fade>
                    </div>
                    <Row style={{ justifyContent: 'center', gap: 40 }}>
                        {skills.map((skill, idx) => (
                            <Col xs={12} md={6} lg={4} key={idx} style={{ maxWidth: 300 }}>
                                <Fade bottom duration={1000} delay={300}>
                                    <div className="skill-wrapper d-flex flex-column">
                                        <div className="skill-icon py-3 mx-auto">{skill.icon}</div>
                                        <div className="skill-title">{skill.title}</div>
                                    </div>
                                </Fade>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Skills;
