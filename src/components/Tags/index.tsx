import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row flex-wrap items-start gap-2 text-gray-100">
    {tags.map(tag => (
      <Link
        to={`/tags/${kebabCase(tag)}/`}
        className="inline-block py-1 px-3 rounded no-underline bg-gray-700 hover:bg-gray-800 transition ease-in-out delay-150 shadow-sm shadow-purple-500/50 hover:shadow-purple-700/50 text-gray-100 light:text-gray-100 text-xs font-medium tracking-tight uppercase"
        key={tag}
      >
        {tag}
      </Link>
    ))}
  </div>
)
export default Tags
