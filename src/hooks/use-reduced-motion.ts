import { useReducedMotion } from 'framer-motion';

/**
 * Returns animation props that respect the user's reduced motion preference.
 * When reduced motion is preferred, animations are instant (no transform/delay).
 */
export function useMotionProps() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReduced
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 40 }, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as number[] } };

  const fadeIn = (delay = 0) =>
    prefersReduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 30 }, transition: { duration: 0.6, delay } };

  return { prefersReduced, fadeUp, fadeIn };
}
