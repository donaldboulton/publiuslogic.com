import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link } from "gatsby"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Tooltip from '@/components/Tooltip'
import DarkModeToggle from '@/components/dark-mode-toggle'
import HeaderPopover from '@/components/header-popover'
import Logo from '../../../static/images/gatsby/publiuslogic-logo.png'
import PrimaryLogo from '../../../static/images/gatsby/publiuslogic-monogram.png'
import MobileMenu from './MobileMenu'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  const [isOpen, setOpen] = useState(false)

  if (typeof document !== `undefined`) {
    const btn = () => document.querySelector("button.mobile-menu-button")
  }
  if (typeof document !== `undefined`) {
	  const menu = () => document.querySelector(".mobile-menu");
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-800 via-transparent to-gray-800 sticky top-0 z-10">
			  <div className="max-w-6xl mx-auto px-4">
				  <div className="flex justify-between">
					  <div className="flex space-x-7">
						  <div>
							  {/* Website Logo*/}
                <Tooltip
                  id="logoTooltip"
                  tooltipText="Home Page"                    
                >
                  <Link to='/' className="flex items-center py-4 px-2">
                    <img className="block md:hidden h-8 w-auto" src={Logo} alt="Logo" aria-describedby="logoTooltip" />
                    <img className="hidden md:block h-8 w-auto" src={PrimaryLogo} alt="Logo" aria-describedby="logoTooltip" />                      
                  </Link>
                </Tooltip>
						  </div>
						  {/* Primary Navbar items*/}
						  <div className="hidden md:flex items-center space-x-1">
							  <Link to="/about" className="py-2 px-2 text-lg hover:text-opacity-100 hover:bg-gray-700 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75">About</Link>
							  <Link to="/blog" className="py-2 px-2 text-lg hover:text-opacity-100 hover:bg-gray-700 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75">Blog</Link>
							  <HeaderPopover />
						  </div>
					  </div>
					  {/* Secondary Navbar items*/}
					  <div className="hidden md:flex items-center space-x-3">
						  <Link to="/" className="py-2 px-2 text-lg hover:text-opacity-100 hover:bg-gray-700 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-opacity-75">Log In</Link>
						  <Tooltip
                id="darkModeTooltip"
                tooltipText="Dark/Light Mode" 
                className="pt-1"                   
              >
                <DarkModeToggle aria-hidden="true" aria-describedby="darkModeTooltip" />
              </Tooltip>
					  </div>
					    {/* Mobile menu*/}
					    <div className="md:hidden flex items-center">                           
                  <MobileMenu aria-describedby="mobileMenuTooltip" />
              </div>
          </div>
        </div>
		  </nav>
    </>
  )
}

export default Navigation