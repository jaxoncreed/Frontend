import path from 'path'
import express from 'express'
import routes from './routes.map'
import bodyParser from 'body-parser'
import session from 'client-sessions'

const app = express();

export default function startServer() {

  app.use(session({
    cookieName: 'session',
    secret: process.env.SESSION_SECRET,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  }));
  app.use(bodyParser.json());
  app.use('/', express.static(path.join(__dirname, '../clientBuild/')));
  routes.forEach((route) => {
    try {
      if (route.middleware) {
        route.middleware.forEach((func) => {
          app[route.method](route.path, func);
        });
      }
      if (route.handler) {
        app[route.method](route.path, route.handler);
      }
    } catch(e) {
      console.log('Error at route ', route, e);
    }
  });

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log('App listeining on port ' + port)
  });
}
