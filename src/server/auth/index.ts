import { TRegisterInput } from "@/schema/auth";
import { createUser, getUserByEmail, getUserByID } from "../db/user"
import { createToken, verifyToken } from "./token"
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

const SALT_ROUNDS = 10;

export const login = async(email: string, password: string): Promise<string> => {
    const user  = await  getUserByEmail(email);
    const match = bcrypt.compare(password, user.password);
    if(!match) throw new Error("failed to authenticated");
    return createToken({ userID: user.id })
}

export const createNewUser = async(input: TRegisterInput) => {
    const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
    return createUser({...input, password: hashedPassword})
}

export const useServerAuthSession = async() => {
  const reqCookies = cookies();
   const token = reqCookies.get("token")?.value;
   console.log("TOKEN:: ", token)
   if(!token) return null;
   const tknData = await verifyToken(token)
   const user = await getUserByID(tknData.userID);

   return { token, user }

}