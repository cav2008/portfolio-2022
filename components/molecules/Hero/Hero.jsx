import React from 'react';
import Image from 'next/image';

import Button from '@components/atoms/Button';

import starship from '@images/starship.png';

const Hero = () => (
  <section className="bg-gradient-to-tr from-indigo-500 via-violet-600 to-indigo-800 opacity-90 pt-8 pb-32">
    <div className="text-center mb-14">
      <Button text="Download C.V." />
    </div>
    <div className="text-center">
      <div className="mb-5">
        <Image src={starship} alt="star ship" width="70" height="77" />
      </div>
      <h1 className="font-bold text-white text-4xl mb-5">Front-end Web Developer</h1>
      <p className="font-medium text-white text-2xl">I build for fun and for work</p>
    </div>
  </section>
);

export default Hero;
