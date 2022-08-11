import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const Table = () => {
  const tableContainer = {
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
  const [ref5, isVisible5] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants5 = {
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
      <m.section className="font-sans" variants={tableContainer}>
        <div className="w-full px-4 mr-auto ml-auto">
          <m.div
            ref={ref5}
            variants={variants5}
            animate={isVisible5 ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            key={5}
          >
            <div className="overflow-x-auto nav-scroll relative shadow-md opacity-75">
              <table className="w-full rounded-t-lg sm:rounded-md text-sm text-left text-gray-500 light:text-gray-700">
                <thead className="text-md uppercase rounded-t-lg bg-gray-800 light:bg-gray-300 light:text-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-gray-100 light:text-gray-800 ml-2">
                      Article Name
                    </th>
                    <th scope="col" className="py-3 px-6 text text-gray-100 light:text-gray-800">
                      Dated
                    </th>
                    <th scope="col" className="py-3 px-6 text-gray-100 light:text-gray-800">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6 text-gray-100 light:text-gray-800">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b border-gray-500 dark:bg-gray-900 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/playtime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Playtime
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2020-04-07</td>
                    <td className="py-4 px-6 text-gray-200">Logic</td>
                    <td className="py-4 px-6 text-gray-200">God</td>
                  </tr>
                  <tr className="bg-gray-700 border-b light:bg-gray-300 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/creation-of-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Creation Of All
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2021-04-04</td>
                    <td className="py-4 px-6 text-gray-200">Creation</td>
                    <td className="py-4 px-6 text-gray-200">Trinity</td>
                  </tr>
                  <tr className="bg-gray-900 border-b dark:bg-gray-900 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800 dark:order-gray-900"
                    >
                      <Link
                        to="/blog/trinity-of-angels"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Trinity of Angels
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2021-04-11</td>
                    <td className="py-4 px-6 text-gray-200">Creation</td>
                    <td className="py-4 px-6 text-gray-200">Holy Spirit</td>
                  </tr>
                  <tr className="bg-gray-700 border-b light:bg-gray-300 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/works-of-flesh"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Works Of Flesh
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2021-04-13</td>
                    <td className="py-4 px-6 text-gray-200">Creation</td>
                    <td className="py-4 px-6 text-gray-200">God</td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 light:bg-gray-400 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/virtue"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Virtue
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2021-04-22</td>
                    <td className="py-4 px-6 text-gray-200">Creation</td>
                    <td className="py-4 px-6 text-gray-200">Truth</td>
                  </tr>
                  <tr className="bg-gray-700 border-b light:bg-gray-300 border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/immorality-abortion"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Immorality Abortion
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2021-10-13</td>
                    <td className="py-4 px-6 text-gray-200">Creation</td>
                    <td className="py-4 px-6 text-gray-200">Murder</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap light:text-gray-800"
                    >
                      <Link
                        to="/blog/trinity-of-man"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-200 light:text-blue-500 hover:underline"
                      >
                        Trinity of Man
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-gray-200">2022-04-17</td>
                    <td className="py-4 px-6 text-gray-200">Good Evil</td>
                    <td className="py-4 px-6 text-gray-200">Devil</td>
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
