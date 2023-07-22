import { type Variants } from 'framer-motion'

const motionVariants: Variants = {
  enter: {
    visibility: 'visible',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    transitionEnd: {
      visibility: 'hidden',
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: 'easeOut',
    },
  },
}
