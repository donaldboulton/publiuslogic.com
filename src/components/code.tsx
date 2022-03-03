import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'

import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import dracula from 'prism-react-renderer/themes/dracula'
import rangeParser from 'parse-numeric-range'
import Confetti from 'react-dom-confetti'
import useSound from 'use-sound'
import clapping from '../../static/audio/clapping.mp3'
import Title from "@/components/title"

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const getParams = (className = ``) => {
  const [lang = ``, params = ``] = className.split(`:`)
  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      merged[key] = value
      return merged
    }, {})
  )
}

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const ButtonWrapper = props => <div style={{ position: 'relative', alignItems: 'center', top: '68px', }} {...props} />

const Wrapper = props => <div style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = props => (
  <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />
)

const Text = props => (
  <div
    style={{
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
      marginTop: '1px',
      right: '20px',
      top: '1px',
      position: 'relative',
    }}
    {...props}
  />
)

const Button = props => (
  <button
    style={{
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      position: 'absolute',
      top: '8px',
      right: 0,
      marginRight: '10px',
      marginBottom: '10px',
    }}
    {...props}
  />
)

let highlightStart = false
const highlightClassName = "highlight-line"

const highlightLine = (lineArray, lineProps) => {
  let shouldExclude = false

  lineArray.forEach((line, i) => {
    const content = line.content

    // Highlight lines with "// highlight-line"
    if (content.replace(/\s/g, "").includes("//highlight-line")) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`
      line.content = content
        .replace("// highlight-line", "")
        .replace("//highlight-line", "")
    }
    // https://www.lekoarts.de/garden/adding-line-numbers-and-code-highlighting-to-mdx
    // https://www.christopherbiscardi.com/post/codeblocks-mdx-and-mdx-utils
    // Stop highlighting
    if (
      !!highlightStart &&
      content.replace(/\s/g, "") === "//highlight-end"
    ) {
      highlightStart = false
      shouldExclude = true
    }

    // Start highlighting after "//highlight-start"
    if (
      content.replace(/\s/g, "") === "//highlight-start"
    ) {
      highlightStart = true
      shouldExclude = true
    }
  })

  // Highlight lines between //highlight-start & //highlight-end
  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`
  }

  return shouldExclude
}
// https://prince.dev/highlight-with-react
const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => (lineNumbers.includes(index + 1))
  } else {
    return () => false
  }
}

export const Code = ({ codeString, className, children, metastring, ...props }) => {
  const ref = useRef();
  
  const [isClicked, setIsClicked] = useState(false)
 
  // https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/'
  const duration = 0.4;
  const svgVariants = {
    hover: (isClicked: boolean) => ({
      scale: isClicked ? 1 : 1.05,
    }),
    pressed: (isClicked: boolean) => ({
      scale: isClicked ? 1 : 0.95,
    }),
    idle: {
      scale: 1,
    },
  };

  const variants = {
    checked: {
      true: {
        cursor: 'default',
      },
      false: {
        cursor: 'pointer',
      },
    },
  };

  const clipboardIconVariants = {
    clicked: { opacity: 0 },
    unclicked: { opacity: 1 },
  };

  const tickVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isClicked ? 0.85 : 0.05 }),
    clicked: { pathLength: 1 },
    unclicked: { pathLength: 0 },
  };

  const enterDiscloserScreenIconVariants = {
    enterDiscloserScreen: { opacity: 0 },
    exitDiscloserScreen: { opacity: 1 },
  };

  const exitDiscloserScreenIconVariants = {
    enterDiscloserScreen: { pathLength: 1 },
    exitDiscloserScreen: { pathLength: 0 },
  };

  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1])
  const [isCopied, setIsCopied] = useState(false)
  const [play] = useSound(clapping)
  const doApplause = () => {
    if (!isCopied) {
      setIsCopied(true)
    }
  }
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const [language, { title = `` }] = getParams(className)
  const ifTitle = (title || language) && { marginTop: `0px` }

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => setIsClicked(false), 3000);
    }
  }, [isClicked]);


  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Wrapper 
        ref={ref}
        className='overscroll-contain'
      > 
        <Disclosure>
          {({ open }) => (
            <>            
              <ButtonWrapper className='flex place-content-between'>          
                <div>
                <Disclosure.Button
                  className='h-10 w-10 ml-3'
                  aria-label="Show Code"
                >
                  <motion.svg 
                    baseProfile="tiny" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 307.8 230.9"
                    className='h-10 w-10 m-2'
                  >
                    <motion.path
                      fill="#FFF" 
                      d="M76.3 129.1l-29.6 29.6L30 142v58.9h58.9l-16.7-16.8 29.5-29.5zM101.7 76.3L72.2 46.7 88.9 30H30v58.9l16.7-16.7 29.6 29.5zM206.1 154.6l29.5 29.5-16.7 16.8h58.9V142l-16.7 16.7-29.6-29.6zM231.5 101.7l29.6-29.5 16.7 16.7V30h-58.9l16.7 16.7-29.5 29.6z"
                      initial={false}
                      animate={open ? 'enterDiscloserScreen' : 'exitDiscloserScreen'}
                      variants={enterDiscloserScreenIconVariants}
                      transition={{ duration }}
                      onClick={async () => {
                        open()
                      }}
                    />
                      <path 
                       fill="#FFF" 
                       d="M10 61.3V10h51.3V0H0v61.3zM246.5 10h51.3v51.3h10V0h-61.3zM297.8 169.3v51.6h-51.3v10h61.3v-61.6zM61.3 220.9H10v-51.6H0v61.6h61.3z"                
                      />
                    <motion.path 
                      fill="#FFF" 
                      d="M55.4 200.9L85 171.3l16.7 16.7v-58.9H42.8l16.8 16.8L30 175.4zM30 55.4L59.6 85l-16.8 16.7h58.9V42.8L85 59.6 55.4 30zM277.8 175.4l-29.6-29.5 16.8-16.8h-58.9V188l16.7-16.7 29.6 29.6zM252.4 30l-29.6 29.6-16.7-16.8v58.9H265L248.2 85l29.6-29.6zM10 61.3V10h51.3V0H0v61.3zM246.5 10h51.3v51.3h10V0h-61.3zM297.8 169.3v51.6h-51.3v10h61.3v-61.6zM61.3 220.9H10v-51.6H0v61.6h61.3z"
                      initial={false}
                      animate={open ? 'enterDiscloserScreen' : 'exitDiscloserScreen'}
                      variants={exitDiscloserScreenIconVariants}
                      style={{ pathLength, opacity }}
                      transition={{ duration }}
                      onClick={async () => {
                        close()
                      }}
                    />
                  </motion.svg>
                </Disclosure.Button>
                </div>
                <div>
                <Button
                  css={{
                    background: 'transparent',
                    padding: '2px',
                    border: '1px',
                    borderRadius: '3px',
                    borderColor: '#800080',
                    cursor: isClicked ? 'default' : 'pointer',
                    marginBottom: '20px',
                  }}
                  aria-label="Copy to clipboard"
                  title="Copy to clipboard"
                  disabled={isClicked}
                  onClick={() => {
                    setIsClicked(true);
                    copyToClipboard(codeString)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 3000)
                    doApplause();
                    play();
                  }}
                >
                  <motion.svg
                    initial="idle"
                    whileHover="hover"
                    whileTap="pressed"
                    transition={{ duration }}
                    variants={svgVariants}
                    custom={isClicked}
                    className='w-10 h-10'
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z"
                      stroke="#949699"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={isClicked ? 'clicked' : 'unclicked'}
                      variants={clipboardIconVariants}
                      custom={isClicked}
                      transition={{ duration }}
                    />
                    <motion.path
                      d="M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338"
                      stroke="#949699"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={isClicked ? 'clicked' : 'unclicked'}
                      variants={clipboardIconVariants}
                      custom={isClicked}
                      transition={{ duration }}                
                    />
                    <motion.path
                      d="M20 6L9 17L4 12"
                      stroke="#5184f9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={false}
                      animate={isClicked ? 'clicked' : 'unclicked'}
                      variants={tickVariants}
                      style={{ pathLength, opacity }}
                      custom={isClicked}
                      transition={{ duration }}                
                    />
                  </motion.svg>
                </Button>
                </div>
              </ButtonWrapper>
              <Title className="code-title p-2" text={title}>
                {language}
              </Title>
              <Highlight
                {...defaultProps}
                code={codeString}          
                language={language}
                theme={dracula}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <Disclosure.Panel className="gatsby-highlight nav-scroll" data-language={language}>                                                                 
                    <pre
                      className={className}
                      data-language={language}
                      style={{
                        ...style,
                        ...ifTitle,
                        padding: '2rem',
                        position: 'relative',
                        maxHeight: '400px',
                      }}
                    >                
                      {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line, key: i })
                        const shouldExclude = highlightLine(line, lineProps)
                        if (shouldHighlightLine(i)) { lineProps.className = `${lineProps.className} highlight-line` }
                          return !shouldExclude ? (
                            <div {...lineProps} key={i}>
                              <span className="line-number-style">{i + 1}</span>
                                {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                          ))}
                         </div>
                        ) : null
                      })}
                    </pre>
                  </Disclosure.Panel>
                )}
              </Highlight>
              <ConfettiWrapper>
                <Confetti active={isCopied} config={config} />
              </ConfettiWrapper>
            </>
          )}
        </Disclosure>
      </Wrapper>
    )
  }
}