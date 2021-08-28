import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Button from '@components/atoms/Button';

import starship from '@images/starship.png';
import stars from '@images/stars.png';

const Hero = () => (
  <section className="relative bg-gradient-to-tr from-blue-800 via-violet-600 to-indigo-800 opacity-90">
    <div
      className="absolute -z-10 w-full h-full bg-contain opacity-70"
      style={{ backgroundImage: `url(${stars.src})` }}
    />
    <Wrapper>
      <div className="pt-8 pb-32 px-4">
        <div className="text-center lg:text-right mb-14">
          <Button text="Download C.V." />
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image src={starship} alt="star ship" width="70" height="77" />
          </div>
          <h1 className="font-bold text-white text-4xl mb-5">Front-end Web Developer</h1>
          <p className="font-medium text-white text-2xl">I build for fun and for work</p>
        </div>
      </div>
    </Wrapper>
  </section>
);

export default Hero;
