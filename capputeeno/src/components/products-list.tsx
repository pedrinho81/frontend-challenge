"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  h1 {
    grid-column-start: 1;
    font-size: 14px;
    @media (min-width: ${props => props.theme.tabletBreakpoint}) {
      grid-column-start: 2;
      font-size: 24px;
    }
    color: var(--orange-low);
    text-align: center;
  }
`;
export function ProductsList() {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data && data.length > 0 ? data.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          price={product.price_in_cents}
          title={product.name}
          id={product.id}
        />
      )) : (
        <h1>Em breve mais opções...</h1>
      )}
    </ListContainer>
  );
}
