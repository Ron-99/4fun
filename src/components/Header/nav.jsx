import {Menu, Navigation, Item, Logo, LogoWrapper, ButtonWrapper} from "./style";
import caracolGif from '../../assets/imgs/caracol.gif';
import caracolPng from '../../assets/imgs/caracol.png';
import {useState} from "react";
import Button from "../Button";


function Nav({open}){
  const [animated, setAnimated] = useState(false);

  const handleMouseOver = () => {
    setAnimated(true)
  }
  const handleMouseLeave = () => {
    setAnimated(false)
  }

  return(
    <Menu open={open}>
      <LogoWrapper>
        <Item to="/">
          <Logo src={animated ? caracolGif : caracolPng} alt="logo" title="logo" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
        </Item>

      </LogoWrapper>
      <Navigation>
          <Item open={open} to="/">Inicio</Item>
          <Item open={open} to="/">Corridas</Item>
          <Item  open={open} to="/">Classificação</Item>
          <Item  open={open} to="/">Construtores</Item>
      </Navigation>

      <ButtonWrapper>
        <Item open={open} to="/">Registrar-se</Item>
        <Button size="sm" color="primary">Entrar</Button>
      </ButtonWrapper>
    </Menu>
  )
}

export default Nav
