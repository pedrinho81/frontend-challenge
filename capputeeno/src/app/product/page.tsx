/* eslint-disable @next/next/no-img-element */
"use client";

import { BackBtn } from "@/components/BackButton";
import { useProduct } from "@/hooks/useProduct";
import styled from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
import { DefaultPageLayout } from "@/app/layout.styles";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { ProductInfo } from "@/components/product/ProductInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  section {
    display: flex;
    width: 100%;
    gap: 2rem;
    margin-top: 1.5rem;
    flex-direction: column;
    @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
      flex-direction: row;
      img {
        max-width: 640px;
        width: 50%;
      }
      > div {
        width: 50%;
      }
    }
    img {
      max-width: 100%;
      width: 100%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--shapes-light);
        background-color: var(--brand-blue);
        border-radius: 0.25rem;
        font-weight: 500;
        font-size: 1rem;
        padding: 0.625rem 0;
        mix-blend-mode: multiply;
        cursor: pointer;
      }
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { data, isLoading } = useProduct(searchParams.id);

  
  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : data ? (
          <ProductInfo
            key={data.id}
            id={data.id}
            image_url={data.image_url}
            name={data.name}
            price_in_cents={data.price_in_cents}
            category={data.category}
            description={data.description}
          />
        ) : (
          <h2>Nada por aqui...</h2>
        )}
      </Container>
    </DefaultPageLayout>
  );
}
