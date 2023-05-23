import { styled } from "styled-components";
import { CartIcon } from "./cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";

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
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("@loja-condominio:shopping-cart");

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
