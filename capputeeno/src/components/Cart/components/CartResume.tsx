"use client";

import {  Divider  } from "@/components/Divider";
import { styled } from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
interface CartResumeProps {
  calculateTotal: number;
  deliveryFee: number;
  cartTotalWithDelivery: number;
}
const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 22rem;
  max-height: 43.75rem;
  padding: 1rem 1.5rem;
  background: white;
  div {
    width: 100%;
  }

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 1.875rem;
  }
  ul {
    color: var(--text-dark);
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 150%;
    cursor: pointer;
    li ~ li {
      margin-top: 0.75rem;
    }
  }
`;

const TotalItem = styled.div<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${(props) => (props.isBold ? "600" : "400")};
  font-size: 1rem;
  line-height: 150%;

  margin-bottom: 0.75rem;
`;

const ShopBtn = styled.button`
  color: white;
  border-radius: 0.25rem;
  background: var(--success-color);
  padding: 0.75rem;
  width: 100%;
  border: none;
  margin-top: 2.5rem;
  cursor: pointer;
  font-weight: 500;
`;
export function CartResume({
  calculateTotal,
  cartTotalWithDelivery,
  deliveryFee,
}: CartResumeProps) {
 

  return (
    <CartResultContainer>
      <div>
        <h3>Resumo do Pedido</h3>
        <TotalItem>
          <p>Subtotal de produtos</p>
          <p>{formatPrice(calculateTotal)}</p>
        </TotalItem>
        <TotalItem>
          <p>Entrega</p>
          <p>{formatPrice(deliveryFee)}</p>
        </TotalItem>
        <Divider />
        <TotalItem isBold>
          <p>Total</p>
          <p>{formatPrice(cartTotalWithDelivery)}</p>
        </TotalItem>
        <ShopBtn>FINALIZAR COMPRA</ShopBtn>
      </div>
      <div>
        <ul>
          <li>Ajuda</li>
          <li>Reembolso</li>
          <li>Entregas e Frete</li>
          <li>Trocas e devoluções</li>
        </ul>
      </div>
    </CartResultContainer>
  );
}
