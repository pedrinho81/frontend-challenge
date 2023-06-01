"use client";

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { CartResume } from "@/components/cart/cart-resume";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { CartContext } from "@/contexts/cart-context";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { useContext } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 1.5rem;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
      margin-left: 0.25rem;
    }
  }
`;

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export default function CartPage() {
  const { cartItems, updateLocalStorage } = useContext(CartContext);

  const calculateTotal = (cartItems: ProductInCart[]): number => {
    return cartItems.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };
  const cartTotal = formatPrice(calculateTotal(cartItems));

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = cartItems.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = cartItems.filter((item) => {
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
            Total ({cartItems.length}) produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {cartItems.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResume calculateTotal={calculateTotal(cartItems)} />
      </Container>
    </DefaultPageLayout>
  );
}
