'use client';

import LayoutWithThree from '@/ui/layouts/LayoutWithThree';

export default function Page() {
  return (
    <>
      <LayoutWithThree>
        <div className="container relative">
          <div className="circle-gradient absolute left-[-30%] top-[-30%] z-0 aspect-square w-4/12" />
          <h1 className="font-serif text-[100px] font-extrabold">GAME PLUS</h1>
        </div>
      </LayoutWithThree>
    </>
  );
}
