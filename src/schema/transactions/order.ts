import { z } from "zod";

export const TransactionCreationInputSchema = z.object({
    property: z.string(),
    shareCount: z.number(),
})

export type TransactionCreationInputType = z.infer<typeof TransactionCreationInputSchema>

export const TransactionSchema = z.object({
    amount: z.number(),
    type: z.enum(['property']),
    source: z.string(),
    displayName: z.string()
})

export type TransactionType = z.infer<typeof TransactionSchema>