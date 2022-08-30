import React from 'react'
import { navigate } from 'gatsby'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'

interface PrivateRouteProps {
  location: string
  component: isRequired
}
const PrivateRoute = ({ component: Component, location, ...rest }: PrivateRouteProps) => {
  const { isSignedIn } = useGoogleAuth()
  const isLoggedIn = isSignedIn
  if (!isLoggedIn() && location.pathname !== `/app/details`) {
    navigate(`/app/details`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
