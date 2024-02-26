/* eslint-disable import/no-anonymous-default-export */
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
