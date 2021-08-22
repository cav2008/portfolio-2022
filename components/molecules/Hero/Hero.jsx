import React from 'react';
import Image from 'next/image';

import starship from '@images/starship.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500">
      <div className="text-center">
        <Image src={starship} alt="star ship" width="70" height="77" />
        <h1 className="font-bold text-white text-4xl mb-5">Front-end Web Developer</h1>
        <p className="text-white text-2xl">I build for fun and for work</p>
      </div>
    </section>
  );
};

export default Hero;
