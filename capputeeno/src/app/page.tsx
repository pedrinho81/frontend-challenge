"use client";

import { ProductsList } from "@/components/ProductList";
import styled from "styled-components";
import { FilterBar } from "@/components/FilterBar";
import { DefaultPageLayout } from "@/app/layout.styles";
import { Pagination } from "@/components/Pagination";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <Pagination />
        <ProductsList />
        <Pagination />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
