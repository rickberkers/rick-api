import express from 'express';
import { verifyToken } from './middleware/authenticationMiddleware';

import AuthenticationController from "./controllers/authenticationController";
import ItemController from "./controllers/itemController";

const router = express.Router();

const authenticationController = new AuthenticationController();
const itemController = new ItemController();

router.post('/login', authenticationController.login);
router.get('/items', verifyToken, itemController.index);
router.post('/items', verifyToken, itemController.create);

export default router;