import styled, { css } from "styled-components";
import { lightGreen, white } from "../Common/styles/settings";
import { rem, media } from "../Common/styles/tools";

export const Wrapper = styled.div`
  cursor: pointer;
  position: fixed;
  opacity: 0;
  top: -${rem(50)};
  z-index: 1;
  width: 100%;
  min-height: ${rem(34)};
  background-color: ${lightGreen};
  box-shadow: 0 ${rem(4)} ${rem(22)} 0 rgba(28, 205, 163, 0.3);
  transition: 0.4s ease-in-out;

  ${media.md(css`
    min-height: ${rem(40)};
  `)};

  :hover {
    opacity: 0.8;
  }

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      top: 0;
    `};

  ${({ opened }) =>
    !opened &&
    css`
      opacity: 0;
      top: -${rem(50)};
    `};
`;

export const Text = styled.p`
  font-size: ${rem(14)};
  font-family: "Lato";
  letter-spacing: ${rem(0.1)};
  text-align: center;
  padding: ${rem(10)} 0 ${rem(5)};
  color: ${white};
  width: 90%;
  margin: 0 auto;

  ${media.md(css`
    font-size: ${rem(15)};
    padding-top: ${rem(12)};
  `)};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${rem(10)};
  right: ${rem(10)};

  ${media.md(css`
    top: ${rem(12)};
  `)};
`;
