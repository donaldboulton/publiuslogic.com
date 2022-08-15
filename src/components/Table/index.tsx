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
            <div className="overflow-x-auto nav-scroll relative mb-8 shadow-md opacity-75">
              <table className="w-full mb-8 rounded-t-lg sm:rounded-md text-md text-left text-slate-800 dark:text-slate-300">
                <thead className="text-md uppercase rounded-t-lg bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="py-3 px-6 text-slate-800 dark:text-slate-300 ml-2">
                      Article Name
                    </th>
                    <th scope="col" className="py-3 px-6 text-slate-800 dark:text-slate-300">
                      Dated
                    </th>
                    <th scope="col" className="py-3 px-6 text-slate-800 dark:text-slate-300">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6 text-slate-800 dark:text-slate-300">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap text-slate-800 dark:text-slate-300"
                    >
                      <Link
                        to="/blog/playtime"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Playtime
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2020-04-07</td>
                    <td className="py-4 px-6 text-slate-300">Logic</td>
                    <td className="py-4 px-6 text-slate-300">God</td>
                  </tr>
                  <tr className="bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700"
                    >
                      <Link
                        to="/blog/creation-of-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Creation Of All
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2021-04-04</td>
                    <td className="py-4 px-6 text-slate-300">Creation</td>
                    <td className="py-4 px-6 text-slate-300">Trinity</td>
                  </tr>
                  <tr className="bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300"
                    >
                      <Link
                        to="/blog/trinity-of-angels"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Trinity of Angels
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2021-04-11</td>
                    <td className="py-4 px-6 text-slate-300">Creation</td>
                    <td className="py-4 px-6 text-slate-300">Holy Spirit</td>
                  </tr>
                  <tr className="bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700"
                    >
                      <Link
                        to="/blog/works-of-flesh"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Works Of Flesh
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2021-04-13</td>
                    <td className="py-4 px-6 text-slate-300">Creation</td>
                    <td className="py-4 px-6 text-slate-300">God</td>
                  </tr>
                  <tr className="bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300 whitespace-nowrap"
                    >
                      <Link
                        to="/blog/virtue"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Virtue
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2021-04-22</td>
                    <td className="py-4 px-6 text-slate-300">Creation</td>
                    <td className="py-4 px-6 text-slate-300">Truth</td>
                  </tr>
                  <tr className="bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium bg-slate-200 border-b dark:bg-slate-700 border-slate-200 dark:border-slate-700 whitespace-nowrap"
                    >
                      <Link
                        to="/blog/immorality-abortion"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Immorality Abortion
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2021-10-13</td>
                    <td className="py-4 px-6 text-slate-300">Creation</td>
                    <td className="py-4 px-6 text-slate-300">Murder</td>
                  </tr>
                  <tr className="bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium bg-slate-300 dark:bg-slate-800 border-b border-gray-800 dark:border-slate-300 whitespace-nowrap"
                    >
                      <Link
                        to="/blog/trinity-of-man"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 hover:text-slate-200 hover:shadow-slate-200/50 dark:text-slate-300 dark:hover:text-slate-200 dark:hover:shadow-slate-800/50 underline underline-offset-8"
                      >
                        Trinity of Man
                      </Link>
                    </th>
                    <td className="py-4 px-6 text-slate-300">2022-04-17</td>
                    <td className="py-4 px-6 text-slate-300">Good Evil</td>
                    <td className="py-4 px-6 text-slate-300">Devil</td>
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
