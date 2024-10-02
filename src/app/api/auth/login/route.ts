import { postRouteValidator } from "@/lib/router";
import { LoginInputSchema, TLoginInput } from "@/schema/auth";
import { login } from "@/server/auth/index";
import { NextResponse } from "next/server";

export const POST  = postRouteValidator<TLoginInput>(LoginInputSchema, async(req) => {
    const { email, password } = req.data;
   return login(email, password).then(token => NextResponse.json({ token }, {  status: 200}))
   .catch((err => NextResponse.json({ err: err.message }, { status: 400 })))
    
})