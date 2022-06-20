import * as React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "@/components/layout"

const CategoryPage = ({ data, pageContext, path }) => (
  <Layout>
    <h2>{pageContext.category}</h2>
    <p>
      There are <b>{data.allMdx.count}</b> posts in the{" "}
      <span>{data.allMdx.category}</span> category.
    </p>
    {data.allMdx.nodes.map(post => (
      <Link to={post.frontmatter.path} key={post.id}>
        {post.frontmatter.title}
      </Link>
    ))}
  </Layout>
)

export default CategoryPage

export const pageQuery = graphql`
query CategoryPageQuery {
  allMdx(limit: 2000) {
    group(field: frontmatter___category) {
      category: fieldValue
      count: totalCount
    }
    nodes {
        frontmatter {
          title
          category
          path
        }
        slug
      }
      count: totalCount
    }
  }
`