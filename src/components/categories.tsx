import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const Categories = ({ category }: { categories: string[] }) => (
  <div className="flex flex-row flex-wrap items-start gap-2 text-gray-100">
    {categories.map(category => (
      <Link
        to={`/categories/${kebabCase(category)}/`}
        className="inline-block py-1 px-3 rounded no-underline bg-fuchsia-600 hover:bg-fuchsia-700 transition ease-in-out delay-150 shadow-sm shadow-fuchsia-500/50 hover:shadow-fuchsia-700/50 text-gray-100 light:text-gray-100 text-xs font-medium tracking-tight uppercase"
        key={category}
      >
        {category}
      </Link>
    ))}
  </div>
)
export default Categories
