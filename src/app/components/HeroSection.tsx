import dynamic from 'next/dynamic';
import React from 'react';
import { TbBrandGithub, TbChevronRight } from 'react-icons/tb';

import type { FCC } from '@/types';
import { Button } from '@/ui/components';

const HeroObject = dynamic(() => import('./HeroObject'), { ssr: false });

const HeroSection: FCC = () => {
  return (
    <div className="relative">
      <div className="container">
        <div className="circle-gradient absolute left-[-20%] top-[-120%] z-[1] aspect-square w-1/2" />
        <div className="relative z-[2] flex min-h-[calc(100vh-200px)] w-1/2 flex-col items-start justify-center gap-8">
          <h1 className="whitespace-nowrap font-serif text-[100px] font-extrabold">GamePlus</h1>
          <p className="text-5xl font-medium">
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
      </div>
      <HeroObject />
    </div>
  );
};

export default HeroSection;
