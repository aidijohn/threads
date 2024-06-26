// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
// Copy the middleware code as it is from the above resource

import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   // An array of public routes that don't require authentication.
//   publicRoutes: ["/", "/api/webhook/clerk"],

//   // An array of routes to be ignored by the authentication middleware.
//   ignoredRoutes: ["/api/webhook/clerk"],
// });

export default clerkMiddleware();

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
