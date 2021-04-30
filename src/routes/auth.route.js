import * as authController from '../controllers/auth.controller'
import {Router} from 'express'
import {authJWT} from '../middlewares'
import cors from "cors"
import corsOptions from "../config/cors"

const router = Router()

router.post('/signup', cors(corsOptions), [authJWT.verifyToken, authJWT.isAdmin], authController.signup)
router.post('/signin', authController.signin)

export default router;