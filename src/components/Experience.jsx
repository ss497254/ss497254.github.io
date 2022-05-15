import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';
import Location from '../Icons/Location';

const Projects = () => {
    const { experience } = useContext(PortfolioContext);

    return (
        <section id="experience">
            <Container className="mb-5 pb-5">
                <Title title="Experience" />
                <div className="experience-timeline mx-auto">
                    <Fade bottom duration={1500} delay={300}>
                        {experience.map((data, index) => {
                            if (data === 'last') return <div />;
                            return (
                                <div className="vtimeline-point" key={index}>
                                    <div className="vtimeline-icon d-flex justify-content-center flex-column align-items-center">
                                        <Location size={35} />
                                    </div>
                                    <div className="vtimeline-block">
                                        <span className="vtimeline-date">{data.timePeriod}</span>
                                        <div className="vtimeline-content">
                                            <h3>{data.employerName}</h3>
                                            <h4>{data.jobTitle}</h4>
                                            <p>{data.content}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Fade>
                </div>
            </Container>
        </section>
    );
};

export default Projects;
