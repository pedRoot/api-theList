import { Router } from 'express';
import { authJWT } from "../middlewares";
import * as val from "../validator";
import * as userCtrl from '../controllers/user.controller';

const router = Router();

router.get('/', [authJWT.verifyToken], userCtrl.show);
router.put('/', val.userEdit, val.catchError, [authJWT.verifyToken], userCtrl.update);

export default router
