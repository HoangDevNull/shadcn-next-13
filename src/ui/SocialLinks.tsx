import React from 'react';
import { SiMedium, SiTelegram } from 'react-icons/si';
import { TbBrandGithub, TbBrandTwitter } from 'react-icons/tb';

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <TbBrandGithub size="1.5rem" />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <TbBrandTwitter size="1.5rem" />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <SiTelegram size="1.5rem" />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <SiMedium size="1.5rem" />
      </a>
    </div>
  );
};

export default SocialLinks;
