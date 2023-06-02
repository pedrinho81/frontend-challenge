"use client";
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState } from "react";
//alterar este context para uma interface
export const FilterContext = createContext({
  search: "",
  page: 1,
  type: FilterType.ALL,
  priority: PriorityTypes.POPULARITY,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setPriority,
        setSearch,
        setType,
        setPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
