import React from 'react';

import SocialLinks from '@/ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="container flex h-[80px] items-center justify-between border-t border-t-linear">
      <p className="text-sm">Copyright © 2023 GamePlus. All Rights Reserved.</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
