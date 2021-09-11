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
        title="Chat App"
        description="Node, React &amp; Socket.io instant messenger app"
      />
      <ProjectItem
        image={christmasScreenshot}
        title="Christmas Card"
        description="JS &amp; Parallax Christmas card"
      />
      <ProjectItem
        image={midnightScreenshot}
        title="Midnight Running"
        description="JS &amp; HTML5 dodge game"
      />
      <ProjectItem
        image={portfolioScreenshot}
        title="Porfolio 2015"
        description="Bootstrap 3 personal portfolio"
      />
      <ProjectItem
        image={blackJackScreenshot}
        title="Black Jack"
        description="React Black Jack card game"
      />
      <ProjectItem
        image={shipWarsScreenshot}
        title="Ship Wars"
        description="JS single player battleship game"
      />
    </div>
  </Wrapper>
);

export default Projects;
