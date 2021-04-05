// Configuring the app
import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

const app = express()

import * as run from "./libs/setupScripts";
run.createRole();
run.createMeeting();
run.createDraw();
run.createUser();

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

// routes
//import productRoutes from './routes/product.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import drawRoutes from './routes/draw.routes'

app.get('/', (req, res) => {
  res.json({
    "name": app.get('pkg').name,
    "autor": app.get('pkg').author,
    "description": app.get('pkg').description,
    "version": app.get('pkg').version
  });
  console.log('Epale chamo esto está yendo bien...')
})

// app.use('/api/v1/products', productRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/draws', drawRoutes)

export default app;