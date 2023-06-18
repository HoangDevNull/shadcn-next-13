import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { TbBrandGithub, TbChevronRight } from 'react-icons/tb';

import type { FCC } from '@/types';
import { Button } from '@/ui/components';

const ThreeObject = dynamic(() => import('./ThreeObject'), { ssr: false });
// sm: '35.5em',
// md: '48em',
// lg: '64em',
// xl: '80em',
// '2xl': '90em',
// '3xl': '120em',
const HeroSection: FCC = () => {
  return (
    <>
      <ThreeObject />

      <div className="3xl:max-w-[100em] mx-auto max-w-full xl:max-w-[70em] 2xl:max-w-[100em]">
        <div className="relative flex min-h-[calc(100vh-0px)] w-full flex-col items-start justify-center gap-8">
          <h1 className="whitespace-nowrap text-[100px] font-extrabold leading-tight">GAME PLUS</h1>
          <p className="max-w-4xl text-5xl font-medium">
            A Modular Layer 3 <br /> Focused on Enhancing the intelligence and Scalability of Web3 Games
          </p>

          <div className="flex items-center gap-8">
            <Button className="min-w-[165px] gap-4">
              Whitepaper <TbChevronRight size="1.5rem" />
            </Button>

            <Button className="min-w-[165px] gap-4" variant="outline">
              Github <TbBrandGithub size="1.5rem" />
            </Button>
          </div>
        </div>

        <Image className="z-[-2] min-h-screen opacity-50" src="/images/home/hero_bg_1.png" fill alt="bg" />
      </div>
    </>
  );
};

export default HeroSection;
