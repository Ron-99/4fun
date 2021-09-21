import styled from "styled-components";
import { hexToRgba } from "../../utils";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeaderWrapper = styled.header `
  width: 100%;
  height: 15vh;
  position: fixed;
  z-index: 1;
  transition: 0.5s;
  background: ${({top, theme}) => top ? 'transparent' : theme.color.neutral800};

  @media (max-width: 1100px) {
    height: 10vh;
  }
`
export const BurgerStyle = styled.div `
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  
  :hover{
    div{
        background-color: ${({ theme }) =>  theme.color.primary};
    }
  }

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) =>  theme.color.neutral100};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
export const Menu = styled.div`
  list-style: none;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  margin: 0;
  @media (max-width: 1100px) {
    flex-flow: column nowrap;
    background-color: ${({theme}) => hexToRgba(theme.color.secondary, 0.95)};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 2;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const Item = styled(NavLink)`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    padding: 16px;
    height: 15vh;
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.color.neutral100};
    text-transform: uppercase;
    :hover{
      color: ${({theme}) => theme.color.primary} ;
    }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  @media (max-width: 1100px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
    align-items: center;
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
    height: 50vh;
    flex-direction: column;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1100px) {
    width: 100%;
    height: 40vh;
    flex-direction: row;
  }
`

export const Logo = styled.img`
  max-width: 215px;
  cursor: pointer;
  @media (max-width: 1100px) {
    max-width: 300px;
  }
`

export const ButtonWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 1100px) {
    width: 100%;
    height: 40vh;
    flex-direction: row;
  }
`

export const TextWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Icon = styled(FontAwesomeIcon) `
  color: ${({theme}) => theme.color.neutral100};
  margin: 0 10px;
`

export const Logout = styled.a `
  cursor: pointer;
  
`
