import styled from "styled-components";
import { Form } from '@unform/web'

export const RegisterFormStyle = styled(Form) `
    background-color: ${({theme}) => theme.color.neutral800 };
    padding: 81px 64px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({theme}) => theme.color.neutral600 };

    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 34px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

  @media only screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
`

export const RegisterButton = styled.div `
    
`
