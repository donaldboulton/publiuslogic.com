import * as React from 'react'

interface SnippetProps {
  children: React.ReactNode
}

const Snippet: React.FC<SnippetProps> = props => {
  const { children } = props

  return (
    <div className="snippet">
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default Snippet
