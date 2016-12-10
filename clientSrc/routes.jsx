import React from 'react'
import { createRoutes, Route } from 'react-router'

import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'

const routes = (
  <Route component={ Layout }>
    <Route path='/' component={ Home } />
  </Route>
)
export default createRoutes(routes);
