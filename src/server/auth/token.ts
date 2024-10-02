import { env } from "@/env";
import jwt from "jsonwebtoken"

export interface TokenData  {
    userID: string 
}

const SIGNING_SECRET ="WU4PjFqn3dGRUt7ht2iuIJvpSCYnCPuq";

export const createToken = async(data: TokenData) => {
    const tokenPromise: Promise<string> = new Promise((resolve, reject) => {
        jwt.sign(data, SIGNING_SECRET, function(err, token) {
           if(err)return reject(err);
           resolve(token!);
          });
    });

    return await tokenPromise;
}

export const verifyToken = async(token: string) => {
    const parseTokenPromise = new Promise((resolve, reject) => {
        jwt.verify(token, SIGNING_SECRET,  function(err, decoded) {
            if(err) return reject(err);
            resolve(decoded);
          });
    });

    return await parseTokenPromise as TokenData;

}