'use client'
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"
import { useRouter } from "next/navigation"
const sairaStencil = Saira_Stencil_One({ 
  weight: '400',
  subsets: ['latin']
 })
interface HeaderProps {

}
const TagHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    justify-content: space-between;
  }
  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 1.25rem 10rem;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 1.5rem
  }
  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 2.5rem;
  }
`;

export function Header(props: HeaderProps) {
  const {setSearch, search} = useFilter()
  return(
    <TagHeader>
      <Logo className={sairaStencil.className} href="/" >Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon 
        value={search}
        handleChange={setSearch}
        placeholder="Procurando por algo específico?"/>
          <CartControl/>
      </div>
    </TagHeader>
  )
}