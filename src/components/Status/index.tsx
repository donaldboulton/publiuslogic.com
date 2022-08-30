import * as React from 'react'
import { Link, navigate } from '@reach/router'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'

export default () => {
  const { isSignedIn } = useGoogleAuth()
  const isLoggedIn = isSignedIn
  let details
  if (!isLoggedIn()) {
    details = (
      <p className='flex inline-block text-slate-200'>
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">Login</Link>.
      </p>
    )
  } else {
    const { googleUser, signOut } = useGoogleAuth()
    details = (
      <p className='flex inline-block'>
        Logged in as {<img className="rounded h-9 w-9" src={googleUser.profileObj.imageUrl} alt="Avatar" />} ({googleUser.profileObj.name}
        )!
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            signOut(() => navigate(`/app/login`))
          }}
        >
          Logout
        </a>
      </p>
    )
  }

  return <div className="text-slate-200">{details}</div>
}
