
import render from './handlers/render.handler.js'

const routes = [
  {
    method: 'get',
    path: '/*',
    handler: render
  }
]

export default routes;
