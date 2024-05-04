 
import { NextResponse } from 'next/server';
import { checkValidAccessToken } from './utils/checkAccessToken';
import { refreshAccessToken } from './utils/refreshToken';
 
// Remove access and refresh cookies
function removeCookie(req ) {
  const response = NextResponse.next();
  response.cookies.delete('access');
  response.cookies.delete('refresh');
  return response;
}

export default async function middleware(req  ) {
  // Get access and refresh tokens from cookies
  const accessToken = req.cookies.get('access')?.value;
  const refreshToken = req.cookies.get('refresh')?.value;
   
  const { valid } = (await checkValidAccessToken(accessToken)) || {};
  
  const isAuthenticated = !!valid;

  if (req.nextUrl.pathname.includes('/auth') && isAuthenticated  ) {
    return NextResponse.redirect(new URL('/', req.url));
  }else{
   
    if (!isAuthenticated && refreshToken) {
      const data =await refreshAccessToken(refreshToken);
    
      if (data?.success) {
        const response = NextResponse.next();
        response.cookies.set('access', data?.accessToken);
        response.cookies.set('refresh', data?.refreshToken);
        return response;
      } else {
        return removeCookie(req);
      }
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};
