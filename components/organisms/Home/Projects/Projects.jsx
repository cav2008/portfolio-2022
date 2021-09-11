import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Button from '@components/atoms/Button';

import chatScreenshot from '@images/chat-app-screenshot.png';

const Projects = () => (
  <Wrapper>
    <div className="text-center mb-5 px-4">
      <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl">Personal Projects</h2>
      <p className="text-lg">Projects I have created for fun and learning during my free time</p>
    </div>

    <div className="grid grid-cols-1 gap-5 justify-items-center lg:grid-cols-3 lg:gap-y-7">
      <div className="relative group">
        <Image src={chatScreenshot} alt="chat app" className="rounded-lg" />
        <div className="hidden content-center absolute top-0 w-full h-full text-center bg-indigo-500 opacity-95 rounded-lg group-hover:grid">
          <div className="inline-block">
            <p className="font-bold text-2xl text-white mb-2.5">Chatty</p>
            <p className="text-lg text-white mb-7">Node, React &amp; Socket.io instant messenger app</p>
            <Button text="Demo" onClick={() => console.log('click')} />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Projects;
