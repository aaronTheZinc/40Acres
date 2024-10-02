import { postRouteValidator, securedPostRouteValidator } from "@/lib/router";
import { PropertyCreationInputSchema, TPropertyCreationInput } from "@/schema/property";
import { createProperty } from "@/server/db/property";
import { NextResponse } from "next/server";

export const POST = securedPostRouteValidator<TPropertyCreationInput>(PropertyCreationInputSchema, async(req) => {
    const input = req.data;
    const auth = req.auth;
    return createProperty(auth.userID, input)
    .then((property) => NextResponse.json({ property }))
    .catch((err => NextResponse.json({ err: 'failed to create property'}, { status: 400 })))
})