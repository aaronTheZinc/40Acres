
import { TRegisterInput } from "@/schema/auth";
import { db } from "../db";

export const createUser = (input: TRegisterInput) => {
    return db.user.create({
        data: {
            ...input
        }
    })
}

export const getUserByEmail = (email: string) => {
    return db.user.findFirstOrThrow({
        where: { email }
    })
};

export const getUserByID = (id: string) => {
    return db.user.findUnique({ where: { id } })
}