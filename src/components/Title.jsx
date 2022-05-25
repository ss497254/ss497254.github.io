import React from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../context/context';

const Line = ({ className, color, otherProps }) => (
    <svg
        className={className}
        {...otherProps}
        width="300"
        height="100%"
        viewBox="0 0 250 2"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 1H250" stroke={color} />
    </svg>
);

const Title = ({ title, color = 'white' }) => {
    const { isDesktop } = React.useContext(PortfolioContext);
    return (
        <Fade left duration={1000} distance="250px">
            <div className="d-flex justify-content-center title-wrapper">
                <div className="section-title">{title}</div>
                {isDesktop ? (
                    <div>
                        <Line className="mx-5 px-5" color={color} />
                    </div>
                ) : null}
            </div>
        </Fade>
    );
};

export default Title;
