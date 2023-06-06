'use client';

import React from 'react';

import usePostProcess from '@/hooks/usePostprocess';
import { PlusModel } from '@/ui/canvas';

const FloatObject = () => {
  usePostProcess();
  return (
    <>
      <PlusModel position={[0, -2, 0]} />
    </>
  );
};

export default FloatObject;
