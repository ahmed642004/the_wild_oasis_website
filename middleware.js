
// This function can be marked `async` if using `await` inside
import {auth} from '@/app/_lib/auth'
 export const middleware = auth
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/account',
}