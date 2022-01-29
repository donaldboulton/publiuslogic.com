import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import Bio from '@/components/bio'
import ScrollDown from '@/components/scroll-down'
import Scroll from '@/components/scroll'
import PostHero from '@/components/PostHero'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'
import ScrollIndicator from '@/components/scroll-indicator'
import { ImgType } from '@/components/img'
import Header from '@/components/header'
import Footer from '@/components/footer'

const components = { Link }

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        image: ImgType
        tags: string[]
      }
      slug: string
      parent: {
        modifiedTime: string
      }
      body: string
      timeToRead: string
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const { frontmatter, body, timeToRead } = data.mdx
  const pathname = '/' + data.mdx.slug
  return (
    <Layout>
      <SEO
        type={data.mdx.slug.slice(0, 5) === 'blog/' ? 'blog' : 'page'}
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        lastUpdated={data.mdx.parent.modifiedTime}
        image={frontmatter.image.childImageSharp.resize}
        keywords={frontmatter.tags}
        pathname={pathname}
      />
      <Header />
      <ScrollIndicator />
      <main className="mt-10">
        <article className="mb-10">
          <header>
            <PostHero
              image={frontmatter.image}
              title={frontmatter.title}
              tags={frontmatter.tags}
            />
          </header>
          <section className="px-4 lg:px-0 mt-12 mb-20 max-w-screen-lg mx-auto text-white light:text-black prose md:prose-lg lg:prose-xl prose-a:text-purple-600 hover:prose-a:text-purple-500">
            <div>
              <h2 className="text-lg font-medium italic text-white light:text-black text-center">{frontmatter.description}</h2>              
              <div className="flex items-center flex-wrap mb-10 lg:place-content-start md:place-content-center sm:place-content-center">                
                <span className="text-white light:text-black mr-3 inline-flex items-center leading-none text-base pl-3 pr-3 py-1">
                  <CalendarIcon className="w-6 h-6 mr-1" />
                  {frontmatter.date}
                </span>
                <span className="text-white light:text-black mr-3 inline-flex items-center leading-none text-base pl-3 pr-3 py-1">
                  <ClockIcon className="w-6 h-6 mr-1" />
                  {timeToRead} min read
                </span>
              </div>
            </div>
            <ScrollDown
              className='scroll-down z-20 right-4 md:right-3'
              direction='down' 
              to={100}
              showAbove={1500}
              size={40}
              css='position: fixed; color: gray; width: 40px; height: 40px; top: 4.5em;'
            />
            <Bio />
            <MDXRenderer localImages={frontmatter.image} components={components}>
              {data.mdx.body}
            </MDXRenderer>     
          </section>
          <Scroll
            className='scroll z-20 right-4 md:right-3 bottom-4'
            showBelow={1500}
            size={40}
            css='position: fixed; color: gray; width: 40px; height: 40px;'
          />
        </article>
      </main>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        author
        path
        date(formatString: "YYYY-MM-DD")
        image {
          childImageSharp {
            gatsbyImageData(width: 2048)
            resize(width: 1200) {
              src
              width
              height
              aspectRatio
              originalName
            }
          }
        }
        tags
        category
      }
      slug
      timeToRead
      parent {
        ... on File {
          modifiedTime
        }
      }
      body
    }
  }
`

export default BlogPost