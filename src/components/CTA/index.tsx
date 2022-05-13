import * as React from 'react'

export default function CTA() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block text-gray-300 light:text-gray-900">Ready to give it a try?</span>
          <span className="block text-gray-400 light:text-gray-900">Use the starter on Github today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://github.com/hellotham/hello-gatsby-starter/generate"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-gray-200 text-base font-medium rounded-md bg-fuchsia-400 hover:bg-fuchsia-500"
            >
              Use Template
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://github.com/hellotham/hello-gatsby-starter"
              className="inline-flex items-center justify-center px-5 py-3 bg-fuchsia-500 hover:bg-fuchsia-700 border border-transparent text-gray-200 text-base font-medium rounded-md"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
