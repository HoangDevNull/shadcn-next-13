/* eslint-disable func-names */
import { forwardRef } from 'react';

import CustomPass from './CustomPass';

export default forwardRef(function (
  props: {
    frequency: number;
    amplitude: number;
    blendFunction: any;
  },
  ref
) {
  const effect = new CustomPass(props);

  return <primitive ref={ref} object={effect} />;
});
