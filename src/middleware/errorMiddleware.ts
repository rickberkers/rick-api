import { NextFunction, Request, Response } from 'express';

export default function errorMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
    if(process.env.NODE_ENV === 'production') {
        return response.status(500).send(`Something went wrong`);
    }
    response.status(500).send(error.stack);
}