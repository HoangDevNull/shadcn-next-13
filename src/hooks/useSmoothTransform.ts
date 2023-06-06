import type { MotionValue } from 'framer-motion';
import { useSpring, useTransform } from 'framer-motion';

type SingleTransformer<I, O> = (input: I) => O;

interface VelocityOptions {
  velocity?: number;
  restSpeed?: number;
  restDelta?: number;
}

interface DurationSpringOptions {
  duration?: number;
  bounce?: number;
}

interface SpringOptions extends DurationSpringOptions, VelocityOptions {
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export function useSmoothTransform<I, O>(
  value: MotionValue<I>,
  springOptions: SpringOptions,
  transformer: SingleTransformer<I, O>
) {
  return useSpring(useTransform(value, transformer), springOptions);
}
