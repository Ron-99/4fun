import styled from "styled-components";

function handleSize (size, color) {
  // eslint-disable-next-line default-case
  switch (size){
    case 'sm':
      if(color === 'primary')
        return '20px 28px';
      else
        return '14px 32px'
    case 'md':
      if(color === 'primary')
        return '28px 40px'
      else
        return '26px 38px'
    case 'lg':
        return '28px 68px'
  }
}

export const ButtonStyle = styled.button `
  padding: ${({size, color}) => handleSize(size, color)};
  font-size: 16px;
  line-height: 1.125em;
  letter-spacing: 0.06em;
  background: ${({color, theme}) => color === 'primary' ? theme.color.primary : 'transparent'};
  color: ${({theme}) => theme.color.neutral100};
  transition: 150ms;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  transform-style: preserve-3d;
  cursor: pointer;
  text-decoration: none;
  border: ${({color, theme}) => color === 'primary' ? 0 : `2px solid ${theme.color.neutral100}`};
  font-family: 'Chakra Petch', monospace;
  
  :hover{
    box-shadow: 0 4px 18px 0 rgb(223 0 0 / 60%);
    transform: scale3d(1.06, 1.06, 1.01);
    background: ${({theme}) => theme.color.primary};
    border: 0;
  }
`
