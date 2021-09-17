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
