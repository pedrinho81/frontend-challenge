"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";
interface FilterItemProps {
  selected?: boolean;
}
const FilterList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
  @media (min-width: ${(props) => props.theme.mobileBreakpoint}) {
    gap: 2.5rem;
    flex-wrap: nowrap;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 0.75rem;
  line-height: 1.125rem;
  cursor: pointer;

  text-align: center;
  text-transform: uppercase;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "0.25rem solid var(--orange-low)" : ""};

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    line-height: 1.375rem;
    font-size: 1rem;
  }
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        onClick={() => handleChangeType(FilterType.SHIRT)}
        selected={type === FilterType.SHIRT}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        onClick={() => handleChangeType(FilterType.MUG)}
        selected={type === FilterType.MUG}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
