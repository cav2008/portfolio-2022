import React from 'react';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';
import Detail, { AlIGNMENT } from '@components/atoms/Detail';

import stars from '@images/stars2.png';
import btLogo from '@images/bt-logo.png';
import btScreenshot from '@images/bt-screenshot.png';
import atchaiLogo from '@images/atchai-logo.png';
import atchaiScreenshot from '@images/atchai-screenshot.png';
import vioohLogo from '@images/viooh-logo.svg';
import vioohScreenshot from '@images/viooh-screenshot.png';

const Work = () => (
  <>
    <div className="lg:-mt-14">
      <div className="relative bg-gradient-to-tr from-purple-800 via-purple-600 to-blue-800 opacity-90">
        <div
          className="absolute -z-10 w-full h-full bg-contain bg-repeat-y bg-center opacity-70"
          style={{ backgroundImage: `url(${stars.src})` }}
        />
        <Wrapper>
          <div className="text-center px-4 pt-12 pb-5 lg:pt-44 lg:pb-20">
            <h2 className="font-bold text-white text-2xl mb-2.5 lg:text-4xl">Work Experiences</h2>
            <p className="text-lg text-white">Companies I have worked with in my career</p>
          </div>
        </Wrapper>
      </div>
    </div>

    <Detail
      logo={<Image src={vioohLogo} width="150" height="60" alt="viooh logo" />}
      paragraph="Currently working with VIOOH (pronounced view) since 2018. Helping to build a brand new, global out of home (OOH) application, to let media owners &amp; media buyers buy &amp; sell programmatically."
      image={vioohScreenshot}
    />
    <Detail
      logo={<Image src={btLogo} width="150" height="70" alt="bt logo" />}
      paragraph="Worked at BT consumer from 2015 - 2018. Built sales journeys for major product launches such as BT Sport, BT TV, BT mobile. Created an app for EE store employees to sell BT products to their customers."
      image={btScreenshot}
      alignment={AlIGNMENT.LEFT}
    />
    <Detail
      logo={<Image src={atchaiLogo} width="95" height="95" alt="atchai logo" />}
      paragraph="My first developer position after graduating, where I stayed from 2013 - 2015. Worked with companies such as Turner Broadcasting System &amp; NHS Digital, and on an in-house SaaS product called Dataseed."
      image={atchaiScreenshot}
    />
  </>
);

export default Work;
