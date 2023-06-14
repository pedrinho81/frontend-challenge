"use client";

import { ProductsList } from "@/components/ProductList";
import styled from "styled-components";
import { FilterBar, Pagination } from "@/components/Filters";
import { DefaultPageLayout } from "@/app/layout.styles";

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
