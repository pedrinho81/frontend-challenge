import styled from "styled-components";
import { ArrowBackIcon } from "@/components/Icons";
import { useRouter } from "next/navigation";

interface BackBtnProps {
  navigate: string;
}

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 150%;
  color: var(--secondary-text);
`;
export function BackBtn({ navigate }: BackBtnProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <BackButton onClick={handleNavigate}>
      <ArrowBackIcon />
      Voltar
    </BackButton>
  );
}
