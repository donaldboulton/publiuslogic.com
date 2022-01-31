import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import * as CSS from 'csstype'

const ProgressBarWrapper: CSS.Properties = {
  height: 'calc(88vh - 40px)',
  maxHeight: '300px',
  width: '2px',
  backgroundColor: 'gray',
}

const ProgressBar = ({ progress }: { progress: number }) => {
  const [visibility, setVisibility] = React.useState(true);
  const shouldReduceMotion = useReducedMotion();

  const progressBarWrapperVariants = {
    hide: {
      opacity: shouldReduceMotion ? 1 : 0,
    },
    show: (visibility: boolean) => ({
      opacity: shouldReduceMotion ? 1 : visibility ? 0.7 : 0,
    }),
  };

  React.useEffect(() => setVisibility(progress >= 0.07 && progress <= 0.95), [
    progress,
  ]);

  return (
    <motion.div
      initial="hide"
      variants={progressBarWrapperVariants}
      animate="show"
      transition={{ type: 'spring' }}
      custom={visibility}
    >
      <motion.div
        style={{
          transformOrigin: 'top',
          scaleY: progress,
          width: '2px',
          backgroundColor: '#222',
          height: '100%',
        }}
        data-testid="progress-bar"
        data-testprogress={progress}
      />
    </motion.div>
  )
}

export default ProgressBar