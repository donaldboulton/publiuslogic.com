import * as React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function Subscriptions() {
  return (
    <div>
      <div className="p-2 mx-auto flex items-center space-x-2">
        <NetlifyForm
          name="subscriptions"
          honeypotName="bot-field"
          onSuccess={(response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            context.formRef.current.reset()
          }}
        >
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && <p className="text-rose-500">Thanks for Subscribing!</p>}
              {error && <p className="text-rose-500">Sorry, we could not reach our servers.</p>}
              <p className="hidden">
                <label>
                  Don not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>
              <div className="p-1 mx-auto space-x-1">
                <form className="group relative flex items-center text-fuchsia-600">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="absolute left-3 top-1/2 -mt-2.5 text-fuchsia-600 pointer-events-none group-focus-within:text-fuchsia-600"
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
                  </svg>
                  <input
                    type="email"
                    name="subscriptions"
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="focus:ring-2 focus:ring-fuchsia-500 focus:outline-none w-48 text-sm leading-6 bg-gray-200 light:bg-gray-300 text-fuchsia-600 light:text-fuchsia-600 placeholder-fuchsia-600 rounded-md py-2 pl-10 ring-1 ring-fuchsia-600 shadow-sm"
                  />

                  <span className="block space-x-2">
                    <button
                      type="button"
                      className="p-2 ml-2 border border-transparent text-sm font-medium rounded-md text-gray-200 bg-fuchsia-500 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-700/50"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </span>
                </form>
              </div>
            </>
          )}
        </NetlifyForm>
      </div>
    </div>
  )
}

export default Subscriptions
