import styled from "styled-components";
import Countdown from "react-countdown";

export const Style = styled(Countdown)`
  color: ${({theme}) => theme.color.neutral800};
  font-size: 16px;
`
export const CountdownText = styled.span`
  color: ${({theme}) => theme.color.neutral800};
  font-size: 16px;  
`
