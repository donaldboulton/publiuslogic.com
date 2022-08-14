import * as React from 'react'

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="text-2xl text-purple-500 dark:text-purple-800 flex justify-center italic transition duration-300 underline underline-offset-8 decoration-wavy decoration-fuchsia-600 dark:decoration-gray-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  )
}

export default Center
