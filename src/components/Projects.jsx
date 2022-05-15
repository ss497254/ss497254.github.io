import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';
import ProjectImg from './Image/ProjectImg';
// import SolidGitHub from '../Icons/SolidGitHub';

const Projects = () => {
    const { projects, isDesktop, isMobile } = useContext(PortfolioContext);

    return (
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Title title="Projects" color="black" />
                    {projects.map((project, index) => {
                        const { title, info, info2, url, repo, img, id, tags } = project;

                        return (
                            <Row className="my-5 py-5" key={index}>
                                <Col lg={6} sm={12}>
                                    <Fade
                                        left={isDesktop}
                                        bottom={isMobile}
                                        duration={1000}
                                        delay={500}
                                        distance="30px"
                                    >
                                        <div className="project-wrapper__text">
                                            <h2 className="project-wrapper__text-title">
                                                {title || 'Project Title'}
                                            </h2>
                                            <div>
                                                <p className="text-justify">{info}</p>
                                                <p className="mb-4">{info2 || ''}</p>
                                            </div>
                                            <div className="my-5">
                                                {tags.map((tag) => (
                                                    <div className="cta-btn cta-btn--tags m-2">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cta-btn cta-btn--hero py-3 px-5"
                                                href={url}
                                            >
                                                Visit
                                            </a>
                                            {repo && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn text-color-main px-4 ml-3"
                                                    href={repo}
                                                >
                                                    Github
                                                </a>
                                            )}
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={6} sm={12}>
                                    <Fade
                                        right={isDesktop}
                                        bottom={isMobile}
                                        duration={1000}
                                        delay={1000}
                                        distance="30px"
                                    >
                                        <div className="project-wrapper__image">
                                            <a
                                                href={url || '#!'}
                                                target="_blank"
                                                aria-label="Project Link"
                                                rel="noopener noreferrer"
                                            >
                                                <Tilt
                                                    options={{
                                                        reverse: false,
                                                        max: 8,
                                                        perspective: 1000,
                                                        scale: 1,
                                                        speed: 300,
                                                        transition: true,
                                                        axis: null,
                                                        reset: true,
                                                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                                                    }}
                                                >
                                                    <div data-tilt className="thumbnail rounded">
                                                        <ProjectImg alt={title} filename={img} />
                                                    </div>
                                                </Tilt>
                                            </a>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
