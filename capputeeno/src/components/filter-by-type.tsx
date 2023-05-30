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
  gap: 10px;
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    gap: 40px;
    flex-wrap: nowrap;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;

  text-align: center;
  text-transform: uppercase;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
    
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      line-height: 22px;
      font-size: 16px;
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
