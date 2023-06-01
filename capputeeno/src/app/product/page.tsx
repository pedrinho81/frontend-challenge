/* eslint-disable @next/next/no-img-element */
"use client";

import { BackBtn } from "@/components/back-button";
import { useProduct } from "@/hooks/useProduct";
import styled from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

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

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-dark-2);
    line-height: 150%;
  }
  h2 {
    font-weight: 300;
    font-size: 1.5rem;
    @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
      font-size: 2rem;
    }
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 0.75rem;
  }
  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 150%;
    color: var(--shapes-dark);
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--text-dark-2);
  }
  div {
    margin-bottom: 1.875rem;
    h3 {
      text-transform: uppercase;
      margin-top: 3.625rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150%;
      color: var(--text-dark);
    }
    p {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`;

export default function Product({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { cartItems, updateLocalStorage } = useContext(CartContext);
  const { data } = useProduct(searchParams.id);

  const handleAddToCart = () => {
    const hasProductsInCart = cartItems.length > 0;
    if (hasProductsInCart) {
      let cartItemsArray = [...cartItems];
      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        data &&
          cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id });
      }
      updateLocalStorage(cartItemsArray);
    } else {
      data &&
        updateLocalStorage([
          {
            ...data,
            id: searchParams.id,
            quantity: 1,
          },
        ]);
    }
  };

  return (
    <DefaultPageLayout>
      <Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} alt="" />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span> {formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddToCart}>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  );
}
