import * as React from 'react'
import { Fragment, useState, useRef } from 'react'
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon, XCircleIcon } from '@heroicons/react/outline'
import DarkModeToggle from '@/components/dark-mode-toggle'
import SearchIcon from "@/components/icons/search"
import Control from "@/components/icons/control"
import HeaderPopover from '@/components/header-popover'

import Logo from '../../static/assets/publiuslogic-logo.png'
import PrimaryLogo from '../../static/assets/publiuslogic-monogram.png'

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

  return (
    <>
      <Disclosure as="nav" className='bg-gradient-to-r from-gray-800 via-transparent to-gray-800 sticky top-0 z-40'>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center text-lg justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to='/' title='Home Page'>
                      <img className="block md:hidden h-8 w-auto" src={Logo} alt="Logo" />
                      <img className="hidden md:block h-8 w-auto" src={PrimaryLogo} alt="Logo" />
                    </Link>
                  </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <>
                      {navigation.map((item) => (                      
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-lg font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>                      
                      ))}                    
                      <HeaderPopover />
                    </>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">            
                <div
                  className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Dark Light Modes</span>
                    <DarkModeToggle aria-hidden="true" />
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">                      
                      <Control className='text-gray-300 hover:text-gray-200 light:text-gray-200 text-opacity-70' aria-hidden="true" /> 
                      <ChevronDownIcon
                        className={`${open ? 'text-gray-200 transform rotate-180' : 'text-opacity-70'}
                        w-5 h-5 -mr-1 mt-1 text-gray-300 hover:text-gray-200 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden="true"
                      />
                      <span className="sr-only">Open Control Menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg py-1 bg-gray-700 light:bg-primary-light text-gray-200 light:text-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none opacity-75 hover:opacity-100">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 mr-1 ml-1 rounded-md text-lg font-medium hover:bg-purple-700 hover:text-white')}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/gallery"
                            className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 ml-1 mr-1 rounded-md text-lg font-medium hover:bg-purple-700 hover:text-white')}
                          >
                            Gallery
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (                          
                          <Link 
                            to='/search'
                            className={classNames(active ? 'bg-rose-500' : '', 'block px-3 py-2 ml-1 mr-1 rounded-md text-lg font-medium items-center justify-center hover:bg-purple-700 hover:text-white')}
                          >
                            <span className="flex items-center justify-center flex-shrink-0 text-lg pr-2"><SearchIcon aria-hidden="true" /><span>Search</span></span>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-200 text-gray-300'
                      : 'text-gray-200 hover:bg-gray-500 hover:text-gray-300',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
        )}
      </Disclosure>
    </>
  )
}