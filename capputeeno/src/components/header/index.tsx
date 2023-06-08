"use client";

import { styled } from "styled-components";
import { Logo } from "./components/Logo";
import { SearchInput } from "./components/SearchInput";
import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "./components/CartControl";

const TagHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  @media (min-width: ${(props) => props.theme.mobileBreakpoint}) {
    justify-content: space-between;
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 1.25rem 10rem;
  }
`;

export function Header() {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo name="Capputeeno"/>
      <div>
        <SearchInput
          placeholder="Procurando por algo específico?"
          handleChange={setSearch}
          value={search}
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
