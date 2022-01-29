import * as React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

function Subscriptions() {
  return (
    <div>
      <div className="p-2 mx-auto flex items-center space-x-2">
        <NetlifyForm
          name='subscriptions'
          honeypotName='bot-field'
          onSuccess={(response, context) => {
            console.log('Successfully sent form data to Netlify Server')
            context.formRef.current.reset()
          }}
        >
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
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
                <p className="hidden">
                  <label>Don not fill this out if you are human: <input name="bot-field" /></label>
                </p>
                <div className="p-1 mx-auto flex items-center space-x-1">
                  <input
                    type='email'
                    name='subscriptions'
                    onChange={handleChange}
                    placeholder='Email Address'
                    required
                    className="bg-gray-200 text-gray-800 focus:ring-gray-400 focus:border-fuchsia-500 block w-48 shadow-sm sm:text-sm border-gray-400 rounded-md"          
                  />
                    <span className="block space-x-2">
                      <button type="button" className="p-2 border border-transparent text-sm font-medium rounded-md text-gray-200 bg-fuchsia-500 hover:bg-fuchsia-700 shadow-lg shadow-fuchsia-700/50" type="submit">Subscribe</button>
                   </span>
                </div>
            </>
          )}
        </NetlifyForm> 
      </div> 
    </div>
  )
}

export default Subscriptions