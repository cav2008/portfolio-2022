import React from 'react';

import IconButton from '@components/atoms/IconButton';

import linkedIn from '@icons/linkedin.png';
import instagram from '@icons/instagram.png';
import github from '@icons/github.png';
import youtube from '@icons/youtube.png';

const Footer = () => (
  <footer className="pt-12 px-4 pb-5 text-white text-center bg-gradient-to-tr from-blue-800 via-violet-600 to-indigo-800 opacity-90">
    <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl">Find me here</h2>
    <p className="text-lg mb-5">I am very active on these social sites</p>

    <div className="flex justify-center gap-5 mb-12">
      <IconButton icon={linkedIn} />
      <IconButton icon={instagram} />
      <IconButton icon={github} />
      <IconButton icon={youtube} />
    </div>

    <p className="text-sm font-bold">Designed and created by Cavan Law</p>
  </footer>
);

export default Footer;
