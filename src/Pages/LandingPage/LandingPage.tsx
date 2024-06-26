import React from 'react';
import './LandingPage.scss';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="content">
        <h1>
          Autofilly
        </h1>
        <p className="description">
          Your one-stop solution for automated form filling.
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
            href="/test"
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
            Test
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
