import { styled } from "styled-components";
import { CartIcon } from "@/components/icons/cart-icon";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

const CartCount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 0 5px;
  background-color: var(--delete-color);
  color: #fff;
  margin-left: -10px;
  font-weight: bold;
  font-size: 10px;
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export function CartControl() {
  const { cartItems  } = useContext(CartContext)

  const router = useRouter()
  const handleNavigate = () => router.push('/cart')
  return (
    <Container onClick={handleNavigate}>
      <CartIcon />
      {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
    </Container>
  );
}
