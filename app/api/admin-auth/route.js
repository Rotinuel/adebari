// app/api/admin-auth/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { password } = await req.json();

    // Read password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (password === adminPassword) {
        const response = NextResponse.json({ success: true });

        // Set a cookie that lasts for 15 minutes
        response.cookies.set('admin_session', 'authenticated', {
            httpOnly: true, // Security: prevents JS from reading the cookie
            secure: true,
            path: '/',
            maxAge: 60 * 15,
        });

        return response;
    }

    return NextResponse.json({ success: false }, { status: 401 });
}