import React from 'react';

import IconLink from '@components/atoms/IconLink';

import linkedIn from '@icons/linkedin.png';
import github from '@icons/github.png';

const Footer = () => (
  <footer className="pt-12 px-4 pb-5 text-white text-center bg-gradient-to-tr from-red-700 via-indigo-700 to-blue-900 opacity-80">
    <h2 className="font-bold text-2xl mb-2.5 lg:text-4xl opacity-100">Find me here</h2>
    <p className="text-lg mb-5">I am highly active on these social sites</p>

    <div className="flex justify-center gap-5 mb-12">
      <IconLink icon={linkedIn} link="https://www.linkedin.com/in/cavan-l-48682417/" />
      <IconLink icon={github} link="https://github.com/cav2008" />
    </div>

    <p className="text-sm font-bold">Designed and created by Cavan Law</p>
  </footer>
);

export default Footer;
