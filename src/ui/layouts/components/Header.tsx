import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { FCC } from '@/types';
import { ROUTES } from '@/types/routes';
import { Button } from '@/ui/components';
import SocialLinks from '@/ui/SocialLinks';

const Header: FCC = () => {
  return (
    <header className="fixed left-0 top-0 z-header h-header w-full border-b border-b-linear backdrop-blur-[16px]">
      <nav className="container flex h-full w-full items-center justify-between px-8">
        <Link href={ROUTES.home}>
          <Image alt="gameplus-logo" src="/images/logo.svg" width={259} height={40} />
        </Link>

        <div className="flex items-center gap-8">
          <a className="font-bold" href="http://" target="_blank" rel="noopener noreferrer">
            Whitepaper
          </a>
          <SocialLinks />
          <Button size="xs">Connect wallet</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
