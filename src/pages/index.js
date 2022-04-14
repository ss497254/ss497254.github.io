import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ss497254 | PortFolio</title>
        <html lang="en" />
        <meta name="description" content="Portfolio Website" />
      </Helmet>
      <App />
    </>
  );
};
