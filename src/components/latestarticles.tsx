import * as React from 'react'
import { Link } from 'gatsby'

import Tags from '@/components/tags'
import Img from '@/components/img'

import GetPosts from '@/utils/getposts'

export default function LatestArticles() {
  const posts = GetPosts()
  const post = posts[0]
  const otherPosts = posts.slice(1, 5)

  return (
    <div>
      <div className="max-w-7xl mx-auto bg-primary-dark px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-4 sm:py-8 lg:py-10 lg:max-w-none">
          <div className="flex flex-row items-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Our Latest Articles</h2>
            <Link
              to={'/blog'}
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 text-gray-800 hover:text-gray-200 font-bold text-base md:text-lg rounded-md transition ease-in-out delay-150 bg-fuchsia-300 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300 ..."
            >
              Articles
            </Link>
            <Link
              to={'/tags'}
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 rounded-md text-white font-bold text-base md:text-lg transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 duration-300 ..."
            >
              Tags
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-6">
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 relative rounded-lg block xl:col-span-2 text-white">
              <Link to={`/${post.slug}`}>
                <span className="sr-only">{post.frontmatter.title}</span>
                <Img
                  image={post.frontmatter.image}
                  alt={post.frontmatter.title + ' featured image'}
                  className="object-contain md:object-scale-down"
                  imgClassName="rounded-lg"
                />
              </Link>
              <div className="mt-4">
                <Tags tags={post.frontmatter.tags} />
              </div>
              <Link to={`/${post.slug}`}>
                <h1 className="text-4xl font-bold mt-2 mb-2 leading-tight">
                  {post.frontmatter.title}
                </h1>
              </Link>
              <p>{post.frontmatter.description}</p>
              <Link
                to={`/${post.slug}`}
                className="inline-block px-6 py-3 mt-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-600/50 hover:shadow-fuchsia-700/50 text-white"
              >
                Read more
                <span className="sr-only">{post.frontmatter.title}</span>
              </Link>
            </div>
            <div className="w-full">
              {otherPosts.map(post => (
                <Link to={`/${post.slug}`}>
                  <div className="w-full md:grid md:grid-cols-3 mb-10 p-2 rounded-lg bg-gray-800 text-white">
                    <Img
                      image={post.frontmatter.image}
                      alt={post.frontmatter.title + ' featured image'}
                      className="block lg:block w-auto md:w-auto h-auto md:h-auto m-1 md:m-0 rounded-lg"
                      imgClassName="object-fit"
                    />
                    <div className="text-gray-200 rounded px-4 md:col-span-2">
                      <Tags tags={post.frontmatter.tags} />
                      <div className="md:mt-0 text-white font-semibold text-xl mb-2">{post.frontmatter.title}</div>
                      <p className="block p-2 pl-0 pt-1 text-sm">
                        {post.frontmatter.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className="top-auto mt-4 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden bg-transparent transition-all duration-200"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="bg-gray-800 text-gray-800 light:bg-offwhite light:text-offwhite fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </div>
  )
}
