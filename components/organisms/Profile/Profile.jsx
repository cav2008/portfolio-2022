import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';

import avatar from '@images/avatar.png';

const Profile = () => (
  <Wrapper>
    <div className="bg-white p-4 lg:flex lg:flex-row-reverse lg:rounded-lg lg:shadow-lg lg:-mt-10 lg:mb-10 lg:p-10">
      <div className="text-center lg:flex-none">
        <Image src={avatar} alt="cartoon avatar" width="200" height="200" />
      </div>
      <div className="text-center my-8 lg:my-0 lg:text-left">
        <p className="font-bold text-xl lg:text-4xl">Hello &amp; Welcome!</p>
        <p className="text-lg mt-2.5 lg:mt-5">
          I am a passionate developer who is always looking for new projects to undertake and is always learning/
          developing my skills at work and during my free time. I have gained two years work experience in front-end web
          development, working on projects with major companies/organisations.
        </p>
      </div>
    </div>
  </Wrapper>
);

export default Profile;
