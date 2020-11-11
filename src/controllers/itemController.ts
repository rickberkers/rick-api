import express from 'express';
import AuthenticationService from "../services/authenticationService";

export default class ItemController {

    authenticationService: AuthenticationService;

    constructor() {
        this.authenticationService = new AuthenticationService();
    }

    index = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            return res.json({ rick: "rick" });
        } catch (err) {
            return next(err);
        }
    }

    create = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            return res.json({ rick: "rick" });
        } catch (err) {
            return next(err);
        }
    }
}