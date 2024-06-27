import React from 'react';
import './LandingPage.scss';
import Nav from '../../Components/Nav/Nav';

const LandingPage: React.FC = () => {
  return (
    <>
      <Nav active="home" />
      <div className="container page-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="content">
          <h1>
            Autofilly
          </h1>
          <p className="description">
            Fill forms with data at the click of a button.
          </p>
          <div className="buttons">
            <a
              href="https://chromewebstore.google.com/detail/autofilly/kipeljdmmfapdfmklhibgedbgppgaeom"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome
            </a>
            <a
              href="https://github.com/chaz9127/autofilly"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            <a
              href="/test"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test Form
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
