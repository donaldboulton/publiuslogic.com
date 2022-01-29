import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'

// import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'
import GetPosts from '@/utils/getposts'

import Tags from '@/components/tags'

import Img from '@/components/img'

interface BlogRollProps {
  tag?: string
}
const POSTS_PER_PAGE = 12

const BlogRoll = ({ tag }: BlogRollProps) => {
  const posts = GetPosts(tag,)
  const [offset, setOffset] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selected = selectedItem.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  return (
    <div className="mt-6 flex flex-col items-center mb-10">      
      <div className="space-y-12 lg:space-y-0 flex flex-wrap mb-4">
        {posts.slice(offset, offset + POSTS_PER_PAGE).map(post => (
          <section className="p-4 md:w-1/2 lg:w-1/3">
            <motion.div className='relative' initial="initial" whileHover="hover">
              <div>
                <motion.div 
                  className="h-full border-1 border-gray-800 light:border-gray-300 bg-gray-700 light:bg-offwhite text-gray-800 light:text-gray-200 rounded-lg shadow-xl overflow-hidden p-2"
                  variants={cardVariants}
                  transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <Link to={`/${post.slug}`}>
                    <Img
                      image={post.frontmatter.image}
                      alt={post.frontmatter.title + ' featured image'}
                      className="cover-list"
                      imgClassName="cover-list"
                    />
                  <p className="sr-only">{post.frontmatter.title}</p>
                  </Link>
                  <div className="p-6">
                    {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : ''}                
                      <Link to={`/${post.slug}`}>
                        <h1 className="title-font text-xl font-bold text-white light:text-black hover:text-fuchsia-600 mt-2">
                          {post.frontmatter.title}
                        </h1>
                      </Link>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-white light:text-black mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-fuchsia-200">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {post.frontmatter.date}
                        </span>
                        <span className="text-white light:text-black inline-flex items-center leading-none text-xs">
                          <UserCircleIcon className="w-4 h-4 mr-1" />
                          {post.frontmatter.author}
                        </span>
                      </div>
                    <p className="mt-3 italic text-sm text-white light:text-black">{post.frontmatter.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
      {posts.length > POSTS_PER_PAGE ? (
        <ReactPaginate
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 light:border-gray-200 bg-fuchsia-700 text-sm font-medium text-gray-200 hover:bg-fuchsia-800"
          previousLabel={
            <>
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-800 text-gray-200 bg-fuchsia-700 hover:bg-fuchsia-800 text-sm font-medium"
          nextLabel={
            <>
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-800 light:border-gray-200 bg-primary-dark light:bg-offwhite text-sm font-medium hover:bg-fuchsia-700 text-sm font-medium"
          breakLabel={'...'}
          breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-800 light:border-gray-200 text-sm font-medium"
          pageCount={Math.ceil(posts.length / POSTS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="relative z-0 inline-flex shadow-sm -space-x-px border-gray-800 light:border-gray-200"
          activeLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-800 light:border-gray-200 text-gray-200 light:text-gray-800 text-sm font-medium hover:bg-fuchsia-700 bg-fuchsia-500"
        />
      ) : (
        ''
      )}
    </div>
  )
}
export default BlogRoll