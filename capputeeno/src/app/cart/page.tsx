"use client";

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
      margin-left: 4px;
    }
  }
`;

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

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

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "@capputeeno: cart-items",
    []
  );

  const calculateTotal = (value: ProductInCart[]): number => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = formatPrice(calculateTotal(value));

  const deliveryFee = calculateTotal(value) > 90000 ? 0 : 4000;
  const cartTotalWithDelivery = formatPrice(
    calculateTotal(value) + deliveryFee
  );

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total ({value.length}) produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <div>
            <h3>Resumo do Pedido</h3>
            <TotalItem>
              <p>Subtotal de produtos</p>
              <p>{cartTotal}</p>
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
      </Container>
    </DefaultPageLayout>
  );
}
