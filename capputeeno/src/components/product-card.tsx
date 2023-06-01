/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { formatPrice } from "@/utils/formatPrice";
import { useRouter } from "next/navigation";
import { Divider } from "./divider";
interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
}
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0px 0px 0.25rem 0.25rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  width: 16rem;
  height: 23.625rem;
  img {
    width: 16rem;
    height: 18.75rem;
    border-radius: 0.25rem 0.25rem 0px 0px;
  }
  h3 {
    font-weight: 300;
    font-size: 1rem;
    line-height: 150%;
    color: var(--text-dark-2);
  }
  p {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--shapes-dark);
  }
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem 0;
    width: 14.25rem;
  }
`;
export function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const handleNavigate = (id: string) => router.push(`/product/?id=${id}`);
  const price = formatPrice(props.price);
  return (
    <Card onClick={() => handleNavigate(props.id)}>
      <img src={props.image} alt="" />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{price}</p>
      </div>
    </Card>
  );
}
