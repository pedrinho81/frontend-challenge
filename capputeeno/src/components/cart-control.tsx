import { styled } from "styled-components";
import { CartIcon } from "@/components/icons/cart-icon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

const CartCount = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  padding: 0 0.3125rem;
  background-color: var(--delete-color);
  color: #fff;
  margin-left: -0.625rem;
  font-weight: bold;
  font-size: 0.625rem;
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export function CartControl() {
  const { cartItems } = useContext(CartContext);

  const router = useRouter();
  const handleNavigate = () => router.push("/cart");
  return (
    <Container onClick={handleNavigate}>
      <CartIcon />
      {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
    </Container>
  );
}
