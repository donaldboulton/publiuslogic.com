import * as React from 'react'
import { useState } from 'react'
import { Link } from "gatsby"
import Control from "@/components/icons/control"
import { ChevronDownIcon } from '@heroicons/react/solid'
import { SearchIcon, XCircleIcon, UserGroupIcon, PhotographIcon, CloudIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'

const CommandMenu = () => {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Popover>               
          <Popover.Button>
            <Control className='text-gray-300 hover:text-gray-200 light:text-gray-200 text-opacity-70' aria-hidden="true" /> 
            <ChevronDownIcon
              className={`${open ? 'text-gray-200 transform rotate-180' : 'text-red-500 text-opacity-70'}
              first-letter:w-5 h-5 -mr-1 mt-1 text-gray-300 hover:text-gray-200 group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden="true"
            />
              <span className="sr-only">Open Control Menu</span>
          </Popover.Button>
        </Tooltip>
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
            className='hidden mobile-menu'
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          > 
	        <ul className="origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg py-1 bg-gray-700 light:bg-primary-light text-gray-200 light:text-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none opacity-75 hover:opacity-100">
              <li>
                {({ active }) => (                          
                  <Link 
                    target="_blank"
                    to='https://publiuslogic-com.admin.datocms.com/'
                    className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-purple-700 hover:text-white')}
                  >
                    <span className="flex items-center flex-shrink-0 text-lg pr-2"><CloudIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" /><span>Login</span></span>
                  </Link>
                )}
              </li>
              <li>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 mr-1 ml-1 rounded-md text-lg font-medium hover:bg-purple-700 hover:text-white')}
                  >
                    <span className="flex items-center flex-shrink-0 text-lg pr-2"><UserGroupIcon className="block h-8 w-8 pr-2 text-purple-500"  aria-hidden="true" /><span>Profile</span></span>
                  </Link>
                )}
              </li>
              <li>
                {({ active }) => (
                  <Link
                    to="/gallery"
                    className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 ml-0 mr-1 rounded-md text-lg font-medium hover:bg-purple-700 hover:text-white')}
                  >
                    <span className="flex items-center flex-shrink-0 text-lg pr-2"><PhotographIcon className="block h-8 w-9 pr-2 text-fuchsia-500" aria-hidden="true" /><span>Gallery</span></span>
                  </Link>
                )}
              </li>
              <li>
                {({ active }) => (                          
                  <Link 
                    to='/search'
                    className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 ml-1 mr-1 rounded-md text-lg font-medium items-center justify-center hover:bg-purple-700 hover:text-white')}
                  >
                    <span className="flex items-center flex-shrink-0 text-lg pr-2"><SearchIcon className="block h-8 w-9 pr-2 text-indigo-500" aria-hidden="true" /><span>Search</span></span>
                  </Link>
                )}
              </li>
            </ul>
		  </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )    
}

export default CommandMenu