import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import SiteMetadata from '@/utils/sitemetadata'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import PageHero from '@/components/PageHero'
import ScrollIndicator from '@/components/ScrollIndicator'
import Map from '@/components/Map'
import Email from '../../static/svg/icons/email.inline.svg'
import Phone from '../../static/svg/icons/phone.inline.svg'
import LinkedIn from '../../static/svg/icons/linkedin.inline.svg'
import Facebook from '../../static/svg/icons/facebook.inline.svg'
import Instagram from '../../static/svg/icons/instagram.inline.svg'
import Twitter from '../../static/svg/icons/twitter.inline.svg'
import Github from '../../static/svg/icons/github.inline.svg'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Stars from '@/components/Stars'

import Image from '../../static/svg/undraw/undraw_contact_us_-15-o2.svg'
import OGImage from '../../static/images/undraw/undraw_contact_us_15o2.png'

function Input(props) {
  // https://stackoverflow.com/questions/68708009/how-to-disable-submit-input-field-until-all-required-fields-and-checkboxes-are-e
  const [error, setError] = useState(false)

  const handleInvalid = event => {
    event.preventDefault()
    console.log('Error')
    setError(true)
  }

  const handleChanged = () => setError(false)

  const className = error ? 'error' : ''

  return (
    <div className={className}>
      <input {...props} onError={handleError} onChange={handleChanged} />
      {props.type === 'checkbox' && <label htmlFor={props.id}>{props.label}</label>}
    </div>
  )
}

function ContactUs() {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  const metadata = SiteMetadata().siteMetadata
  const handleSubmit = event => {
    event.preventDefault()
    console.log('Submit')
  }

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
      <div className="mt-10">
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
        <div className="mt-10 sm:mt-0 p-8 text-white light:text-black">
          <Stars />
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <div className="px-4 sm:px-0">
                {contactMethods.map(method =>
                  method.link ? (
                    <p key={method.name} className="mt-2 flex items-center text-sm text-white light:text-black">
                      <method.image className=" h-5 w-5" />
                      <span>&nbsp;{method.name}:&nbsp;</span>
                      <a
                        href={method.link}
                        className="text-rose-600 hover:text-rose-500"
                        rel="noopener noreferrer"
                        target="_blank"
                        area-label="Github"
                      >
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
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                onSuccess={(response, context) => {
                  console.log('Successfully sent form data to Netlify Server')
                  context.formRef.current.reset()
                }}
              >
                {({ handleChange, success, error }) => (
                  <>
                    <Honeypot />
                    <p className="hidden">
                      <label>
                        Don not fill this out if you are human: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 text-white light:text-black sm:p-6">
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
                              type="email"
                              name="email"
                              id="email"
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
                      <div className="px-4 py-3 p-1 mx-auto space-x-1 sm:px-6 bg-gray-800 light:bg-gray-200">
                        <span className="group relative flex items-center text-fuchsia-600">
                          {success && <p className="text-rose-500">Will get back to you A.S.A.P!</p>}
                          {error && <p className="text-rose-500">Sorry, we could not reach our servers.</p>}
                          <button
                            type="submit"
                            className="inline-flex justify-center mr-2 py-2 px-4 text-white rounded-md transition ease-in-out delay-150 bg-fuchsia-500 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 shadow-lg hover:shadow-fuchsia-700/50 duration-300"
                          >
                            Send
                          </button>
                          <span className="block space-x-2">
                            <input
                              id="agree"
                              type="checkbox"
                              className="ml-2 w-6 h-6 bg-fuchsia-500 rounded border-gray-300 focus:ring-blue-600 ring-offset-fuchsia-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                              name="agree"
                              id="agree"
                              required
                            />
                            <label for="agree" className="ml-3 text-sm font-medium text-gray-200 light:text-gray-800">
                              I agree with the{' '}
                              <Link
                                to="/blog/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-400 light:text-blue-300 hover:underline"
                              >
                                Terms and Conditions
                              </Link>
                              .
                            </label>
                          </span>
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </NetlifyForm>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default ContactUs

export function Head(props: HeadProps) {
  return (
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
      ntegrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
      crossorigin=""
    />
  )
}
