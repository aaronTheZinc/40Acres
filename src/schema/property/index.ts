import { z } from "zod";

export const PropertyCreationInputSchema = z.object({
    address: z.string(),
    zipcode: z.number(),
    maxShareCount: z.number().min(1),
    thumbnail: z.string().url().optional(),
    sharePrice: z.number(),
    description: z.string(),
})

export type TPropertyCreationInput = z.infer<typeof PropertyCreationInputSchema>
