import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Bio from '@/components/Bio'
import ScrollDown from '@/components/ScrollDown'
import Scroll from '@/components/Scroll'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/outline'
import ScrollIndicator from '@/components/ScrollIndicator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Tags from '@/components/Tags'
import TableOfContent from '@/components/TableOfContent'
import NowPlaying from '@/components/PlayList'
import GiscusComments from '@/components/GiscusComments'
import WavyHr from '@/components/WavyHr'
import Stars from '@/components/Stars'

const components = { Link }

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string
        description: string
        author: string
        date: string
        tags: string[]
        publicId: string
        videoTitle: string
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
  const { frontmatter, timeToRead } = data.mdx
  const pathname = '/' + data.mdx.slug
  return (
    <Layout>
      <SEO
        type={data.mdx.slug.slice(0, 5) === 'blog/' ? 'blog' : 'page'}
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        lastUpdated={data.mdx.parent.modifiedTime}
        keywords={frontmatter.tags}
        pathname={pathname}
      />
      <Header />
      <TableOfContent headings={data.mdx.headings} />
      <ScrollIndicator />
      <main>
        <Stars />
        <article className="mb-10">
          <section className="px-4 lg:px-0 mt-8 mb-20 max-w-screen-lg mx-auto text-white light:text-black prose md:prose-lg lg:prose-xl prose-a:text-purple-600 hover:prose-a:text-purple-500">
            <div>
              <h1 className="text-4xl font-bold text-white leading-tight l-2 text-center">{frontmatter.title}</h1>
              <h2 className="text-lg font-medium italic text-white light:text-black text-center">
                {frontmatter.description}
              </h2>
              <div className="flex items-center flex-wrap mb-10 lg:place-content-start md:place-content-center sm:place-content-center">
                <div className="text-white light:text-black mr-2 ml-3 inline-flex items-center leading-none text-base py-1">
                  <TagIcon className="w-6 h-6 mr-1" />
                  <Tags className="py-1 px-2 text-gray-200" tags={frontmatter.tags} />
                </div>
                <div className="text-white light:text-black mr-2 inline-flex items-center leading-none text-base py-1">
                  <CalendarIcon className="w-6 h-6 mr-1" />
                  {frontmatter.date}
                </div>
                <div className="text-white light:text-black mr-3 inline-flex items-center leading-none text-base">
                  <ClockIcon className="w-6 h-6 mr-1" />
                  {timeToRead} min read
                </div>
                <div className="text-white light:text-black mr-3 inline-flex items-center leading-none text-base">
                  <NowPlaying />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <Bio />
            </div>
            <MDXRenderer localImages={frontmatter.image} components={components}>
              {data.mdx.body}
            </MDXRenderer>
            <GiscusComments mapping={pathname} />
            <WavyHr />
          </section>
          <ScrollDown
            className="scroll z-20 right-4 md:right-3 top-20"
            size={40}
            css="position: fixed; color: gray; width: 40px; height: 40px;"
          />
          <Scroll
            className="scroll z-20 right-4 md:right-3 bottom-4"
            showBelow={1500}
            size={40}
            css="position: fixed; color: gray; width: 40px; height: 40px;"
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
        publicId
        videoTitle
        date(formatString: "YYYY-MM-DD")
        tags
      }
      headings {
        value
        depth
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

export function Head(props: HeadProps) {
  return (
    <>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
    </>
  )
}
