/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// const fs = require(`fs`)
const path = require('path')
const _ = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      image: File @fileByRelativePath
    }
  `)
}

const tagTemplate = path.resolve('src/templates/tag-template.tsx')
const categoryTemplate = path.resolve('src/templates/category-template.tsx')

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  // Use the graphql group command to get a list of each tag and category
  // fieldValue is the tag/category name
  const { data, errors } = await graphql(`
    query {
      categories: allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Loop over every category and create a page for each one
  const categories = data.categories.group
  categories.forEach(({ fieldValue }) =>
    createPage({
      path: `category/${fieldValue}`.toLowerCase(),
      component: categoryTemplate,
      context: {
        category: fieldValue,
      },
    })
  )
  // Same for tags
  const tags = data.tags.group
  tags.forEach(({ fieldValue }) =>
    createPage({
      path: `tags/${fieldValue}`.toLowerCase(),
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    })
  )
}
