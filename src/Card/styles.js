import styled, { css } from "styled-components";
import { white, blue, white40 } from "../Common/styles/settings";
import { rem, media } from "../Common/styles/tools/index";

export const Title = styled.h1`
  color: ${blue};
  font-family: "Lato";
  font-size: ${rem(11)};
  font-weight: bold;
  line-height: 1.45;
  text-transform: uppercase;

  ${({ titleColor }) =>
    titleColor &&
    css`
      color: ${titleColor};
    `};
`;

export const IconContainer = styled.span`
  align-items: center;
  background: ${white40};
  border-radius: ${rem(4)};
  color: ${blue};
  display: inline-flex;
  height: ${rem(24)};
  justify-content: center;
  margin-right: ${rem(9)};
  width: ${rem(24)};

  ${({ iconContainerBg }) =>
    iconContainerBg &&
    css`
      background: rgba(${iconContainerBg}, 0.2);
    `};

  ${media.md(css`
    height: ${rem(28)};
    width: ${rem(28)};
    margin-right: ${rem(13)};
  `)};
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Section = styled.section`
  background-color: ${white};
  border-radius: ${rem(2)};
  padding: ${rem(12)};
  box-shadow: 0 ${rem(1)} ${rem(12)} ${rem(6)} rgba(211, 225, 232, 0.13);

  ${media.md(css`
    padding: ${rem(20)};
  `)};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      ${Header} {
        margin-bottom: ${rem(20)};

        ${media.md(css`
          margin-bottom: ${rem(14)};
        `)};

        ${media.lg(css`
          margin-bottom: ${rem(10)};
        `)};
      }
    `};
`;
