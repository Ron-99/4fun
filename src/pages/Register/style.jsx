import styled from "styled-components";
import {Container} from "../../styles/global";

export const BannerWrapper = styled(Container) `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  width: 100%; 
  background-image: url("https://i.imgur.com/Dbe57TQ.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  p{
    text-align: center;
  }
`

export const RegisterPage = styled.div`
  max-width: 955px;
  padding-right: 24px;
  padding-left: 24px;
  margin: -100px auto 100px;
`;
