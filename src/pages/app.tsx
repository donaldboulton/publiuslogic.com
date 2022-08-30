import * as React from 'react'
import { Router } from '@reach/router'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Profile from '@/components/Profile'
import Details from '@/components/Details'
import Login from '@/components/Login'
import PrivateRoute from '@/components/PrivateRoute'
import Status from '@/components/Status'

const App = () => (
  <>
    <Header />
    <Layout>
      <Status />
      <Router>
        <PrivateRoute path="/app/details" component={Details} />
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </Layout>
    <Footer />
  </>
)

export default App
