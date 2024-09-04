import React, { useEffect, useRef } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Typed from 'typed.js';
import '../css/atlas-home-page.css';
import GitHubIcon from '@site/static/img/github-mark-white.svg';

function CustomHomepage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Simple!', 'Fun!', 'Straightfordard!'],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="custom-homepage-wrapper">
      <div className="custom-homepage-container">
        <div className="text-content">
          <h1 id="mcu-development" className="top-text">MCU Development Made</h1>
          <h1><span ref={typedRef} className="auto-type"></span></h1>
          <h1 id="introductory-resource" className="bottom-text">An introductory resource to MCU programming with PlatformIO</h1>
          <div className="button-container">
            <Link to="/docs/intro" className="custom-button primary-button">
              Get Started
            </Link>
            <Link to="/docs/category/labs" className="custom-button secondary-button github-button">
              <GitHubIcon className="button-icon" />
              Github
            </Link>
          </div>
        </div>
        <div className="image-content">
          <img src="img/vscode-platformio.png" alt="MCU Development Illustration" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An introductory resource to MCU programming with PlatformIO">
      <main>
        <CustomHomepage />
      </main>
    </Layout>
  );
}