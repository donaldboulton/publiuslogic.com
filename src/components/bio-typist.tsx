import * as React from 'react'
import { useState, useEffect } from 'react'
import Typist from 'react-typist'

function BioTypist() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])

  return (
    <div>
      {count ? (
        <Typist
          className="text-gray-300 light:text-gray-800"
          avgTypingDelay={50}
          onTypingDone={() => setCount(29)}
          cursor={{ hideWhenDone: true }}
        >
          <span> I grew up and live in OKC OK!</span>
          <Typist.Backspace count={28} delay={800} />
          <span>
            {' '}
            Develop Websites with React and{' '}
            <span role="img" aria-label="Love">
              ❤️
            </span>
          </span>
        </Typist>
      ) : (
        ''
      )}
    </div>
  )
}

export default BioTypist
