import * as React from 'react'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'

const Details = () => {
  const { googleUser } = useGoogleAuth()

  return (
    <div>
      <p>This is a client-only route. You can get additional information about a user on the client from this page.</p>
      <ul>
        <li>
          Image: <img className="rounded h-9 w-9" src={googleUser.profileObj.imageUrl} alt="Avatar" />
        </li>
        <li>Name: {googleUser.profileObj.name}</li>
      </ul>
    </div>
  )
}

export default Details
