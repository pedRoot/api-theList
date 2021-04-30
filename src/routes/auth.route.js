import * as authController from "../controllers/auth.controller"
import {Router} from "express"
import {authJWT} from "../middlewares"
import cors from "cors"
import corsOptions from "../config/cors"

const router = Router()

router.post('/signup', [authJWT.verifyToken, authJWT.isAdmin], authController.signup)
router.get('/signin', cors(corsOptions), authController.signin)

export default router;