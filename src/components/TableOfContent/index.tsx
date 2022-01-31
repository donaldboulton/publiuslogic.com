import * as React from 'react'
import { useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ViewListIcon, XCircleIcon } from '@heroicons/react/outline'
import Tooltip from '@/components/Tooltip'

const headings = [
   {
      value: "h2",
      depth: 1,
    },
    {
      value: "h3",
      depth: 2,
    },
];

interface TableOfContentProps {
  headings: Array<{ heading: string; title: string }>;
}
  
export type HeadingType = {
  value: string
  depth: number
}
  
type HeadingQueryType = {
    allMdx: {
      headings: {
        value: string
        depth: number
      }[]
    }
}

const TableOfContent = ({ headings }: TableOfContentProps) => {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  return ( 
    <div className='fixed left-1 md:left-1 z-10 top-1/4 w-32 h-2/4'> 
      <Popover as="div">
        {({ open }) => (
          <>
            <Tooltip
              id="tocTooltip"
              tooltipText="Table Of Contents"                    
            >
              <Popover.Button 
                ref={setReferenceElement}
                className='bg-gray-700 w-auto h-auto rounded-r-md pr-1 pt-2 pb-0 text-gray-200'
                aria-describedby="tocTooltip"
              >              
                <span className='inline-flex items-center'>
                  <span>
                    <ViewListIcon 
                      className='w-8 h-8 ml-2 text-gray-200' 
                      />
                  </span>
                  <ChevronRightIcon
                    className={`${open ? 'transform rotate-90 text-red-600' : ''}
                    h-5 w-5 text-gray-200 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                    aria-hidden="true"
                  />
                </span>
              </Popover.Button>
            </Tooltip>
            <Popover.Overlay
              className={`${
                open ? 'opacity-30 fixed inset-0' : 'opacity-0'
              } bg-black`}
            />
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel
                className='w-52'
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <div className="rounded-lg shadow-lg ring-1 bg-gray-700  ring-black ring-opacity-5">
                  <div className='text-right mt-2 mr-2'>
                    {({ close }) => (
                      <button
                        onClick={close()}
                      >
                        <XCircleIcon className='w-6 h-6' />
                       </button>
                      )}
                  </div>
                  <div className='text-gray-200 text-lg text-center underline underline-offset-2 decoration-wavy decoration-fuchsia-600'>Table Of Contents</div>
                  <nav className='overflow-y-auto overflow-x-hidden nav-scroll h-96 w-auto'>
                    <ul className='flex flex-col'>        
                      {headings.map((heading) => {
                        if (heading.depth > 2) {
                          return <div />;
                        }
  
                        return (
                          <li className='p-1 ml-1 mb-4 mt-2 mr-1 list-none' key={heading.value}>
                            <a
                              className='hover:text-gray-300 transition duration-300 no-underline'
                              href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                            >
                              {heading.value}
                            </a>
                          </li>
                        );
                      })}        
                    </ul>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default TableOfContent