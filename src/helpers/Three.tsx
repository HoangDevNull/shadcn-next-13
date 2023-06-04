'use client';

import { r3f } from '@/helpers/r3f';
import type { FCC } from '@/types';

export const Three: FCC = ({ children }) => {
  return <r3f.In>{children}</r3f.In>;
};
