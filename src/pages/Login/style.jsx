import styled from "styled-components";
import {Form} from "@unform/web";
import {Container} from "../../styles/global";

export const LoginPage = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  
`;

export const LoginFormStyle = styled(Form) `
    background-color: ${({theme}) => theme.color.neutral800 };
    padding: 70px 64px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({theme}) => theme.color.neutral600 };
    width: 100%;
    max-width: 600px;

    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 34px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  
  h2{
    text-align: center;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
`
