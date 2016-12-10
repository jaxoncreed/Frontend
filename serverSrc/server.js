import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../clientSrc/reducers'
import { match, RouterContext } from 'react-router'
import routes from '../clientSrc/routes.jsx'

const app = express();

export default function startServer() {
  // This is fired every time the server side receives a request
  const port = process.env.PORT || 3000

  app.use('/', express.static(path.join(__dirname, '../clientBuild/')));
  app.use('/*', handleRender)

  // We are going to fill these out in the sections to follow
  function handleRender(req, res) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        // Create a new Redux store instance
        const store = createStore(reducer)

        // Render the component to a string
        const html = renderToString(<RouterContext {...renderProps} />)

        // Grab the initial state from our Redux store
        const preloadedState = store.getState()

        // Send the rendered page back to the client
        res.send(renderFullPage(html, preloadedState))
      } else {
        res.status(404).send('Not found')
      }
    })
  }


  function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="/favicon.png" />
        <title>zenow</title>
        <link rel="stylesheet" type="text/css" href="/style.css">
      </head>
      <body>
        <div id="root"><div>${html}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
  }

  app.listen(port, () => {
    console.log('App listeining on port ' + port)
  });
}
