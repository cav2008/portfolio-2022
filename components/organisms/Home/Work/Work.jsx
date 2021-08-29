import React from 'react';

import Wrapper from '@components/atoms/Wrapper';

import stars from '@images/stars2.png';

const Work = () => (
  <>
    <div className="lg:-mt-14">
      <div className="relative bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-800 opacity-90">
        <div
          className="absolute -z-10 w-full h-full bg-contain bg-repeat-y bg-center opacity-70"
          style={{ backgroundImage: `url(${stars.src})` }}
        />
        <Wrapper>
          <div className="text-center mb-5 px-4 pt-12 pb-5 lg:pt-44 lg:pb-20">
            <h2 className="font-bold text-white text-2xl mb-2.5 lg:text-4xl">Work Experiences</h2>
            <p className="text-lg text-white">Companies I have worked with in my career</p>
          </div>
        </Wrapper>
      </div>
    </div>
  </>
);

export default Work;
