import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";
import {NextRequest, NextResponse} from "next/server";
//did not add restrictions for authenticated users to load songs
//work without authenticated users
export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req, res
    });
    await supabase.auth.getSession();
    return res;
};

export default middleware;