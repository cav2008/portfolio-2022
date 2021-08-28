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
      <h2 className="font-bold text-2xl mb-2.5">Key Skills</h2>
      <p className="text-lg">Some of the skills I currently have, but will gain lots more.</p>
    </div>

    <div className="">
      <Card>
        <div className="pt-4 pb-8 px-4 mb-5 text-center">
          <div className="mb-12">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={htmlLogo} width="25" height="25" alt="html logo" />
            </span>
            <p className="font-bold inline-block">HTML &amp; CSS</p>
          </div>
          <ul>
            <li>HTML5</li>
            <li>Tailwind</li>
            <li>JSX</li>
            <li>Handlebars</li>
            <li>CSS3</li>
            <li>Less</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="pt-4 pb-8 px-4 mb-5 text-center">
          <div className="mb-12">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={jsLogo} width="25" height="25" alt="javascript logo" />
            </span>
            <p className="font-bold inline-block">JavaScript</p>
          </div>
          <ul>
            <li>ES5/6</li>
            <li>React</li>
            <li>Redux</li>
            <li>Next</li>
            <li>Node</li>
            <li>Socket.io</li>
            <li>JQuery</li>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
        </div>
      </Card>
      <Card>
        <div className="pt-4 pb-8 px-4 mb-5 text-center">
          <div className="mb-12">
            <span className="inline-block mr-2.5 align-middle">
              <Image src={webpackLogo} width="30" height="30" alt="build logo" />
            </span>
            <p className="font-bold inline-block">Build</p>
          </div>
          <ul>
            <li>Webpack</li>
            <li>Babel</li>
            <li>ESLint</li>
            <li>NPM</li>
            <li>Gulp</li>
            <li>Grunt</li>
          </ul>
        </div>
      </Card>
    </div>
  </Wrapper>
);

export default Skill;
