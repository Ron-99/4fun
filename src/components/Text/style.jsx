import styled from "styled-components";

function handleSize(size, theme){
  const {fontSize, lineHeight} = theme
  if(size === 'sm')
    return { fontSize: fontSize.paragraphS, lineHeight: lineHeight.paragraphS }

  if(size === 'md')
    return { fontSize: fontSize.paragraphM, lineHeight: lineHeight.paragraphM }

  if(size === 'lg')
    return { fontSize: fontSize.paragraphL, lineHeight: lineHeight.paragraphL }
}

export const TextStyle = styled.p `
  margin-bottom: 0;
  color: ${({theme, size, color}) => color === 'primary' ? theme.color.neutral100 : theme.color.neutral800 };
  font-size: ${({theme, size}) => handleSize(size, theme).fontSize};
  line-height: ${({theme, size}) => handleSize(size, theme).lineHeight};
  font-weight: ${({bold}) => bold ? '700' : '300'};
  font-style: ${({italic}) => italic ? 'italic' : 'normal'};

  @media screen and (max-width: 767px){
    font-size: 20px;
  }

  @media screen and (max-width: 479px){
    font-size: 18px;
  }
`

export const ProfileImg = styled.div `
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({theme}) => theme.color.neutral600};
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Profile = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownContent = styled.div `
  display: none;
  position: absolute;
  background-color: ${({theme}) => theme.color.neutral600};
  border-radius: 5px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
`

export const Dropdown = styled.div `
  display: inline-block;
  cursor: pointer;
  
  :hover{
    ${DropdownContent} {
      display: block;
    }
  }
`
