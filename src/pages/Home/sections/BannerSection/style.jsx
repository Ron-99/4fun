import styled from "styled-components";
import {hexToRgba} from "../../../../utils";

export const BannerSectionStyle = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15vh;
  height: 85vh;
  width: 100%;

  @media (max-width: 1100px) {
    margin-top: 5vh;
    height: 95vh;
  }
`

export const IntroductionWrapper = styled.div `
  max-width: 1000px;
  margin-top: 15vh;

  @media only screen and (max-width: 991px){
    max-width: 1200px;
    margin: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
`

export const ButtonsWrapper = styled.div `
  display: flex;
  margin-top: 20px;
  
  button{
    margin-right: 25px;
  }

  @media only screen and (max-width: 479px) {
    flex-direction: column;
    width: 100%;
    button{
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
`

export const Follow = styled.div `
  border-top: 2px solid ${({theme}) => hexToRgba(theme.color.neutral100, 0.3)};
  width: 100%;
  padding: 10px;
  
  h4{
    margin: 10px;
  }

  @media (min-width: 1100px) {
    display: flex;
    
    
    h4{
      width: 40%;
    }
  }
`

export const SocialsMedia = styled.div `
  display: flex;
  flex-wrap: wrap;
  
  @media (min-width: 1100px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
`

export const Social = styled.img `
  margin: 10px 30px;
  width: 120px;
  @media (min-width: 1100px) {
    width: 170px;
  }
`

export const Link = styled.a `

`
