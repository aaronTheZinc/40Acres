import { securedPostRouteValidator } from "@/lib/router";
import { OrderCreationInputSchema, TOrderCreationInput } from "@/schema/order/order";
import { NextResponse } from "next/server";
// export const POST = securedPostRouteValidator<TOrderCreationInput>(OrderCreationInputSchema, async(req) => {
//     const input = req.body;
//     const auth = req.auth;

//     return NextResponse.json
// })