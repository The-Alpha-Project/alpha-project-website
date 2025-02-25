import React from 'react';
import {
  Root, Head, Routes,
} from 'react-static';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Router } from './components/Router';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BackgroundContainer from './containers/BackgroundContainer';

// Styles
import './app.scss';

export default function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfhfpYcAAAAADrn5icXGPExVLjdAy6HIwImZqLd"
    >
      <Root>
        <Head>
          <meta charSet="utf-8" />
          <title>The Alpha Project</title>
        </Head>
        <Hero />
        <Navigation />
        <BackgroundContainer>
          <div className="content">
            <React.Suspense fallback={<em>Loading</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
        </BackgroundContainer>
      </Root>
    </GoogleReCaptchaProvider>
  );
}
