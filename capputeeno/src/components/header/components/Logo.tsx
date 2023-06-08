"use client";
import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

const LogoText = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 2.5rem;
  }
`;

export function Logo({name}: {name: string}) {
  const { setSearch, search } = useFilter();
  return (
      <LogoText className={sairaStencil.className} href="/">
        {name}
      </LogoText>
  );
}
