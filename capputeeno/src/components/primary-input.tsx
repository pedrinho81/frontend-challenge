import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";
import { useFilter } from "@/hooks/useFilter";

export const PrimaryInput = styled.input`
  width: 100%;
  background-color: var(--bg-secondary);
  border: none;
  border-radius: 0.5rem;
  padding: 0.625rem 1rem;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--text-dark);
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 15.625rem;
  svg {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 22rem;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
        role="textbox"
      />
      <SearchIcon />
    </InputContainer>
  );
}
