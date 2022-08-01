import * as React from 'react'
import { useEffect, useState } from 'react'
import Day from '../icons/day'
import Night from '../icons/night'

const DarkModeToggle: React.FC = () => {
  const [theme, setTheme] = useState(undefined)
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  })
  function toggleTheme() {
    window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      role="button"
      aria-label="Change theme"
      className={!theme ? 'invisible' : 'visible cursor-pointer'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Night /> : <Day />}
    </div>
  )
}

export default DarkModeToggle
