'use client';

import React from 'react';

import useLensDistortion from '@/hooks/useLensDistortion';
import { PointGlob } from '@/ui/canvas';

const FloatObject = () => {
  useLensDistortion();

  return (
    <>
      <PointGlob />
    </>
  );
};

export default FloatObject;
