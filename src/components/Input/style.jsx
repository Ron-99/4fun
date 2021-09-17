import styled, {css} from "styled-components";
import InputMask from 'react-input-mask'

const style = css`
    width: 100%;
    height: 76px;
    margin-bottom: 0;
    padding-right: 25px;
    padding-left: 25px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({error, theme}) => error ? theme.color.error : theme.color.neutral600};
    background-color: hsla(0, 0%, 100%, 0.03);
    transition: 300ms;
    color: ${({theme}) => theme.color.neutral100};
    font-size: 16px;
    line-height: 1.125em;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    
    :hover, :focus{
        border-color: ${({error, theme}) => error ? theme.color.error : theme.color.neutral200};
    }
`

export const InputStyle = styled.div `
    display: flex;
    flex-direction: column;
`

export const LabelStyle = styled.label `
    color: ${({theme}) => theme.color.neutral100};
    text-transform: uppercase;
    font-family: 'Chakra Petch', sans-serif;
    font-size: 16px;
    line-height: 1.125em;
    font-weight: 700;   
    letter-spacing: 0.05em;
    margin-bottom: 16px;
`

export const FieldStyle = styled.input `
    ${style}
`

export const ErrorMessage = styled.span `
    color: ${({theme}) => theme.color.error};
    padding: 10px 0;
    text-transform: uppercase;
`

export const FieldMaskStyle = styled(InputMask) `
    ${style}
`
