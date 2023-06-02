"use client";

import { ProductsList } from "@/components/products-list";
import styled from "styled-components";
import { FilterBar } from "@/components/filter-bar";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Pagination } from "@/components/pagination";

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
