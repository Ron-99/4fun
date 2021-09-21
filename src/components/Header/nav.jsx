import {Menu, Navigation, Item, Logo, LogoWrapper, ButtonWrapper, TextWrapper, Icon, Logout} from "./style";
import caracolGif from '../../assets/imgs/caracol.gif';
import caracolPng from '../../assets/imgs/caracol.png';
import {useState} from "react";
import Button from "../Button";
import {useIsAuthQuery} from "../../services/Users/isAuthQuery";

import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Text from "../Text";
import {Profile} from "../Text/style";
import {useLogoutUser} from "../../services/Users/logoutMutation";
import { useHistory } from "react-router-dom"

function Nav({open}){
  const [animated, setAnimated] = useState(false);
  const {data, isLoading} = useIsAuthQuery();
  const LogoutMutation = useLogoutUser();
  const history = useHistory();

  const handleMouseOver = () => {
    setAnimated(true)
  }
  const handleMouseLeave = () => {
    setAnimated(false)
  }

  const handleLogout = async() => {
    await LogoutMutation.mutateAsync();
    history.go(0)
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

        {
          !isLoading &&
            !data ? (
              <>
                <Item open={open} to="/">Registrar-se</Item>
                <Item to='/signin'>
                  <Button size="sm" color="primary">Entrar</Button>
                </Item>
              </>
          ) :
            <Profile>
              <TextWrapper>
                <Text size='sm' bold={true}>{data?.firstName} {data?.lastName}</Text>
                {
                  data?.role === 'ADMIN' && <Text size='sm' italic={true}>{data?.role}</Text>
                }
              </TextWrapper>
              <Logout onClick={handleLogout}>
                <Icon icon={faSignOutAlt} size='2x'/>
              </Logout>

            </Profile>
        }

      </ButtonWrapper>
    </Menu>
  )
}

export default Nav
