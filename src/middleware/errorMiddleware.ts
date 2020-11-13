import { NextFunction, Request, Response } from 'express';
import {HttpError} from "http-errors";

export default function errorMiddleware(error: HttpError, request: Request, response: Response, next: NextFunction) {
    if(process.env.NODE_ENV === 'production') {
        return response.status(500).send(`Something went wrong`);
    }
    response.status(500 || error.status).send({ message: error.message});
}