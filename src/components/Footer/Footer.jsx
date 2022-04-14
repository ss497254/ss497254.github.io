import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Fade } from 'react-reveal';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <Fade bottom duration={500} distance="50px">
      <footer className="footer navbar-static-bottom">
        <Container>
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-3x" aria-hidden="true" />
            </Link>
          </span>
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || '#'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                    style={{ borderRadius: '50%', backgroundColor: '#00cdac' }}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  </a>
                );
              })}
          </div>
          <p className="footer__text">
            © {new Date().getFullYear()} - Made With 💗 by&nbsp;
            <a href="https://github.com/ss497254" target="_blank" rel="noopener noreferrer">
              Saurabh Singh
            </a>
          </p>
        </Container>
      </footer>
    </Fade>
  );
};

export default Footer;
