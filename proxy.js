import { NextResponse } from 'next/server';

export function proxy(req) {
    const { pathname } = req.nextUrl;

    // Protect the /admin route
    if (pathname.startsWith('/admin')) {
        const authHeader = req.headers.get('authorization');

        if (!authHeader) {
            return new NextResponse(
                `<html>
                    <body style="background: #000; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif;">
                        <div style="text-align: center;">
                            <h1>Access Denied</h1>
                            <p>Please refresh and enter credentials to access the Admin Panel.</p>
                        </div>
                    </body>
                </html>`,
                {
                    status: 401,
                    headers: {
                        'WWW-Authenticate': 'Basic realm="Secure Area"',
                        'Content-Type': 'text/html'
                    },
                });
        }

        // Decoding the credentials from the auth header
        const auth = authHeader.split(' ')[1];
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

        // It is best practice to use environment variables here
        // e.g., if (user === process.env.ADMIN_USER && pwd === process.env.ADMIN_PASS)
        if (user === 'admin' && pwd === 'twelve') {
            return NextResponse.next();
        }

        return new NextResponse('Invalid credentials', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};