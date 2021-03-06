import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Card from '@components/atoms/Card';

import avatar from '@images/avatar.png';

const Profile = () => (
  <Wrapper>
    <Card>
      <div className="p-4 lg:flex lg:flex-row-reverse lg:p-10">
        <div className="text-center lg:flex-none">
          <Image src={avatar} alt="cartoon avatar" width="200" height="200" />
        </div>
        <div className="text-center my-8 lg:my-0 lg:text-left">
          <p className="font-bold text-2xl mb-2.5 lg:mb-5 lg:text-4xl">Hello &amp; Welcome!</p>
          <p className="text-lg">
            I am a passionate developer who is always looking for new projects to undertake. In my spare time I enjoy
            using code to solve problems or just to learn something new. I have approximately 8 years of work experience
            in front-end web development, working on various projects with major companies.
          </p>
        </div>
      </div>
    </Card>
  </Wrapper>
);

export default Profile;
