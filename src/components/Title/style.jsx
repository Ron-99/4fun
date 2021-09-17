import styled, {css} from "styled-components";

const defaultStyle = css `
  text-transform: uppercase;
  font-weight: bold;
  color: ${({theme, color}) => color === 'primary' ? theme.color.neutral100 : theme.color.neutral800 };
  font-size: ${({theme}) => theme.fontSize.heading1};
  line-height: ${({theme}) => theme.lineHeight.heading1};
  margin-top: 0;
  margin-bottom: 9px;
  letter-spacing: 0.06em;
`

export const TitleH1 = styled.h1 `
  
  ${defaultStyle};
  
  @media only screen and (max-width: 991px) {
    font-size: 62px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 51px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 43px;
  }
`
export const TitleH2 = styled.h2`
  ${defaultStyle};
  font-size: ${({theme}) => theme.fontSize.heading2};
  line-height: ${({theme}) => theme.lineHeight.heading2};
  margin-bottom: 14px;
  letter-spacing: 0.05em;

  @media only screen and (max-width: 479px) {
    font-size: 46px;
  }
`

export const TitleH3 = styled(TitleH2).attrs({
  as: 'h3'
}) `
  font-size: ${({theme}) => theme.fontSize.heading3};
  line-height: ${({theme}) => theme.lineHeight.heading3};
  margin-bottom: 11px;
`

export const TitleH4 = styled(TitleH2).attrs({
  as: 'h4'
}) `
  font-size: ${({theme}) => theme.fontSize.heading4};
  line-height: ${({theme}) => theme.lineHeight.heading4};
  margin-bottom: 16px;
`

export const TitleH5 = styled(TitleH4).attrs({
  as: 'h5'
}) `
  font-size: ${({theme}) => theme.fontSize.heading5};
  line-height: ${({theme}) => theme.lineHeight.heading5};
`

export const TitleH6 = styled(TitleH2).attrs({
  as: 'h6'
}) `
  font-size: ${({theme}) => theme.fontSize.heading6};
  line-height: ${({theme}) => theme.lineHeight.heading6};
  margin-bottom: 10px;
`

