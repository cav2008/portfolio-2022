import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import ButtonLink from '@components/atoms/Button/variants/ButtonLink';

import starship from '@images/starship.png';
import stars from '@images/stars.png';

const Hero = () => (
  <div className="relative bg-gradient-to-tr from-blue-800 via-violet-600 to-indigo-800">
    <Image
      src={stars}
      alt="stars background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="opacity-50"
    />
    <Wrapper>
      <div className="pt-8 pb-32 px-4 lg:pb-60">
        <div className="text-center lg:text-right mb-14">
          <ButtonLink text="Download C.V." link="https://docs.google.com/document/d/1YG8VdsFYZf5R8aOBI1BbOBhQinvsRrst/edit?usp=sharing&ouid=105863550521448159605&rtpof=true&sd=true" />
        </div>
        <div className="text-center">
          <div className="mb-5">
            <Image src={starship} alt="star ship" width="70" height="77" />
          </div>
          <h1 className="font-bold text-white text-4xl mb-5">Front-end Web Developer</h1>
          <p className="font-medium text-white text-2xl">I build for work and for fun</p>
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Hero;
