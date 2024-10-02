"use client";
const queryClient = new QueryClient();
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
