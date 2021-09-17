import styled from "styled-components";
import { Container } from "../../styles/global";

export const HomePageWrapper = styled(Container) `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
  width: 100%; 
  background-image: url("https://i.imgur.com/VBHurDq.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ContentStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15vh;
  height: 85vh;
  width: 100%;
  button{
    margin: 20px;
  }
`
