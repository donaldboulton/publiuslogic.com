import * as React from 'react'
import { ClockIcon, ScaleIcon, PuzzleIcon, PresentationChartBarIcon } from '@heroicons/react/outline'

const times = [
  {
    name: 'Retired',
    description:
      'Been Retired Since Birth, refused get to work until I was 65, so on November 15th 2020, I come out of retirement and Judgement of Man takes place between Nov 15th and the end of the times, "Dec 31st 2020"!',
    icon: ClockIcon,
  },
  {
    name: 'Gods Laws and Judgement',
    description:
      'At PubliusLogic we Publish Logic as Common Sense. Publius was taken from The Federalist Papers and my extensive studies Of the USA Books at Large = Us Congressional Reports most of my focus was on Books I and II, including a lot of Notes and Letters from our Founding Fathers as well as reading all of our Founding Fathers Publius publications and extensively studying the true intent of some. Logic part of the name came from Thomas Payne, "Common Sense", = Logic',
    icon: PuzzleIcon,
  },
  {
    name: 'Saving Mankind',
    description:
      'The destruction of all Humanity is eminent. You are over populating the Planet at a accelerating rate. If you do not stop soon you will all be destroyed. Mother Earth is a Fallen Angel, the Devil, and Her job is to give life for mankind. You are completely disrespecting Her. She is in the process of culling or eliminating your species. You have no idea how many times this species of man called humanity has been reset. To the Recycle Bin. The negative effect and energy force your planet is producing is effecting the Whole Verse. It will not be allowed to continue, the other forms of man will see to it. GOV if you have not noticed there in the process of that now. None of your little boys with there war toys can not stop them! Everything has a off switch, the other forms of Man know how to activate yours, without turning off other things. Quite simple actually!',
    icon: ClockIcon,
  },
  {
    name: 'Internet Programming',
    description:
      'PubliusLogic is a Static site using JAMstack architecture. Built using Gatsby, React and Typescript for ultimate performance. Served on Netlify via Cloudflare CDN, on Global Server nodes with a continuous deployment (CD,) workflow. Pull requests are automatically built into preview apps, while commits to the master branch trigger the production build and deploy onto Netlify CDN edge node infrastructure. Since the whole site is just a bunch of static files copied onto multiple CDN nodes around the world, time to first byte (TTFB) is consistently fast at around 1ms to 2ms. Instant Notifications through my Slack Bots or GMail and phone text notifications, using Netlify Functions for my Mansbooks.com - publiuslogic.com workspace.',
    icon: PresentationChartBarIcon,
  },
]

export default function Retired() {
  return (
    <div className="pt-8 pb-8 bg-gray-800 light:bg-gray-300 text-gray-200 light:text-gray-900 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">Time Changes</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Repent and Accept my Son Jesus!
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Times of Man, Law, USA and World Governments To A Re-Creation of Mankind to the Spiritual Beings you have
            forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {times.map(time => (
              <div key={time.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-gray-200 bg-fuchsia-600 hover:bg-fuchsia-700">
                    <time.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">{time.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base">{time.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
