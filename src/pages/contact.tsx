import * as React from 'react'
import { NetlifyForm, Honeypot, Recaptcha } from 'react-netlify-forms'
import SiteMetadata from '@/utils/sitemetadata'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PageHero from '@/components/PageHero'
import ScrollIndicator from '@/components/scroll-indicator'
import Map from '@/components/map'
import Email from '@/svg/icons/email.inline.svg'
import Phone from '@/svg/icons/phone.inline.svg'
import LinkedIn from '@/svg/icons/linkedin.inline.svg'
import Facebook from '@/svg/icons/facebook.inline.svg'
import Instagram from '@/svg/icons/instagram.inline.svg'
import Twitter from '@/svg/icons/twitter.inline.svg'
import Github from '@/svg/icons/github.inline.svg'
import Header from '@/components/header'
import Footer from '@/components/footer'

import Image from '@/svg/undraw/undraw_contact_us_-15-o2.svg'
import OGImage from '@/images/undraw/undraw_contact_us_15o2.png'

function ContactUs() {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  const metadata = SiteMetadata().siteMetadata
  const SITE_RECAPTCHA_KEY = (process.env.GATSBY_SITE_RECAPTCHA_KEY)

  const contactMethods = [
    { name: 'Email', link: 'email' in metadata.social ? metadata.social.email : null, image: Email },
    { name: 'Phone', link: 'phone' in metadata.social ? metadata.social.phone : null, image: Phone },
    { name: 'LinkedIn', link: 'linkedin' in metadata.social ? metadata.social.linkedin : null, image: LinkedIn },
    { name: 'Facebook', link: 'facebook' in metadata.social ? metadata.social.facebook : null, image: Facebook },
    { name: 'Instagram', link: 'instagram' in metadata.social ? metadata.social.instagram : null, image: Instagram },
    { name: 'Twitter', link: 'twitter' in metadata.social ? metadata.social.twitter : null, image: Twitter },
    { name: 'Github', link: 'github' in metadata.social ? metadata.social.github : null, image: Github },
  ]
  return (
    <Layout>
      <SEO
        type="page"
        title="Contact Us"
        description="Our presence is real and digital. Contact us through the following ways."
        image={ogimage}
        pathname="/contact"
      />
      <Header />
      <ScrollIndicator />
      <main className="mt-10">
        <article className="post">
          <header>
            <PageHero
              title="Contact Us"
              description="Our presence is real and digital. Contact us through the following ways."
              image={Image}
            />
          </header>
        </article>
        <Map />

        <div className="mt-10 sm:mt-0 p-8 bg-gray-700 light:bg-offwhite text-white light:text-black">
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="px-4 sm:px-0">
                {contactMethods.map(method =>
                  method.link ? (
                    <p key={method.name} className="mt-2 flex items-center text-sm text-white light:text-black">
                      <method.image className=" h-5 w-5" />
                      <span>&nbsp;{method.name}:&nbsp;</span>
                      <a href={method.link} className="text-rose-600 hover:text-rose-500" rel="noopener noreferrer" target="_blank" area-label="Github">
                        {method.link}
                      </a>
                    </p>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>

            <div className="mt-5 lg:mt-0 lg:col-span-2 mb-24 rounded-lg bg-gray-800 light:bg-gray-300 text-gray-200 light:text-gray-800">              
              <NetlifyForm
                method="POST"
                name='contact'
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                enableRecaptcha
                onSuccess={(response, context) => {
                  console.log('Successfully sent form data to Netlify Server')
                  context.formRef.current.reset()
                }}
              >
                {({ handleChange, success, error }) => (
                 <> 
                    <Honeypot />   
                    <Recaptcha siteKey={SITE_RECAPTCHA_KEY} theme="dark" invisible />                                                                  
                    <p className="hidden">
                       <label>Don not fill this out if you are human: <input name="bot-field" /></label>
                    </p>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-gray-800 light:bg-gray-200 text-white light:text-black sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="off"
                              required
                              placeholder="Enter your Name here."
                              className="mt-1 bg-gray-700 light:bg-gray-300 text-gray-200 light:text-gray-800 focus:ring-gray-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md"
                              onChange={handleChange}
                            />                            
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="email" className="block text-sm font-medium text-white light:text-black">
                              Email address
                            </label>
                            <input
                              type='email'
                              name='email'
                              id='email'
                              autoComplete="off"
                              required
                              placeholder="Enter your Email here."
                              className="mt-1 bg-gray-700 light:bg-gray-300 text-gray-200 light:text-gray-800 focus:ring-gray-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md peer ..."
                              onChange={handleChange}
                            />
                            <p class="invisible peer-invalid:visible text-pink-600 text-sm">
                              Please provide a valid email address.
                            </p>
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-white light:text-black">
                              Phone
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              autoComplete="off"
                              required
                              placeholder="Enter Phone Number here."
                              className="mt-1 bg-gray-700 light:bg-gray-300 text-gray-200 light:text-gray-800 focus:ring-gray-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-white light:text-black">
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              autoComplete="on"
                              required
                              placeholder="Enter your Subject here."
                              className="mt-1 bg-gray-700 light:bg-gray-300 text-gray-200 light:text-gray-800 focus:ring-gray-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="text" className="block text-sm font-medium text-white light:text-black">
                              Message
                            </label>
                            <textarea
                              className="mt-1 bg-gray-700 light:bg-gray-300 text-gray-200 light:text-gray-800 focus:ring-gray-500 focus:border-fuchsia-500 block w-full shadow-sm sm:text-sm border-gray-800 rounded-md"
                              rows={5}
                              name="text"
                              required
                              placeholder="Enter your message here."
                              onChange={handleChange}                         
                            />
                          </div>
                        </div>
                       </div>

                      <div className="px-4 py-3 text-right sm:px-6 bg-gray-800 light:bg-gray-200">
                        {success && (
                          <p 
                            className='text-rose-500'
                          >
                            Thanks for Subscribing!
                          </p>
                        )}
                        {error && (
                          <p 
                            className='text-rose-500'
                          >
                            Sorry, we could not reach our servers.
                          </p>
                        )}         
                        <button
                          type="submit"
                          className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </div> 
                  </>                                  
                )}
              </NetlifyForm> 
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default ContactUs