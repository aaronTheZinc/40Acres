import { z } from "zod";

export const OrderCreationInputSchema = z.object({
    property: z.string(),
    shareCount: z.number(),
})

export type TOrderCreationInput = z.infer<typeof OrderCreationInputSchema>