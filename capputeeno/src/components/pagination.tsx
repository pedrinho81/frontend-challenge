import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";
import { styled } from "styled-components";
import { EnumType } from "typescript";
import { BackPageIcon } from "./icons/back-page-icon";
import { NextPageIcon } from "./icons/next-page-icon";
import { useFilter } from "@/hooks/useFilter";

interface CountProps {
  selected?: boolean;
}
const PaginationContainer = styled.div`
  display: flex;
  gap: 2px;
  align-self: flex-end;
  margin-top: 1.5rem;
`;

const Count = styled.button<CountProps>`
  padding: 4px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${(props) =>
    props.selected ? "var(--orange-low)" : "var(--text-dark)"};
  background: var(--shapes-light-gray);
  border: ${(props) =>
    props.selected ? "1px solid var(--orange-low)" : "none"};
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
const Select = styled(Count)`
  margin-left: 6px;
  :active {
    border: 1px solid var(--orange-low);
  }
`;
export function Pagination() {
  const { page, setPage } = useFilter();

  const handleSelectPage = (value: number) => {
    setPage(value);
  };

  const handleUpdatePage = (step: "next" | "back") => {
    if (step === "next" && page != 5) setPage(page + 1);
    if (step === "back" && page != 1) setPage(page - 1);
  };

  return (
    <PaginationContainer>
      <Count selected={page === 1} onClick={() => handleSelectPage(1)}>
        1
      </Count>
      <Count selected={page === 2} onClick={() => handleSelectPage(2)}>
        2
      </Count>
      <Count selected={page === 3} onClick={() => handleSelectPage(3)}>
        3
      </Count>
      <Count selected={page === 4} onClick={() => handleSelectPage(4)}>
        4
      </Count>
      <Count selected={page === 5} onClick={() => handleSelectPage(5)}>
        5
      </Count>
      <Select onClick={() => handleUpdatePage("back")}>
        <BackPageIcon />
      </Select>
      <Select onClick={() => handleUpdatePage("next")}>
        <NextPageIcon />
      </Select>
    </PaginationContainer>
  );
}
