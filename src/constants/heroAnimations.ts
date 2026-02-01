export const badgeAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const titleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.2 },
}

export const subtitleAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.4 },
}

export const socialIconsAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.6 },
}

export const ctaButtonsAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.8 },
}

export const floatingPointer1Animation = {
  animate: {
    x: [0, 20, -8, 18, -5, 0],
    y: [0, -15, 10, -12, 8, 0],
  },
  transition: {
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
}

export const floatingPointer2Animation = {
  animate: {
    x: [0, -20, 8, -18, 5, 0],
    y: [0, 15, -10, 12, -8, 0],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.2,
  },
}

export const headerAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}
