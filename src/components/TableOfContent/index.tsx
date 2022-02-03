import * as React from 'react'
import { useState, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { ViewListIcon } from '@heroicons/react/outline'
import Tooltip from '@/components/Tooltip'
import WavyHr from '@/components/WavyHr'

// https://haseebmajid.dev/blog/toc-in-gatsby#toc
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
  // https://headlessui.dev/react/popover#positioning-the-panel
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
                className='bg-gray-700 w-auto h-auto rounded-r-md pr-2 pt-2 pb-0 -ml-1 text-gray-200'
                aria-describedby="tocTooltip"
              >              
                <span className='inline-flex items-center'>
                  <ViewListIcon 
                    className='w-8 h-8 ml-2 text-gray-200' 
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
                <div className="rounded-lg shadow-lg ring-1 mt-2 ml-2 mr-2 bg-gray-700  ring-black ring-opacity-5">                  
                  <div className='text-gray-200 text-lg text-center underline underline-offset-2 decoration-wavy decoration-fuchsia-600'>Table Of Contents</div>
                  <WavyHr className='mt-1 mb-1' />
                  <nav className='overflow-y-auto overflow-x-hidden nav-scroll h-96 w-auto'>
                    <ul className='flex flex-col'>        
                      {headings.map((heading) => {
                        if (heading.depth > 2) {
                          return <div />;
                        }
  
                        return (
                          <li className='p-1 ml-1 mb-4 mt-2 mr-1 list-none' key={heading.value}>
                            <a
                              className='hover:text-gray-300 transition duration-300 underline underline-offset-2 decoration-wavy decoration-fuchsia-600'
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