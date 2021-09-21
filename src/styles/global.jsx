import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
        text-decoration: none;
        box-sizing: border-box;
        outline: none;
    }
    body{
        background:${({ theme }) => theme.color.neutral800};
        font-family: 'Chakra Petch', monospace;
        font-weight: 300;
        padding: 0 !important;
        letter-spacing: 0.1em;
    }
`
export const Container = styled.div `
  padding: 0 100px;

  @media screen and (max-width: 767px){
    padding: 0 25px;
  }

  @media only screen and (max-width: 479px) {
    padding: 0 10px;
  }
`

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
