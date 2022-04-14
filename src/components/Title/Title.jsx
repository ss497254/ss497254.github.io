import React from 'react';
import Fade from 'react-reveal/Fade';

const Title = ({ title }) => (
    <Fade bottom duration={1000} delay={300} distance="0px">
        <h2 className="section-title">{title}</h2>
    </Fade>
);

export default Title;
