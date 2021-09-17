import styled from "styled-components";

export const LinkStyle = styled.a `
  text-decoration: underline ${({theme}) => theme.color.neutral100};
  cursor: pointer;
`
