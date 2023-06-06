'use client';

import HeroSection from './components/HeroSection';

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row">
        <HeroSection />
      </div>
    </>
  );
}
