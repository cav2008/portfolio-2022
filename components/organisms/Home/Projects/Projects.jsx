import React from 'react';

import Wrapper from '@components/atoms/Wrapper';
import ProjectItem from '@components/molecules/ProjectItem';

import chatScreenshot from '@images/chat-app-screenshot.png';
import christmasScreenshot from '@images/christmas-card-screenshot.png';
import midnightScreenshot from '@images/midnight-running-screenshot.png';
import portfolioScreenshot from '@images/portfolio-screenshot.png';
import blackJackScreenshot from '@images/react-blackjack-screenshot.png';
import shipWarsScreenshot from '@images/ship-wars-screenshot.png';

const Projects = () => (
  <Wrapper>
    <div className="text-center mb-5 px-4">
      <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl">Personal Projects</h2>
      <p className="text-lg">Projects I have created for fun and learning during my free time</p>
    </div>

    <div className="grid grid-cols-1 px-2.5 gap-5 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-7">
      <ProjectItem
        image={chatScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={christmasScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={midnightScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={portfolioScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={blackJackScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={shipWarsScreenshot}
        title="Chatty"
        description="Node, React &amp; Socket.io instant messenger app"
      />
    </div>
  </Wrapper>
);

export default Projects;
