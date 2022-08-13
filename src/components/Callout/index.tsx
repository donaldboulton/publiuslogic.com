import * as React from 'react'
import * as CSS from 'csstype'
import { CalloutProps } from './types'
import { getVariantIcon } from '../../utils/utils'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

export const callOutWrapper: CSS.Properties = {
  ['--icon-color' as info]: '#9333ea',
  ['--icon-color' as danger]: '#fa383826',
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-20px',
  borderRadius: '50%',
  padding: '6px',
  color: '#9333ea',
  border: '6px solid transparent',
  background: '#141936',

  variants: {
    variant: {
      info: {
        '--icon-color': 'info',
      },
      danger: {
        '--icon-color': 'danger',
      },
    },
  },
}

export const calloutLabelWrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: '6px',
  padding: '8px',
  color: '#fff',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  userSelect: 'none',
  background: '#374151',

  variants: {
    variant: {
      info: {
        background: '#374151',
      },
      danger: {
        background: '#fa383826',
      },
    },
  },
}

const callout: CSS.Properties = {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '10px 25px',
  marginBottom: '2.25rem',
  marginTop: '2.25rem',
  borderRadius: '12px',
  fontSize: '1.25em',
  color: '#fff',
  border: '2px solid rgb(147, 51, 234, 0.5)',
  background: '#374151',
  boxShadow: '6px 5px 5px rgb(147, 51, 234, 0.75)',
  opacity: '0.6',
}

const Callout: React.FC<CalloutProps> = props => {
  const { children, variant, label, ...rest } = props
  const icon = label ? null : getVariantIcon(variant)

  const item = {
    initial: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
    },
  }

  const useAnimateOnInView = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }, [controls, inView])

    return { ref }
  }
  const [ref6, isVisible6] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants6 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }

  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        ref={ref6}
        animate={isVisible6 ? 'visible' : 'hidden'}
        variants={variants6}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        key={6}
        style={callout}
        variant={variant}
        {...rest}
      >
        {icon ? (
          <aside style={callOutWrapper} variant={variant}>
            {icon}
          </aside>
        ) : null}
        {label ? (
          <aside style={calloutLabelWrapper} variant={variant}>
            {label}
          </aside>
        ) : null}
        {children}
      </m.div>
    </LazyMotion>
  )
}

export default Callout
