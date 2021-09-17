import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SubscriptionStyle = styled.section `
  width: 100%;
  margin-top: 15vh;
  height: 85vh;
  display: flex;
  align-items:  center;
  flex-direction: column;
  
  h2, p{
    text-align: center;
  }
`

export const TitleWrapper = styled.div `
  max-width: 700px;
`
export const ButtonWrapper = styled.div `
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px 0 0 0;
  
  p{
    background: ${({theme}) => theme.color.primary };
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  p:nth-child(1){
    border-bottom-left-radius: 15px;
  }
  
  p:nth-child(2){
    border-bottom-right-radius: 15px;
  }
`
export const Icon = styled(FontAwesomeIcon) `
  margin: 10px 20px;
  cursor: pointer;
  color: ${({theme}) => theme.color.neutral100};
  font-size: 25px;
`

export const CardsWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  align-items: center;
`
