import * as React from 'react'
import { motion } from 'framer-motion'

const WavingHand = () => (
  <motion.div
    style={{
      marginBottom: '-20px',
      marginRight: '-45px',
      paddingBottom: '20px',
      paddingRight: '45px',
      display: 'inline-block',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 25,
      repeatType: 'mirror',
      duration: 0.2,
      delay: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋
  </motion.div>
)

export default WavingHand
