import express from 'express';
import AuthenticationController from "./controllers/authenticationController";

const router = express.Router();

const authenticationController = new AuthenticationController();

router.post('/login', authenticationController.login);
router.get('/items', (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    res.json("rick");
});

export default router;