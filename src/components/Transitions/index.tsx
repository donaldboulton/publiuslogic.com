import * as React from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
const Transitions = ({ children, path }) => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        key={path}
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default Transitions
