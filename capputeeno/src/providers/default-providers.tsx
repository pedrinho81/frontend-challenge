"use client";

import { CartContextProvider } from "@/contexts/CartContext";
import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();
  const theme = {
    mobileBreakpoint: "460px",
    desktopBreakpoint: "968px",
    tabletBreakpoint: "768px",
  };
  return (
    <>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          <CartContextProvider>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </CartContextProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </>
  );
}
