import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import * as Sentry from "@sentry/node"
import * as Tracing from "@sentry/tracing"

const app = express()

import * as run from "./libs/setupScripts";
run.createRole();
run.createMeeting();
run.createDraw();
run.createUser();

Sentry.init({
  dns: "https://1d155a81c4c148bca3b44ef3bf6d6700@o568415.ingest.sentry.io/5713468",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
})

app.use(Sentry.Handlers.requestHandler({
  serverName: false,
  user: ["email"],
}))
app.use(Sentry.Handlers.tracingHandler())

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

// routes
import authRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import drawRoutes from './routes/draw.route'

app.get('/', (req, res) => {
  res.json({
    "name": app.get('pkg').name,
    "autor": app.get('pkg').author,
    "description": app.get('pkg').description,
    "version": app.get('pkg').version
  });
  console.log('Epale chamo esto está yendo bien...')
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/draws', drawRoutes)

app.use(Sentry.Handlers.errorHandler())

app.use(function onError(err, req, res, next) {
  res.statusCode = 500
  res.end(res.sentry + "\n")
})

export default app;