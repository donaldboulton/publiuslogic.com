import * as React from 'react'
import { useState, useEffect } from 'react'
import { axios } from 'axios'
import fetch from 'isomorphic-fetch'
import { Link } from 'gatsby'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'

function SSR (props) {
  const { image } = props.serverData

  return (    
    <>
      <Layout>
        <Header />
        <main>
          <article>
            <div className="max-w-md mt-16 mb-32 mx-auto bg-gray-800 light:bg-gray-200 text-white light:text-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">                  
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    alt='doggo'
                    src={image}
                  />
                </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">SSR: Server Side Rendering</div>
                  <div>
                    <Link to='/blog/gatsby-version-four' className="text-fuchsia-600 hover:text-fuchsia-700 block mt-2 text-lg leading-tight font-medium hover:underline">Back to Post</Link>
                  </div>
                 <p className="mt-2 text-gray-500">See the Doggies! Doggies of all kinds of shapes, sizes and colors. With many different Breeds!</p>
                 <p className="mt-2 text-gray-500">Refresh the Page for More Doggies</p>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </Layout>
    </>
  )
}

export default SSR

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(res => res.json())

  return {
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message
    }
  }
}
