import React from 'react'
import { Redirect } from 'react-router'
import { Home, Routingdata ,FetchPage,Presider} from './components'
import fakeAuth from './Auth'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/Routingdata',
    'component': Routingdata
  },
  // {
  //   'path':'/Blocking',
  //   'component': Blocking
  // },
  // {
  //   'path':'/Miss',
  //   'component': Miss
  // },
  // {
  //   'path':'/QueryParams',
  //   'component': QueryParams
  // },
  // {
  //   'path':'/Recursive',
  //   'component': Recursive
  // },
  // {
  //   'path':'/login',
  //   'component': Login
  // },
  // {
  //   'path':'/Protected',
  //   'component': () => (fakeAuth.isAuthenticated ? (<ProtectedPage />) : (<Redirect to={{pathname: '/login',state: { from: '/Protected'}
  //   }}/>))
  // },
  // {
  //   'path': '/Counter',
  //   'component': CounterPage
  // },
  {
    'path': '/Presider',
    'component': Presider
  }
];

export default routes;
