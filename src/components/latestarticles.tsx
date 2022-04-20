import * as React from 'react'
import { Link } from 'gatsby'

import Tags from '@/components/tags'
import List from '@/components/List'
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Latest Articles</h2>
            <Link
              to="/blog"
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 text-gray-800 hover:text-gray-200 font-bold text-base md:text-lg rounded-md transition ease-in-out delay-150 bg-fuchsia-300 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300"
            >
              Articles
            </Link>
            <Link
              to="/tags"
              className="inline-block px-2 py-2 md:px-6 md:py-3 mt-2 ml-4 rounded-md text-white font-bold text-base md:text-lg transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 duration-300"
            >
              Tags
            </Link>
          </div>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-6">
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 relative rounded-lg block xl:col-span-2 text-white">
              <div className="mb-6">
                <Link to={`/${post.slug}`}>
                  <span className="sr-only">{post.frontmatter.title}</span>
                </Link>
                <div className="mt-4">
                  <Tags tags={post.frontmatter.tags} />
                </div>
                <Link to={`/${post.slug}`}>
                  <h1 className="text-4xl font-bold mt-2 mb-2 leading-tight">{post.frontmatter.title}</h1>
                </Link>
                <div>{post.frontmatter.description}</div>
                <Link
                  to={`/${post.slug}`}
                  className="inline-block px-6 py-3 mt-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-600/50 hover:shadow-fuchsia-700/50 text-white"
                >
                  Read more
                  <span className="sr-only">{post.frontmatter.title}</span>
                </Link>
              </div>
              <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-6 lg:mt-0 mb-4 rounded-lg bg-gray-800 light:bg-gray-200 text-white light:text-black">
                <List variant="unordered">
                  <span className="ml-12 mb-4 text-lg transition duration-300 underline underline-offset-2 decoration-wavy decoration-fuchsia-600">
                    God and Creation
                  </span>
                  <List.Item>
                    <div>
                      <Link to="/blog/creation-of-all">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Creation Of All</span>
                        </h4>
                      </Link>
                      <span>
                        Last Testament to the Holy Bible. Intro Enclosed is the creation of all, how To Pray to The Holy
                        Trinity
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/virtue">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Virtue</span>
                        </h4>
                      </Link>
                      <span>
                        For My Children Since 2000 Here I am going to reflect on what The Christian Bible, Sufism as
                        Tasawwuf
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/immorality-abortion">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Immorality Abortion</span>
                        </h4>
                      </Link>
                      <span>
                        Prelude As in all my writings are written for my Children born since 2000. Only there purity can
                        cleanse the
                      </span>
                    </div>
                  </List.Item>
                </List>
                <List variant="unordered">
                  <span className="ml-12 mb-4 text-lg transition duration-300 underline underline-offset-2 decoration-wavy decoration-fuchsia-600">
                    Government Law
                  </span>
                  <List.Item>
                    <div>
                      <Link to="/blog/cyber-attack">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Cyber Attack</span>
                        </h4>
                      </Link>
                      <span>
                        Warning Attack! Shelter Your Minds! Prelude The below is kind of like last years playtime post,
                        it's not very
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/usa-election">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">USA Election</span>
                        </h4>
                      </Link>
                      <span>
                        USA Election Our 2020 election was the most major Racketeering scheme ever, using foreigners
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/philosophy">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Philosophy</span>
                        </h4>
                      </Link>
                      <span>
                        To Sophistry My writing of God in the past got interpreted as philosophy. I will make it real
                        clear what
                      </span>
                    </div>
                  </List.Item>
                </List>
                <List variant="unordered">
                  <span className="ml-12 mb-4 text-lg transition duration-300 underline underline-offset-2 decoration-wavy decoration-fuchsia-600">
                    Programming
                  </span>
                  <List.Item>
                    <div>
                      <Link to="/blog/applause-use-sound-confetti">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Applause useSound</span>
                        </h4>
                      </Link>
                      <span>
                        Applause Button Click the flowers 🎉 for claps in the Bio Section above and see an hear the
                        Magic. 🤟
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/cookies">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Cookies GDPR</span>
                        </h4>
                      </Link>
                      <span>
                        GDPR cookie consent with Gatsby using modules gatsby-plugin-gdpr-cookies and cookie-consent
                      </span>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div>
                      <Link to="/blog/react-netlify-forms">
                        <h4>
                          <span className="text-fuchsia-500 hover:text-fuchsia-600">Netlify Forms</span>
                        </h4>
                      </Link>
                      <span>
                        React Netlify Forms, is easy with Bot fields and invisible reCaptcha including dropZone for
                        image upload
                      </span>
                    </div>
                  </List.Item>
                </List>
              </div>
            </div>
            <div className="w-full">
              {otherPosts.map(post => (
                <Link to={`/${post.slug}`}>
                  <div className="w-full md:grid md:grid-cols-2 mb-10 p-2 rounded-lg bg-gray-800 text-white">
                    <div className="text-gray-200 rounded px-4 md:col-span-2">
                      <Tags tags={post.frontmatter.tags} />
                      <div className="md:mt-0 text-white hover:text-fuchsia-600 underline underline-offset-2 decoration-wavy decoration-fuchsia-600 font-semibold text-xl mb-2">
                        {post.frontmatter.title}
                      </div>
                      <p className="block p-2 pl-0 pt-1 text-sm">{post.frontmatter.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className="top-auto mt-4 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden bg-transparent transition-all duration-200"
          style={{ height: '70px' }}
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
