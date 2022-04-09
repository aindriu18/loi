/* part of the Auth0 integration*/
UserProvider
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  )
}

export default MyApp
