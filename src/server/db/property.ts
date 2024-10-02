import { TPropertyCreationInput } from "@/schema/property"
import { db } from "../db"

export const createProperty = (author: string, input: TPropertyCreationInput) => {
    return db.property.create({
        data: {
            ...input,
            author: {
                connect: {
                    id: author
                }
            }
        }
    })
}

export const getPropertyByID = (id: string) => db.property.findUnique({
    where: { id }
})