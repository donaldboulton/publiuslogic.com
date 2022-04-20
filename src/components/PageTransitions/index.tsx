import * as React from 'react'
import { motion } from 'framer-motion'

interface PageTransitionsProps {
  children: React.ReactNode
}

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
const PageTransitions = ({ path }: PageTransitionsProps) => {
  const { children, ...rest } = props
  return (
    <motion.div
      key={path}
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 6 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default PageTransitions
