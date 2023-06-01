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
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  width: 256px;
  height: 378px;
  img {
    width: 256px;
    height: 300px;
    border-radius: 4px 4px 0px 0px;
  }
  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }
  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--shapes-dark);
  }
  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;
    width: 228px
  }
`;
export function ProductCard(props: ProductCardProps) {
  const router = useRouter();
  const handleNavigate = (id: string) => router.push(`/product/?id=${id}`);
  const price = formatPrice(props.price);
  return (
    <Card onClick={ () => handleNavigate(props.id)}>
      <img src={props.image} alt="" />
      <div>
        <h3>{props.title}</h3>
        <Divider/>
        <p>{price}</p>
      </div>
    </Card>
  );
}
