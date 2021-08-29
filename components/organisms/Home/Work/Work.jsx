import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Details from '@components/atoms/DetailRight';

import stars from '@images/stars2.png';
import btLogo from '@images/bt-logo.png';
import btScreenshot from '@images/bt-screenshot.png';

const Work = () => (
  <>
    <div className="lg:-mt-14">
      <div className="relative bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-800 opacity-90">
        <div
          className="absolute -z-10 w-full h-full bg-contain bg-repeat-y bg-center opacity-70"
          style={{ backgroundImage: `url(${stars.src})` }}
        />
        <Wrapper>
          <div className="text-center px-4 pt-12 pb-5 lg:pt-44 lg:pb-20">
            <h2 className="font-bold text-white text-2xl mb-2.5 lg:text-4xl">Work Experiences</h2>
            <p className="text-lg text-white">Companies I have worked with in my career</p>
          </div>
        </Wrapper>
      </div>
    </div>

    <Details
      logo={<Image src={btLogo} width="150" height="70" alt="bt logo" />}
      paragraph="Worked in BT from 2015 - 2018, did many things. Like launching BT Sport, BT TV, BT mobile. Created the app for EE store employees to sell BT products to their customers."
      webpage={<Image src={btScreenshot} alt="bt webpage screenshot" />}
    />
  </>
);

export default Work;
