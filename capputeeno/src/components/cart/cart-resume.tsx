"use client";

import { Divider } from "@/components/divider";
import { styled } from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
interface CartResumeProps {
  calculateTotal: number;
}
const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 22rem;
  max-height: 43.75rem;
  padding: 16px 24px;
  background: white;
  div {
    width: 100%;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  ul {
    color: var(--text-dark);
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    cursor: pointer;
    li ~ li {
      margin-top: 12px;
    }
  }
`;

const TotalItem = styled.div<{ isBold?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${(props) => (props.isBold ? "600" : "400")};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`;

const ShopBtn = styled.button`
  color: white;
  border-radius: 4px;
  background: var(--success-color);
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  font-weight: 500;
`;
export function CartResume({ calculateTotal }: CartResumeProps) {



  const deliveryFee = calculateTotal > 90000 ? 0 : 4000;
  const cartTotalWithDelivery = formatPrice(
    calculateTotal + deliveryFee
  );

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
          <p>{cartTotalWithDelivery}</p>
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
