import React from 'react';

import IconButton from '@components/atoms/IconButton';

import linkedIn from '@icons/linkedin.png';
import github from '@icons/github.png';
// import instagram from '@icons/instagram.png';
// import youtube from '@icons/youtube.png';

const Footer = () => (
  <footer className="pt-12 px-4 pb-5 text-white text-center bg-gradient-to-tr from-red-700 via-indigo-700 to-blue-900 opacity-80">
    <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl opacity-100">Find me here</h2>
    <p className="text-lg mb-5">I am very active on these social sites</p>

    <div className="flex justify-center gap-5 mb-12">
      <IconButton icon={linkedIn} link="https://www.linkedin.com/in/cavan-l-48682417/" />
      <IconButton icon={github} link="https://github.com/cav2008" />
      {/* <IconButton icon={instagram} link="#" /> */}
      {/* <IconButton icon={youtube} link="#" /> */}
    </div>

    <p className="text-sm font-bold">Designed and created by Cavan Law</p>
  </footer>
);

export default Footer;
