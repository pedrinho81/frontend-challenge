"use client";

import { BackBtn } from "@/components/BackButton";
import { CartItem } from "@/components/cart/CartItem";
import { CartResume } from "@/components/cart/CartResume";
import { DefaultPageLayout } from "@/app/layout.styles";
import { formatPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";
import { useCart } from "@/hooks";

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
  const { handleUpdateQuantity, cartItems, calculateTotal, handleDeleteItem } =
    useCart();

  const cartTotal = formatPrice(calculateTotal(cartItems));

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
