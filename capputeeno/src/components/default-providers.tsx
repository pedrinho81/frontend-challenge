"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode
}

export function DefaultProviders({children}: DefaultProvidersProps) {
  const client = new QueryClient();
  const theme = {
    desktopBreakpoint: "768px"
  }
  return (
    <>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </>
  );
}
