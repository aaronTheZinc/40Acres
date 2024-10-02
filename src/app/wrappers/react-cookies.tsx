"use client";

import { CookiesProvider } from "react-cookie";

export default function ReactCookiesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
