import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
const user = true
const coo = 'next-superhero'
export function middleware(request) {
    let cookies = request.cookies.get('token')
    if(!cookies || cookies !== coo){

        return NextResponse.redirect(new URL('/login',request.url ))
    }
    return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard','/services']
}