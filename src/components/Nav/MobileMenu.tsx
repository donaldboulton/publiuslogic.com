import * as React from 'react'
import { useState } from 'react'
import { Link } from "gatsby"
import MenuButton from './MenuButton'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'

const MobileMenu = () => {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Popover className='overflow-hidden'>                       
        <Popover.Button>
          <MenuButton
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            className='btn w-7 h-7 text-gray-200'
          />
        </Popover.Button>
        <Popover.Overlay className="bg-black opacity-30 fixed inset-0" />
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
		      <Popover.Panel
            className='hidden mobile-menu z-40 mr-6 right-6'
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          > 
	          <ul>
			        <li><Link to="/" className="block text-sm px-2 py-4 text-gray-200 bg-gray-500">Home</Link></li>
		          <li><Link to="/about" className="block text-lg px-2 py-4 hover:bg-gray-500 transition duration-300">About</Link></li>
			        <li><Link to="/contact" className="block text-lg px-2 py-4 hover:bg-gray-500 transition duration-300">Contact Us</Link></li>
		        </ul>
		      </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )    
}

export default MobileMenu