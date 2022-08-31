import * as React from 'react'
import { navigate } from 'gatsby'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline'

const Login = () => {
  const { isSignedIn, googleUser, signIn, signOut } = useGoogleAuth()

  return (
    <div className='flex items-center flex-shrink-0 text-lg pr-2'>
      <button
        className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white"
        onClick={() => signIn()}
      >
        <span className="flex items-center flex-shrink-0 text-lg pr-2">
          <LoginIcon className="block h-9 w-9 pr-2 text-red-500" aria-hidden="true" />
          <span>Login</span>
        </span>
      </button>
      <span className='ml-4'>
      <button 
        className="bg-slate-700 block px-3 py-2 rounded-md text-lg font-medium items-center justify-center hover:bg-slate-600/30 hover:text-white" 
        onClick={signOut}
      >
        <span className="flex items-center flex-shrink-0 text-lg pr-1">
          <span>Logout</span>
          <LogoutIcon className="block h-9 w-9 pl-2 text-red-500" aria-hidden="true" />
        </span>
      </button>
      </span>

      {isSignedIn && (
        <div>
          <h1>{googleUser.profileObj.name}</h1>
          <img src={googleUser.profileObj.imageUrl} alt="Avatar." />
          <p>{googleUser.profileObj.email}</p>
        </div>
      )}
    </div>
  )
}

export default Login
