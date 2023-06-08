"use client";
import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState } from "react";
export const FilterContext = createContext({
  search: "",
  page: 1,
  type: FilterTypes.ALL,
  priority: PriorityTypes.POPULARITY,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterTypes.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

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
