import React from 'react'
import { createRoutes, Route } from 'react-router'

import Layout from './components/layout/Layout.jsx'
import SetSearch from './components/search/SetSearch.jsx'

const routes = (
  <Route component={ Layout }>
    <Route path='/' component={ SetSearch } />
  </Route>
)
export default createRoutes(routes);
