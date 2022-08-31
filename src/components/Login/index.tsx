import * as React from 'react'
import { navigate } from 'gatsby'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline'

const Login = () => {
  const { isSignedIn, googleUser, signIn, signOut } = useGoogleAuth()

  return (
    <div className="flex items-center flex-shrink-0 text-lg pr-2">
      <button
        className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
        onClick={() => signIn()}
      >
        <span className="flex items-center flex-shrink-0 text-lg pr-2">
          <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
          <span>Login</span>
        </span>
      </button>
      <span className="ml-4">
        <button
          className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
          onClick={signOut}
        >
          <span className="flex items-center flex-shrink-0 text-lg">
            <span>Logout</span>
            <LogoutIcon className="block h-9 w-9 pl-2 text-red-500" aria-hidden="true" />
          </span>
        </button>
      </span>
      <div className="flex items-center flex-shrink-0">
        {isSignedIn && (
          <div className="sm:flex sm:items-start">
            <h2>Signed In with Google or to anything associated with you Google account.</h2>
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
              <img
                className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
                src={googleUser.profileObj.imageUrl}
                alt="Avatar"
              />              
            </div>
            <div className="-mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="text-base leading-6">
                <h2>{googleUser.profileObj.name}</h2>
                <p>{googleUser.profileObj.email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
