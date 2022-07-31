import * as React from 'react'

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="text-2xl text-purple-500 light:text-gray-800 flex justify-center italic transition duration-300 underline underline-offset-2 decoration-wavy decoration-fuchsia-600 light:decoration-gray-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default Center
