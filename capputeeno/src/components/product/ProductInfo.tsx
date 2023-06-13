/* eslint-disable @next/next/no-img-element */
import { Product } from "@/@types/product";
import { styled } from "styled-components";
import { useCart } from "@/hooks";
import { formatPrice } from "@/utils/formatPrice";
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon";

const Container = styled.div`
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

export function ProductInfo(props: Product) {
  const { handleAddToCart} = useCart()
  return (
    <section>
      <img src={props.image_url} alt="" />
      <div>
        <Container>
          <span>{props.category}</span>
          <h2>{props.name}</h2>
          <span> {formatPrice(props.price_in_cents ?? 0)}</span>
          <p>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>
          <div>
            <h3>Descrição</h3>
            <p>{props.description}</p>
          </div>
        </Container>
        <button onClick={() => handleAddToCart(props)}>
          <ShoppingBagIcon />
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}
