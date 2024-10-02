import { postRouteValidator } from "@/lib/router";
import { RegisterInputSchema, TRegisterInput } from "@/schema/auth";
import { createNewUser } from "@/server/auth/index";

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const failed = { status: 400 }

export const POST = postRouteValidator<TRegisterInput>(RegisterInputSchema, async(req) => {
    return await createNewUser(req.data)
    .then((user) => NextResponse.json({ user }, { status: 200 }) )
    .catch((error) => {
        if (error instanceof PrismaClientKnownRequestError) {
            // Check for unique constraint error
            if (error.code === 'P2002') {
                return NextResponse.json({ err: `${error.meta?.target ?? "field"} exists already` }, failed)
            };
            return NextResponse.json({ err: "account exists already" }, failed)
          };

          return NextResponse.json({ err: "failed to register user" }, failed)
    })
})

// export function POST(req: NextApiRequest) {
//     return NextResponse.json({ complete: true })
// }