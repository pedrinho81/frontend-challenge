/* eslint-disable @next/next/no-img-element */
"use client";
import { BackBtn } from "@/components/back-button";
import { useProduct } from "@/hooks/useProduct";
import styled from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
import { CartIcon } from "@/components/icons/cart-icon";
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  section {
    display: flex;
    width: 100%;
    gap: 32px;
    margin-top: 24px;
    img {
      max-width: 640px;
      width: 50%;
    }
    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

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
    font-size: 16px;
    color: var(--text-dark-2);
    line-height: 150%;
  }
  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }
  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: var(--shapes-dark);
    margin-bottom: 1.5rem;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark-2);
  }
  div {
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
  const { data } = useProduct(searchParams.id);
  console.log(searchParams.id);
  console.log(data);

  return (
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
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <div>
              <h3>Descrição</h3>
              <p>{data?.description}</p>
            </div>
          </ProductInfo>
            <button>
              <ShoppingBagIcon />
              Adicionar ao carrinho
            </button>
        </div>
      </section>
    </Container>
  );
}
