import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import BlogRoll from '@/components/blogroll'

import Image from '../../static/svg/undraw/undraw_building_websites_i78t.svg'
import OGImage from '../../static/images/undraw/undraw_building_websites_i78t.png'

interface CategoryProps {
  pageContext: {
    category: string
  }
}

const CategoryPage = ({ pageContext }: CategoryProps) => {
  const category = pageContext.category
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  const title = `Category: ${category}`
  return (
    <Layout>
      <SEO
        type="categories"
        title={title}
        description={`Posts with Category [${category}]`}
        keywords={[category]}
        image={ogimage}
        pathname={'/categories/' + category}
      />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero title={title} description={`Posts with category [${category}]`} image={Image} />
          </header>
        </article>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              to="/categories"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 md:py-4 md:text-lg md:px-10"
            >
              View All Categories
            </Link>
          </div>
        </div>
        <BlogRoll category={category} />
      </main>
    </Layout>
  )
}

export default CategoryPage
