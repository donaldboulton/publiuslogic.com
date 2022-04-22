import * as React from 'react'
import * as CSS from 'csstype'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GetPosts from '@/utils/getposts'

interface AnimatedTitleProps {
  title: string
  word: string
  character: string
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

const Title: CSS.Properties = {
  fontSize: '3rem',
  fontWeight: '600',
}

const Word: CSS.Properties = {
  display: 'inline-block',
  marginRight: '0.25em',
  whiteSpace: 'nowrap',
}

const Character: CSS.Properties = {
  display: 'inline-block',
  marginRight: '-0.05em',
}

const AnimatedTitle = ({ data }: AnimatedTitleProps) => {

  const posts = GetPosts()
  const post = posts[0]
  const text = post.frontmatter.description // This would normally be passed into this component as a prop!

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: '0.25em',
    },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <Title aria-label={text} role="heading">
      {text.split(' ').map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split('').map((character, index) => {
              return (
                <Character aria-hidden="true" key={index} variants={characterAnimation}>
                  {character}
                </Character>
              )
            })}
          </Word>
        )
      })}
    </Title>
  )
}

export default AnimatedTitle