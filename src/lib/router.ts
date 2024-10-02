import { TokenData, verifyToken } from "@/server/auth/token";
import { NextRequest, NextResponse } from "next/server";
import { ZodObject } from "zod";

interface ZodNextApiRequst<T=any> extends NextRequest  {
    json(): Promise<T>;
    data: T;
}

interface AuthorizedZodNextApiRequest<T> extends ZodNextApiRequst<T> {
    auth: TokenData
}


type RouterHandlerType<T> = (req: ZodNextApiRequst<T>) => Promise<NextResponse>
type AuthorizedRouterHandlerType<T> = (req: AuthorizedZodNextApiRequest<T>) => Promise<NextResponse>



export const postRouteValidator = <T=any>(validator: ZodObject<any>, handler: RouterHandlerType<T>) => {
    return async(req: NextRequest) => {
        const body = await req.json();
        const { success, data } = validator.safeParse(body);
        if(!success) return NextResponse.json({
        err: 'invalid body schema'
        });
        const zodReq = {...req, data  } as ZodNextApiRequst<T>
        return handler(zodReq);
    }
}

export const securedPostRouteValidator =<T=any>(validator: ZodObject<any>, handler: AuthorizedRouterHandlerType<T>) => {
    return async(req: NextRequest) => {
        const token = req.cookies.get('token')?.value;
        console.log("token: " , token)
        if(!token) return NextResponse.json({ err: 'unauthorized' }, { status: 403 })
        const body = await req.json();
        const { success, data } = validator.safeParse(body);
        if(!success) return NextResponse.json({
        err: 'invalid body schema'
        });
        const auth = await verifyToken(token);
        console.log("auth: ", auth);
        const zodReq = {...req, data, auth } as AuthorizedZodNextApiRequest<T>
        return handler(zodReq);
        
    }
}