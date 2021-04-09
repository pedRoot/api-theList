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
  dsn: "https://555d24e190a5442c9e4623cf48c3a5cc@o568415.ingest.sentry.io/5713503",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

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

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
})

app.use(Sentry.Handlers.errorHandler())

app.use(function onError(err, req, res, next) {
  res.statusCode = 500
  res.end(res.sentry + "\n")
})

export default app;