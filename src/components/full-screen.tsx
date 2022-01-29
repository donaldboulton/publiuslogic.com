import * as React from 'react'
import { useCallback } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen"

interface FullScreenHandle {
  active: boolean;
  // Specifies if attached element is currently full screen.
  
  enter: () => Promise<void>
  // Requests this element to go full screen.
  
  exit: () => Promise<void>;
  // Requests this element to exit full screen.
  
  node: React.MutableRefObject<HTMLDivElement | null>
  // The attached DOM node
}

interface FullScreenButtonProps {
  handle: FullScreenHandle
  // Handle that helps operate the full screen state.
  
  onChange?: (state: boolean, handle: FullScreenHandle) => void
  // Optional callback that gets called when this screen changes state.
    
  className?: string
  // Optional prop allowing you to apply a custom class name to the FullScreen container
}

const ScreenButton = props => (
    <button
      style={{
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'none',
        position: 'absolute',
        top: '8px',
        left: 0,
        marginLeft: '10px',
        marginBottom: '10px',
      }}
      {...props}
    />
)
const FullScreenButton = ({ handle, className, children }: FullScreenButtonProps) => {
  const handle = useFullScreenHandle()
  return (
    <div>
      <button 
        onClick={handle.enter}
        className='h-10 w-10'
      >
        <svg 
          baseProfile="tiny" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 307.8 230.9" 
          className='h-10 w-10 m-2'
        >
          <path 
            fill="#FFF" 
            d="M76.3 129.1l-29.6 29.6L30 142v58.9h58.9l-16.7-16.8 29.5-29.5zM101.7 76.3L72.2 46.7 88.9 30H30v58.9l16.7-16.7 29.6 29.5zM206.1 154.6l29.5 29.5-16.7 16.8h58.9V142l-16.7 16.7-29.6-29.6zM231.5 101.7l29.6-29.5 16.7 16.7V30h-58.9l16.7 16.7-29.5 29.6z">
          </path>
          <path 
            fill="#FFF" 
            d="M10 61.3V10h51.3V0H0v61.3zM246.5 10h51.3v51.3h10V0h-61.3zM297.8 169.3v51.6h-51.3v10h61.3v-61.6zM61.3 220.9H10v-51.6H0v61.6h61.3z">
          </path>
        </svg>
        Fullscreen
      </button>
      <FullScreen handle={handle}>
        {children}
      </FullScreen>
    </div>
  )
}

export default FullScreenButton