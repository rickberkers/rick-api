import jwt from "jsonwebtoken";

export default class AuthenticationService {

    getToken = (): string => {
        return jwt.sign("rick", process.env.ACCESS_TOKEN_SECRET as string, {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        });
    };
}