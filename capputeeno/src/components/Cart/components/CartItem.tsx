/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { styled } from "styled-components";
import { DeleteIcon } from "@/components/Icons";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDelete(id: string): void;
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 13.125rem;

  border-radius: 0.5rem;
  background-color: white;

  position: relative;

  button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;

    border: none;
    background: transparent;
    cursor: pointer;
  }

  img {
    max-height: 100%;
    width: 16rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 1.5rem;
    line-height: 150%;
    color: var(--text-dark-2);

    h4 {
      font-weight: 300;
      font-size: 1.25rem;
    }

    p {
      font-weight: 400;
      font-size: 0.75rem;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 600;
        font-size: 1rem;
        color: var(--shapes-dark);
      }
    }
  }
`;

const SelectQuantity = styled.select`
  padding: 0.5rem 0.625rem;
  border: 0.0938rem solid var(--border-color);
  border-radius: 0.5rem;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 1rem;
`;

export function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete,
}: CartItemProps) {
  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <img src={product.image_url} alt="" />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity
            value={product.quantity}
            onChange={({ target }) =>
              handleUpdateQuantity(product.id, Number(target.value))
            }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  );
}
