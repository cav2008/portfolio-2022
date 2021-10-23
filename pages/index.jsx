import React from 'react';
import Head from 'next/head';

import Hero from '@components/organisms/Home/Hero';
import Profile from '@components/organisms/Home/Profile';
import Skill from '@components/organisms/Home/Skill';
import Work from '@components/organisms/Home/Work';
import Projects from '@components/organisms/Home/Projects';
import Footer from '@components/organisms/Home/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cavan Portfolio 2022</title>
        <meta
          name="description"
          content="Cavan Law's personal frontend developer portfolio created in 2022 showcasing current and previous projects/work"
        />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <div className="mb-16 lg:-mt-14 lg:mb-14">
          <Profile />
        </div>
        <div className="md:mb-4 lg:mb-0">
          <Skill />
        </div>
        <div className="mb-16 lg:mb-14">
          <Work />
        </div>
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
