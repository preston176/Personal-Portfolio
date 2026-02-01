import React from 'react'

export const motion = new Proxy({}, {
  get: (_, prop) => {
    const component = ({ children, ...props }: any) => {
      const { initial, animate, exit, variants, transition, whileHover, whileTap, whileInView, viewport, ...restProps } = props
      return React.createElement(prop as string, restProps, children)
    }
    component.displayName = `motion.${String(prop)}`
    return component
  },
})

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>
