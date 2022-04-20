import * as React from 'react'
import * as CSS from 'csstype'
import { motion } from 'framer-motion'
import { letterContainerVariants, letterVariants } from './AnimationVariants'

interface PostTitleProps {
  children: string
}

const StyledTitleElement: CSS.Properties = {
  fontSize: 'calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)))',
  lineHeight: 'calc(32px + (80 - 32) * ((100vw - 320px) / (1600 - 320)))',
  position: 'relative',
  display: 'inline-block',
  maxWidth: '100%',

  wordBreak: 'break-word',
  zIndex: '10',
  color: '#c026d3',
}

export const PostTitle: React.FC<PostTitleProps> = props => {
  const { children } = props
  return (
    <motion.div>
        <StyledTitleElement
          {...props}
          variants={letterContainerVariants}
          initial={'before'}
          animate={'after'}
          exit={'before'}
          key={children}
          aria-label={children}
        >
          {children.split(' ').map((word: string, wordI: number) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: 'inline-block',
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: 'auto',
                  }} // Position elements
                  variants={letterVariants}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              {'\u00A0'}
            </div>
          ))}
        </StyledTitleElement>
    </motion.div>
  )
}
