import * as React from 'react'
import { useEffect } from 'react'
import { Helmet } from "react-helmet"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { NetlifyForm, Honeypot } from 'react-netlify-forms'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import BioTypist from '@/components/bio-typist'
import SEO from '@/components/seo'
import Header from '@/components/header'
import FindOutMore from '@/components/findoutmore'
import LatestArticles from '@/components/latestarticles'
import WavyHr from '@/components/WavyHr'
import Footer from '@/components/footer'
import ScrollIndicator from '@/components/scroll-indicator'
import List from '@/components/List';
import { CodeIcon, CloudIcon, BookOpenIcon, CheckCircleIcon } from '@heroicons/react/outline'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import OGImage from '../../static/images/jpg/dbbg.jpg'

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const item = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
}

const useAnimateOnInView = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  
  useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if (!inView) {
        controls.start("hidden");
      }
    }, [controls, inView]);
  

   return { ref };
}

export default function Home() {
  const SITE_RECAPTCHA_KEY = (process.env.GATSBY_SITE_RECAPTCHA_KEY)
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 531,
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const [ref1, isVisible1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const variants1 = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.4,
      },
    },
  };

  const [ref2, isVisible2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const variants2 = {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.6,
      },
    },
  };
  const [ref3, isVisible3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const variants3 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <>
      <SEO
        type="homepage"
        title="Home"
        description="PubliusLogic topics on Law Congress Programing and Human Anything."
        image={ogimage}
      />
      <Helmet>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />        
      </Helmet>
      <Header transparent />
      <motion.main className="font-sans" variants={container}>
        <div 
          className="relative flex content-center min-h-[55vh] md:min-h-4 items-center justify-center"
        >
          <div className="absolute top-0 bg-center">         
            <div className="absolute left-0 bottom-0 md:mb-0 w-full h-full z-10 bg-gradient-to-b from-gray-700 opacity-70"></div>
              <StaticImage
                className="cover object-contain h-96"
                formats={["auto", "webp"]}
                src="../../static/images/jpg/dbbg.jpg"
                quality={95}
                alt="Landing Image"
              />
              <div className="p-4 absolute top-16 left-3 z-20">
              <h1 className="text-4xl font-bold text-white leading-tight italic">Publiuslogic</h1>
              <h2 className="text-xl font-medium italic text-gray-300">publiuslogic.com</h2>
            </div>
          </div>
        </div>
        <motion.section variants={item} className="pb-10 bg-gray-700 light:bg-gray-200 text-gray-800 light:text-gray-200 transition-all duration-200 -mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-4 w-full md:w-4/12 px-4 text-center">
                <motion.div 
                  className="relative flex flex-col min-w-0 break-words bg-fuchsia-700 text-gray-200 transition-all duration-200 w-full mb-8 shadow-lg shadow-fuchsia-700/50 rounded-lg"
                  variants={cardVariants}
                  transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="bg-blue-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-blue-700/50 rounded-full">
                      <StaticImage
                        layout="fixed"
                        width={24}
                        height={24}
                        className="icon"
                        formats={["auto", "webp"]}
                        src="../../static/img/apple-touch-icon-32x32.png"
                        quality={95}
                        alt="prayer"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      <Link to='/blog/commandments' className='text-rose-500'>Planetary Laws</Link>
                    </h6>
                    <p className="mt-2 mb-4 text-white">
                      The Laws of man have strayed far from the truth of Creation and Gods Laws. Under Gods Law all Life is precious and should be preserved at all cost. Mans laws care nothing for life; you kill your, "Unborn Children"!
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
              <motion.div 
                className="relative flex flex-col min-w-0 break-words bg-indigo-700 text-gray-200 w-full mb-8 shadow-lg shadow-indigo-700/50 rounded-lg"
                variants={cardVariants}
                  transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="bg-purple-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-purple-500/50 rounded-full">
                      <StaticImage
                        layout="fixed"
                        width={24}
                        height={24}
                        className="icon"
                        formats={["auto", "webp"]}
                        src="../../static/img/prayer-150-150.png"
                        quality={95}
                        alt="prayer"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      <Link to='/blog/creation-of-all' className='text-rose-500'>Breath Of Life</Link>
                    </h6>
                    <p className="mt-2 mb-4 text-white">
                      The Creation of the All, was formed through song that started the dance of life from a blank and formless verse, bringing forth life to all. For all to formalize there, "Own Song"!
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <motion.div 
                className="relative flex flex-col min-w-0 break-words bg-purple-600 text-gray-200 w-full mb-8 shadow-lg shadow-purple-600/50 rounded-lg"
                variants={cardVariants}
                  transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                  }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="bg-fuchsia-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg shadow-fuchsia-600/50 rounded-full">
                      <StaticImage
                        layout="fixed"
                        width={24}
                        height={24}
                        className="icon"
                        formats={["auto", "webp"]}
                        src="../../static/img/jamstack-150-150.png"
                        quality={95}
                        alt="prayer"
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                     <a href='https://jamstack.org/' rel="noopener noreferrer" target="_blank" area-label="JAMstack" className='text-rose-500'><h6>JAMStack Technology</h6></a>
                    </h6>
                    <p className="mt-2 mb-4 text-gray-200">
                      PubliusLogic is a Static site using JAMstack architecture. Built using Gatsby, React, MDX, Tailwind and Typescript on Netlify Servers for, "Ultimate Performance"!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="text-zinc-200 light:text-zinc-800 mb-10">
              <div className='flex justify-center'>
                <StaticImage
                  className="max-w-xs m-auto w-20 h-20 mx-auto mb-3 ring ring-indigo-500 ring-offset-4 rounded-full"
                  formats={["auto", "webp"]}
                  src="../../static/assets/donald-boulton.jpg"
                  quality={95}
                  alt="Profile picture"
                />
              </div>
              <h2 className="font-bold text-2xl flex justify-center max-w-xs m-auto">Donald W. Boulton</h2>
              <a
                className="text-rose-500 hover:text-rose-400 flex justify-center max-w-xs m-auto"
                href="https://donboulton.com"
                target="_blank"
                rel="noreferrer"
              >
                https://donboulton.com
              </a>
              <div className="justify-center max-w-xl m-auto text-gray-200 hover:text-gray-400 light:text-gray-800 light:hover:text-gray-700 my-2 mb-6">
                 <div className="text-center justify-items-center">Left Hand of Father God since the beginning of time! </div>
                 <p className="text-center justify-items-center">Self Taught Full Stack Developer. Gatsby, MDX, TypeScript Tailwind CSS.</p>
              </div>
              <div className="flex justify-center max-w-xs m-auto">
                <div className="grid grid-flow-col auto-cols-min gap-4">
                  <a
                    className="flex items-center text-blue-400 hover:text-blue-500"
                    href="https://twitter.com/donboulton"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="flex-initial mr-0.5 mt-0.5"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span>donboulton</span>
                  </a>
                  <a
                    className="flex items-center text-gray-200 hover:text-gray-400 light:text-gray-800 light:hover:text-gray-700"
                    href="https://www.github.com/donaldboulton"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="flex-initial mr-0.5 mt-0.5"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span>donaldboulton</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section variants={item} className="relative py-20 bg-gray-900 light:bg-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 light:text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap bg-gray-900 light:bg-white text-gray-800 light:text-gray-300">              
              <div className="flex flex-wrap items-center mt-8">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-6">
                <h3 className="text-3xl text-white light:text-black mb-2 font-semibold leading-normal">
                  Hanging out with Cats
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white light:text-black">
                  I have Seven indoor Cats and feed a dozen or more of stray kitty's. I have always had a cat!
                  From Me and the Cats some Gatsby Starters.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white light:text-black">
                  <p><span className='text-rose-500 hover:text-rose-700 hover:shadow-rose-700/50 mt-4'> JAMStack</span>&nbsp;Starters for your pleasure.</p>
                  <a
                    href="https://github.com/donaldboulton/gatsby-starter-basic-instructions"
                    className="font-bold text-rose-600 hover:text-rose-500 hover:shadow-rose-500/50 mt-4"
                  >
                    Gatsby Starter Basic Instructions v4.11.0
                  </a>
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4">
                  <a
                    href="https://github.com/donaldboulton/gatsby-starter-dimension-v4"
                    className="font-bold text-rose-600 hover:text-rose-500 hover:shadow-rose-500/50 mt-4"
                  >
                    Gatsby Starter Dimension v4.11.0
                  </a>
                </p>
              </div>              
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">                
                <motion.div
                  ref={ref}
                  variants={variants}
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  key={0}
                >
                  <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded-lg bg-rose-600">
                    <StaticImage 
                      className="w-full align-middle rounded-t-lg" 
                      src='../../static/images/jpg/digital_box_1400-compressor.jpg' 
                      alt='PubliusLogic' 
                    />                  
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block"
                        style={{
                          height: "95px",
                          top: "-94px"
                        }}
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-rose-600 shadow-lg shadow-rose-500/50 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Lost in a Digital Box
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                         Over the last year the events, and destruction of my county by the Democrats in power, have
                         me pissed off and wondering why the USA does nothing about it.
                         So to getting lost in a Digital Box. 
                      </p>
                    </blockquote>                  
                  </div>
                </motion.div>               
              </div>
            </div>
              <div
                className="top-auto mt-4 bottom-0 left-0 bg-gray-800 light:bg-offwhite right-0 w-full absolute pointer-events-none overflow-hidden bg-transparent transition-all duration-200"
                style={{ height: "70px" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="bg-gray-700 light:bg-gray-300 text-gray-700 light:text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section variants={item} className="py-20 bg-gray-700 light:bg-gray-300">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref1}
              variants={variants1}
              animate={isVisible1 ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeIn" }}
              key={1}
            >
              <FindOutMore /> 
            </motion.div>
          </div>
        </motion.section>
        <motion.section variants={item} className="py-20 relative block bg-primary-dark">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="bg-primary-dark text-primary-dark fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-12 lg:pb-28">
            <motion.div
              ref={ref2}
              variants={variants2}
              animate={isVisible2 ? "visible" : "hidden"}
              transition={{ duration: 0.6, ease: "easeIn" }}
              key={2}
            >
              <LatestArticles />
            </motion.div>            
            <div
              className="top-auto mt-4 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden bg-transparent transition-all duration-200"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-800 light:text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
        </motion.section>
        <motion.section variants={item} className="relative block py-20 lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <motion.div
                  ref={ref3}
                  variants={variants3}
                  animate={isVisible3 ? "visible" : "hidden"}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  key={3}
                >
                  <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg">
                    <div className="flex-auto p-5 m-2 lg:p-10t text-white light:text-black">
                      <h4 className="text-2xl mb-2 font-semibold text-gray-200 underline underline-offset-3 decoration-wavy decoration-fuchsia-600">
                        Up Coming Episodes!
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-200">
                        Before the End of this Month I will be a little more explanatory on the Creation of all and Virtue!
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-200">
                        On Easter I will Give you the Final Trinity Works. <span className='underline underline-offset-2 decoration-wavy decoration-fuchsia-600'>The Trinity Of Man!</span>
                      </p>
                      <div className="mt-5 lg:mt-0 mb-4 rounded-lg bg-gray-800 light:bg-gray-200 text-white light:text-black">
                        <List variant="unordered">
                          <List.Item>
                            <p
                              className='mb-1'
                              variant="secondary"
                            >
                              The Devil is Controlling most all of your Government Officials! {' '}

                              Details on how to fight off the Devil! 😈
                            </p>
                          </List.Item>
                          <List.Item>
                            <p
                              className='mb-1'
                              variant="secondary"
                            >
                              Your Children are being brainwashed for Devilish total control! {' '}
                              Stand Up and fight for there future and freedom now! 🤫
                            </p>
                          </List.Item>
                          <List.Item>
                            <p
                              className='mb-1'
                              variant="secondary"
                            >
                              As A Species you will not Effectivity Do anything about climate control. That would Mean limiting playtime and entertainment and you have been set up 
                              to focus on only playtime pursuits. Playtime and Over population through heat from every one of you, is what is creating the <span className='underline underline-offset-2 decoration-wavy decoration-fuchsia-600'>Climate Crisis</span>! 📝
                            </p>
                          </List.Item>
                        </List>                      
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main> 
      <CookieConsent
        enableDeclineButton 
        flipButtons
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        ariaAcceptLabel="Accept Cookies"
        ariaDeclineLabel='Decline Cookies'        
        cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: "linear-gradient(to right, #4338ca, transparent, #4338ca)",
            textShadow: "2px 2px black",
          }}
          buttonStyle={{
            background: "radial-gradient(circle at top right, #4338ca, transparent)",
            color: "white",
            fontWeight: "bolder",
            borderRadius: '3px',
            border: "1px black",
            textShadow: "2px 2px black",
          }}
        >
          PubliusLogic uses cookies for user experience.{" "}
          <span 
            style={{ 
              fontSize: "14px",
              textAlign: "center",
              marginLeft: "20px"
            }}
          > 
            <Link to='/blog/privacy' className='text-gray-200' alt='Privacy Page'>
              Privacy Page
            </Link>
          </span>
        </CookieConsent>
        <ScrollIndicator />
      <Footer />
    </>
  );
}