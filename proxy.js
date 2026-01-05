// // proxy.js (in your root directory)
// import { NextResponse } from 'next/server';

// export function proxy(req) {
//   const { pathname } = req.nextUrl;
//   const session = req.cookies.get('admin_session');

//   // If user tries to go to /admin but has no session cookie
//   if (pathname.startsWith('/admin') && !session) {
//     return NextResponse.redirect(new URL('/admin-login', req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/admin/:path*',
// };

import { NextResponse } from 'next/server';

export function proxy(req) {
  const { pathname } = req.nextUrl;
  
  // 1. Check if the user has the "admin_session" cookie
  const isAuthenticated = req.cookies.has('admin_session');

  // 2. If they are trying to access /admin but ARE NOT logged in
  if (pathname.startsWith('/admin') && !isAuthenticated) {
    // Redirect them to the styled login page
    return NextResponse.redirect(new URL('/admin-login', req.url));
  }

  // 3. If they are logged in or visiting other pages, let them through
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};