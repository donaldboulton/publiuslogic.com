import * as React from 'react'
import { navigate } from 'gatsby'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'
import { LoginIcon } from '@heroicons/react/outline'

function Login() {
  const { isSignedIn, signIn } = useGoogleAuth()
  const isLoggedIn = isSignedIn

  if (isLoggedIn()) {
    navigate(`/app/details`)
  }

  return (
    <div>
      <button
        to="/app/details"
        className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
        onClick={() => signIn()}
      >
        <span className="flex items-center flex-shrink-0 text-lg pr-2">
          <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
          <span>Login</span>
        </span>
      </button>
    </div>
  )
}

export default Login
