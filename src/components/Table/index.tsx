import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const Table = () => {
  const container = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const item = {
    initial: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
    },
  }

  const useAnimateOnInView = () => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }, [controls, inView])

    return { ref }
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={container}>
        <div className="w-full px-4 mr-auto ml-auto">
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            key={0}
          >
            <div className="overflow-x-auto nav-scroll relative shadow-md rounded-md sm:rounded-lg opacity-75">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-gray-300 ml-2">
                      Article Name
                    </th>
                    <th scope="col" className="py-3 px-6 text text-gray-300">
                      Dated
                    </th>
                    <th scope="col" className="py-3 px-6 text-gray-300">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6 text-gray-300">
                      Tags
                    </th>
                    <th scope="col" className="py-3 px-6 text-gray-300">
                      Link's
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Playtime
                    </th>
                    <td className="py-4 px-6">2020-04-07</td>
                    <td className="py-4 px-6">Logic</td>
                    <td className="py-4 px-6">God</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/playtime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Creation Of All
                    </th>
                    <td className="py-4 px-6">2021-04-04</td>
                    <td className="py-4 px-6">Creation</td>
                    <td className="py-4 px-6">Trinity</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/creation-of-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:order-gray-900"
                    >
                      Trinity of Angels
                    </th>
                    <td className="py-4 px-6">2021-04-11</td>
                    <td className="py-4 px-6">Creation</td>
                    <td className="py-4 px-6">Holy Spirit</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/trinity-of-angels"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Works Of Flesh
                    </th>
                    <td className="py-4 px-6">2021-04-13</td>
                    <td className="py-4 px-6">Creation</td>
                    <td className="py-4 px-6">God</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/works-of-flesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Virtue
                    </th>
                    <td className="py-4 px-6">2021-04-22</td>
                    <td className="py-4 px-6">Creation</td>
                    <td className="py-4 px-6">Truth</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/virtue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Immorality Abortion
                    </th>
                    <td className="py-4 px-6">2021-10-13</td>
                    <td className="py-4 px-6">Creation</td>
                    <td className="py-4 px-6">Murder</td>
                    <td className="py-4 px-6">
                      <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Trinity of Man
                    </th>
                    <td className="py-4 px-6">2022-04-17</td>
                    <td className="py-4 px-6">Good Evil</td>
                    <td className="py-4 px-6">Devil</td>
                    <td className="py-4 px-6">
                      <Link
                        to="/blog/trinity-of-man"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default Table
