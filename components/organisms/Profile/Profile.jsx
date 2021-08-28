import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Card from '@components/atoms/Card';

import avatar from '@images/avatar.png';

const Profile = () => (
  <div className="mb-16">
    <Wrapper>
      <Card>
        <div className="p-4 lg:flex lg:flex-row-reverse lg:-mt-14 lg:mb-14 lg:p-10">
          <div className="text-center lg:flex-none">
            <Image src={avatar} alt="cartoon avatar" width="200" height="200" />
          </div>
          <div className="text-center my-8 lg:my-0 lg:text-left">
            <p className="font-bold text-2xl mb-2.5 lg:mb-5 lg:text-4xl">Hello &amp; Welcome!</p>
            <p className="text-lg">
              I am a passionate developer who is always looking for new projects to undertake and is always
              learning/developing my skills at work and during my free time. I have gained two years work experience in
              front-end web development, working on projects with major companies/organisations.
            </p>
          </div>
        </div>
      </Card>
    </Wrapper>
  </div>
);

export default Profile;
