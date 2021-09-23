import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { hexToRgba } from "../../../../utils";
import { Icon } from "../../sections/SubscriptionSection/style";

export const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 350px;
  perspective: 1000px;
  border-radius: 15px;
  box-shadow: 0 8px 16px 0
    ${({ theme }) => hexToRgba(theme.color.neutral800, 0.8)};
  margin: 10px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  transform: ${({ flipper }) =>
    flipper ? "rotateY(-180deg)" : "rotateY(0deg)"};
`;

const FlipCardFrontAndBack = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  ${({isSub}) => !isSub && 'cursor: pointer;'}
  display: flex;
  flex-direction: column;
`;

export const FlipCardFront = styled.div`
  ${FlipCardFrontAndBack};
  background-color: ${({ theme }) => theme.color.neutral100};
  justify-content: flex-start;
  align-items: center;
`;

export const FlipCardBack = styled.div`
  ${FlipCardFrontAndBack};
  background-color: ${({ theme }) => theme.color.primary};
  transform: rotateY(180deg);
  align-items: flex-start;
`;
export const FlipCardDetails = styled.div`
  margin-top: 30px;

  ${Icon} {
    font-size: 25px;
  }
`;

export const FlipCardInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ConfirrmIcon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.color.primary};
  margin-top: 15px;
`;
