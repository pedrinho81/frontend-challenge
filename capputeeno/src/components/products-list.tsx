"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  width: 100%;
  margin-top: 32px;
`;
export function ProductsList() {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          price={product.price_in_cents}
          title={product.name}
          id={product.id}
        />
      ))}
    </ListContainer>
  );
}
