/* eslint @typescript-eslint/no-var-requires: "off" */
const siteAcronyms = require('./gatsby-site-acronyms')
const queries = require('./src/utils/algolia-queries')
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'PubliusLogic',
    author: {
      name: 'Donald Boulton',
      url: 'https://publiuslogic.com',
      summary: 'Who Resides in OKC.',
    },
    description:
      'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
    siteUrl: 'https://publiuslogic.com',
    location: 'OKC, Middle Earth',
    social: {
      email: 'mailto:donaldboulton@gmail.com',
      phone: 'tel:+405-863-2165',
      facebook: 'https://www.facebook.com/donboulton',
      instagram: 'https://www.instagram.com/boulton3662',
      twitter: 'https://twitter.com/donboulton',
      linkedin: 'https://www.linkedin.com/donboulton',
      github: 'https://github.com/donaldboulton/',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: false, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets/`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/`,
        name: 'img',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: `${__dirname}/src/mdx/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
              showCaptions: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '64',
              icon: '<svg fill="#6d28d9" x="10px" class="inline-block ml-3 h-6 w-6 bottom-1 text-violet-600" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>',
              maintainCase: false,
              enableCustomId: true,
              removeAccents: false,
              isIconAfterHeader: true,
              elements: ['h2', 'h3'],
            },
          },
          {
            resolve: 'gatsby-remark-embed-video-ext',
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              sandboxOpts: 'allow-same-origin allow-scripts allow-popups allow-presentation',
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'youtube:' (YouTube IFrame player API requires iframe id)
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms: siteAcronyms,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                },
                success: {
                  classes: 'success',
                },
                sunny: {
                  classes: 'sunny',
                },
                dark: {
                  classes: 'dark',
                },
                code: {
                  classes: 'code',
                },
                summary: {
                  classes: 'summary',
                },
                info: {
                  title: 'optional',
                  details: 'true',
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener',
            },
          },
        ],
        remarkPlugins: [{ resolve: 'remark-slug' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PubliusLogic',
        short_name: 'PubliusLogic',
        start_url: '/',
        background_color: fullConfig.theme.colors.gray['800'],
        theme_color: fullConfig.theme.colors.gray['800'],
        display: 'minimal-ui',
        icon: 'static/images/gatsby/publiuslogic-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        skipIndexing: false,
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-24847941-1', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: 'GTM-WLCMLLP', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: '1328362',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        // Specify the API key for your PostHog Project (required)
        apiKey: 'phc_4EkE0WJeqTjHXjjvZsp2TNqcBf9FZNLOK1iEhxjGk8I',
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        apiHost: 'https://app.posthog.com',
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
          ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/', 'about', '/contact', '/blog/*'],
        workboxConfig: {
          importWorkboxFrom: 'cdn',
        },
      },
    },
    {
      // Needs to be last
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            // Opt-out of Google's FLoC
            'Permissions-Policy: interest-cohort=()',
          ],
        },
      },
    },
  ],
}
