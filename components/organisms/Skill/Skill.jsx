import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Card from '@components/atoms/Card';

import htmlLogo from '@images/html-logo.png';
import jsLogo from '@images/javascript-logo.png';
import webpackLogo from '@images/webpack-logo.png';

const Skill = () => (
  <Wrapper>
    <div className="text-center mb-5 px-4">
      <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl">Key Skills</h2>
      <p className="text-lg">Some of the skills I currently have, but will gain lots more.</p>
    </div>

    <div className="md:grid md:grid-cols-3 md:gap-x-4">
      <Card>
        <div className="py-8 px-4 mb-5 text-center">
          <div className="mb-10">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={htmlLogo} width="25" height="25" alt="html logo" />
            </span>
            <p className="font-bold text-xl inline-block">HTML &amp; CSS</p>
          </div>
          <ul className="text-lg">
            <li className="mb-1">HTML5</li>
            <li className="mb-1">Tailwind</li>
            <li className="mb-1">JSX</li>
            <li className="mb-1">Handlebars</li>
            <li className="mb-1">CSS3</li>
            <li className="mb-1">Less</li>
            <li className="mb-1">Sass</li>
            <li className="mb-1">Bootstrap</li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="py-8 px-4 mb-5 text-center">
          <div className="mb-10">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={jsLogo} width="25" height="25" alt="javascript logo" />
            </span>
            <p className="font-bold text-xl inline-block">JavaScript</p>
          </div>
          <ul className="text-lg">
            <li className="mb-1">ES5/6</li>
            <li className="mb-1">React</li>
            <li className="mb-1">Redux</li>
            <li className="mb-1">Next</li>
            <li className="mb-1">Node</li>
            <li className="mb-1">Socket.io</li>
            <li className="mb-1">JQuery</li>
            <li className="mb-1">Jest</li>
            <li className="mb-1">Cypress</li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="py-8 px-4 mb-5 text-center">
          <div className="mb-10">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={webpackLogo} width="30" height="30" alt="build logo" />
            </span>
            <p className="font-bold text-xl inline-block">Build</p>
          </div>
          <ul className="text-lg">
            <li className="mb-1">Webpack</li>
            <li className="mb-1">Babel</li>
            <li className="mb-1">ESLint</li>
            <li className="mb-1">NPM</li>
            <li className="mb-1">Gulp</li>
            <li className="mb-1">Grunt</li>
          </ul>
        </div>
      </Card>
    </div>
  </Wrapper>
);

export default Skill;
