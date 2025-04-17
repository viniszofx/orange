import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const currentPath = request.nextUrl.pathname;

  // Define routes that don't require authentication
  const RoutesAllowedWithoutAuth = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/help",
    "/support",
    "/docs",
    "/signin",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ];

  // Define protected routes that require authentication
  const RoutesNotAllowedWithoutAuth = ["/dashboard", "/beta", "/app"];

  // Check if current path requires authentication
  const isProtectedRoute = RoutesNotAllowedWithoutAuth.some((route) =>
    currentPath.startsWith(route)
  );

  // Check if current path is a public route
  const isPublicRoute = RoutesAllowedWithoutAuth.some(
    (route) => currentPath === route
  );

  // Redirect to signin if accessing protected route without auth
  if (!user && isProtectedRoute) {
    console.info(`Unauthorized access attempt - ${currentPath}`);
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // Redirect authenticated users away from auth pages
  if (user && isPublicRoute && currentPath.startsWith("/sign")) {
    console.info(`Authenticated user accessing auth page - ${currentPath}`);
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
