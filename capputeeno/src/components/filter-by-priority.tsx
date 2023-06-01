"use client";

import { styled } from "styled-components";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  button {
    cursor: pointer;
    background: transparent;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 8px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  padding: 0.75rem 1rem;
  width: 11rem;
  background: #ffffff;
  box-shadow: 0rem 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  z-index: 999;
  top: 100%;
  right: 0.5rem;
  li {
    color: var(--text-dark);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    cursor: pointer;
    :hover {
      font-weight: bold;
    }
  }

  li + li {
    margin-top: 0.25rem;
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();
  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };
  return (
    <FilterContainer>
      <button onClick={() => handleOpen()}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
