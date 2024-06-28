import React from 'react';
import './LandingPage.scss';
import Nav from '../../Components/Nav/Nav';

const LandingPage: React.FC = () => {
  return (
    <>
      <Nav active="home" />
      <div className="landing-page-container page-container">
        <div>
          <video className="demo-video" controls>
            <source src="/video/Autofilly-example.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content-container">
          <div className="content-description">
            <div className="content">
              <h1>
                Autofilly
              </h1>
              <p className="description">
                You no longer need to type gibberish into your forms while developing. At the click of a button, Autofilly will fill form inputs with random, javascript generated data. Or you can use your OpenAI api key for human readable values.
              </p>
            </div>
          </div>
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
