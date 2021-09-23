import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ModalBackground = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.5);
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    
` 

export const ModalWrapper = styled.div `
    width: 500px;
    height: 400px;
    background: ${({theme}) => theme.color.neutral700};
    position: fixed;
    z-index: 2;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 768px){
        width: 430px;
    }

    @media screen and (max-width: 479px){
        width: 300px;
    }
`


export const ModalHeader = styled.div `
    display: flex;
    width: 100%;
    justify-content: flex-end;
    
`

export const Close = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.color.neutral100};
    margin: 10px 15px;
    cursor: pointer;
`

export const ModalBody = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px;
    text-align: center;
    flex-direction: column;

    @media screen and (max-width: 479px){
        padding: 5px;
    }
`

export const ModalFooter = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 30px 15px;

    button:nth-child(1){
        width: 25%;

        @media screen and (max-width: 479px){
            width: 40%;
        }
    }
`