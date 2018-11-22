import React from "react";
import styled from "styled-components";
import { rem } from "../Common/styles/tools";
import { isMsBrowser } from "../Common/utils/getNavigator";

export const ImgLogo = styled.img`
  width: ${rem(222)};
  height: ${rem(36)};
`;

function BrandLogoIcon() {
  if (isMsBrowser()) {
    const ieBankLogo = require("../../assets/imgs/logo-bocombbm.png");
    return <ImgLogo src={ieBankLogo} alt="BOCOM Logo" />;
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 226 35"
        width="226"
        height="35"
      >
        <g>
          <path
            fill="#B10F1F"
            d="M209.7,34.3h3.3L212.9,24l3.1,10.3h3.1l3.2-10.3l0,10.3h3.3V20.9h-5.1l-2.8,8.9l-2.7-8.9h-5.3V34.3z M197.2,34.3h5.8c2.5,0,5.4-0.7,5.4-3.9c0-1.6-1-2.6-2.8-3c1.5-0.5,2.4-1.5,2.4-3.2c0-2.3-1.9-3.4-4.5-3.4h-6.4V34.3z M200.9,28.6 h1.1c1.3,0,2.7,0.1,2.7,1.6c0,1.4-1.4,1.6-2.8,1.6h-1.1V28.6z M200.9,23.4h1.1c1.2,0,2.4,0.1,2.4,1.3c0,1.1-1.3,1.4-2.5,1.4h-1 V23.4z M197.2,19.6h5.8c2.5,0,5.4-0.7,5.4-3.9c0-1.6-1-2.6-2.8-3c1.5-0.5,2.4-1.5,2.4-3.2c0-2.3-1.9-3.4-4.5-3.4h-6.4V19.6z M200.9,14h1.1c1.3,0,2.7,0.1,2.7,1.6c0,1.4-1.4,1.6-2.8,1.6h-1.1V14z M200.9,8.8h1.1c1.2,0,2.4,0.1,2.4,1.3c0,1.1-1.3,1.4-2.5,1.4 h-1V8.8z"
          />
          <path
            fill="#003B78"
            d="M21.5,7.4c-2.1,0-4.1,0.6-5.7,1.7l-5.6,3.6V0.1L0.3,8.5v15.8c0,4.7,3.1,8.7,7.3,10.1l1.9,0.6 C5.6,33,2.9,29.1,2.9,24.6c0-6.4,5.4-11.6,12-11.6c6.2,0,11.3,4.5,11.9,10.4l-6.8,0c-0.6-2.3-2.7-4-5.1-4c-2.9,0-5.3,2.4-5.3,5.3 c0,2.9,2.4,5.3,5.3,5.3c2.7,0,4.9-2,5.3-4.6l6.8,0c-0.2,2.3-1,4.5-2.4,6.3c0,0,4.2-4.9,5.6-7.1c1.3-2,2-4.1,2-6.4 C32.1,12.1,27.3,7.4,21.5,7.4"
          />
          <path
            fill="#003B78"
            d="M73.1,23c-6.2-1.2-10.8-4.5-10.9-4.5c0-0.1-0.6-0.3-0.5-0.6c0.2-1,1.7-3.1,1.8-3.3c0.1-0.3,0-0.8-0.3-0.9 C61,13.1,61,13.1,61,13.1c-0.6,0-0.7,0.3-0.7,0.3l0,1.6c-0.4,1.4-0.7,1.3-0.7,1.3s-1.8-1.4-2-1.5c-0.1-0.1-1.5-0.2-1.5-0.2 s0.1-0.2,0.3-0.4c2.1-1.8,2.6-3.4,2.6-3.4c0-0.1,0-1,0-1l-0.7-0.9l1.9-0.5c0,0,1.1-0.3,1.3-0.1c0.4,0.4,0.5,2.3,0.5,2.3 c0.6,1.4,2.7,1.9,2.8,1.9c0.1,0,3.6,1,3.6,1c0.9-0.7,0.7-1.6,0.7-1.6c0.2-0.5-1.7-1.3-2.4-1.5c-2.6-0.6-3-1.1-3.8-1.6 c-0.7-0.5-0.2-1.1-0.2-1.1s1.4-0.4,1.8-0.5C65.1,7.2,68.2,7,68.2,7c0.9,0.1,0.9-0.3,0.9-0.3l-0.3-2.1c0.1-0.3-0.1-0.8-0.4-0.7 c-3.8,1.1-6.3,1.3-6.3,1.3c-0.3,0-0.4-1.7-0.2-2.4c0.1-0.9-0.7-1.5-1.2-1.5c-0.5,0-1.4-0.6-1.4-0.6c-2.2,2.9,0.7,3.6,0.9,3.7 c0.8,0.3,0.6,0.4,0.9,0.7c0.3,0.4-0.6,0.7-1.1,0.8c-5.1,1.4-6.9,1.4-7.5,1.4c-1.1-0.1-0.8,1-0.8,1s0.4,0.5,0.6,1 c0.4,0.9,2.3,0.2,2.7,0.1c2.1-0.6,2.1-0.4,2.1-0.4c0.4,0.4-0.3,1.5-0.3,1.5c-1.4,1.8-3.3,2.9-3.7,3.1c-0.4,0.2-0.5,0-0.5,0 c-0.2,0.5,0.4,1.3,0.6,1.3c0.2,0,2,0,2,0l0.2-0.1c0.2,0,0.1,0.3,0.1,0.3c0.1,1.3,0.9,1.6,1.4,1.8c1.5,0.4,1.9,1.1,1.9,1.1 c-3.4,4.6-9.5,4.1-9.5,4.1c0.2,0.2,0.7,0.5,1.7,0.7c3.4,0.7,6.5-1.1,6.8-1.3c0.2-0.2,2.1-1.6,2.4-1.9c0.4-0.5,0.7-0.2,0.7-0.2 s3,2.5,3.9,3.3c5.2,4.4,8.5,0.4,8.5,0.4L73.1,23z"
          />
          <path
            fill="#003B78"
            d="M91.1,7.8c0.6-1-0.3-2.1-0.8-2.5c-1.9-1.2-2.1-1.8-2.1-1.8c-1.1,0.5-1.1,1.7-0.8,2.4 C88.3,8.4,90.9,8.2,91.1,7.8"
          />
          <path
            fill="#003B78"
            d="M102.7,21.7c0,0-0.2-0.2-0.1-0.5c0.1-0.3,0.3-1.2,0.3-1.3c0,0-0.4-5.2-0.1-7.7c0.2-1,0.3-2.7,0.5-2.9 c0,0-0.3-0.9-2.6-0.8c-0.8,0-1.7,0.7-2.3,0.3c-0.4-0.3-0.3-0.5,0-0.8c0.3-0.3,3.4-3.6,4.1-3.8c0,0,0.7-1-0.9-1.9 c-0.9-0.5-1.2-0.9-2.4-0.1c-0.7,0.5-2.7,2.2-4,2.5c-0.7,0.1-0.8-0.5-0.8-0.5L94.1,4c0,0-1.2,1.1-1,2.5c0.1,0.8,2.1,0.1,2.6-0.4 c0.4-0.3,3-1.9,2.5-0.5l-1.6,1.8l-1.3,0.3c0,0-0.7,0.3-0.1,0.9c0,0,1,0.7,0.9,0.9c0,0-0.2,0.4-1.5,1c-0.3,0.1-0.6,0.4-0.7,0.5 c0,0,0,0,0,0l-1-0.6l-0.8,0c0,0,0.3,1.8,0.2,2.1c0,0.2-0.1,7.2,0.4,8.3l-2.6-0.2c0,0-3.8-4-1-9.5c0.4-0.7,0.8-1.5-0.5-2.1 c-0.6-0.3-1.9-0.4-2.1-0.7c0,0-0.9-0.3-0.8,0.8l0.6,1.3c0,0-0.1,0.8-0.5,2.6c-0.1,0.4-0.5,2.8,1.6,6.1c0,0,0.4,0.6,0.3,0.9 c-0.1,0.2-0.2,0.1-0.2,0.1l-2.7-0.3c0,0-0.6-0.2-0.7,0.5c-0.1,0.4-0.6,2,0.3,2.1c0,0,5-1.1,12.5,0.9c1.3,0.3,3.3,0.7,7.1,0.6 c0,0,4.9-0.7,4.9-3.6C109.1,20.7,108.1,19.9,102.7,21.7 M96.2,16.5c0,0-1.5,0.2-1.6,0.2c0,0,0-1.5,0-1.7c0,0,0.5,0.2,0.8,0.3 c0.3,0,0.6,0.1,1.1,0c0,0,0.2,0,0.2,0.5C96.6,16.5,96.6,16.5,96.2,16.5 M94.2,13.7c0,0-0.5-1.3-0.1-1.5c0,0,0.6,0.1,2.2-0.4 c0,0,0.2,0.5,0.2,1.1c0,0.3-0.2,0.2-0.2,0.2s-1.2,0.4-1.5,0.7C94.5,14,94.3,14.3,94.2,13.7 M96.6,21.6c-1.7-0.1-2.2-0.4-2.2-0.4 c0-0.1,0.2-2.7,0.2-2.7c2.1-0.1,2.1,0.1,2.1,0.1C96.8,20.1,96.6,21.6,96.6,21.6 M101.2,11.3c0,0.2-0.1,7.7-0.1,7.7 c-0.1,0.2-1.6,0.3-1.6,0.3c-0.1,0.6,1.6,2.6,1.6,2.6s0,0.1-0.6,0.2c-2.6,0.1-3.1-0.3-3.1-0.3c0.2,0,1-1,1-1v-2.4 c1.4-0.5,1.8-1.2,1.8-1.2c0.2-1.3-0.2-1.4-0.2-1.4L98.9,16c-0.5,0-0.4-0.3-0.4-0.3l0-1c0-0.1,1.9-1,1.9-1s0.2-0.5,0.1-1.3 c-0.1-0.7-2-0.1-2-0.1l-0.1-1.3c0,0,0.9-0.1,1.2-0.3c0.3-0.2,1.4-0.3,1.4-0.3C101.3,10.7,101.3,11.1,101.2,11.3"
          />
          <path
            fill="#003B78"
            d="M159,8c2-0.1,3-1.1,3-1.1s0.6-0.5,1.2-1.2c0.7-0.8,1.6-1.7,1.6-1.7l0.6-0.3V3.5c-0.9-1-2.5-1.4-2.5-1.4 c0-0.1-0.3,0.1-0.3,0.1c-0.5,1-2,2.5-2.4,2.8c-1.5,1.3-2,2.6-2,2.6S158.4,8,159,8"
          />
          <path
            fill="#003B78"
            d="M165.5,8.6c0.2-0.4,0-0.6,0-0.6c-1.7-0.7-3-0.7-3-0.7l-0.6,0.2c-4.3,6.4-9,8.4-9,8.4c-0.2,0.2,0.3,1.4,0.3,1.4 s0.3,0.1,0.7,0.2c1.6,0.1,5-2.6,5-2.6c0.5,0,0.7,0.7,0.7,0.7c-0.1,0.2-0.2,5.8-0.2,6.2c0,1.3,0.5,2.2,1,2.2c0.5,0,1.4-0.8,1.4-0.8 l-0.1-4.5c-0.1-0.3-0.6-5.2-0.6-5.2C164.4,10.5,165.3,8.9,165.5,8.6"
          />
          <path
            fill="#003B78"
            d="M166.5,5.7c0.5,1.4,1.1,2.1,1.1,2.1c2.9,1.3,6.7-1.3,6.8-1.5c0.2-0.2,0.3-1,0.3-1c-0.1-0.2-1-0.9-1-0.9 l-0.5-0.1c-3.2,0.5-6.9,0.4-6.9,0.4l-0.1,0.6C166.3,5.3,166.3,5.3,166.5,5.7"
          />
          <path
            fill="#003B78"
            d="M177.1,8.3c0,0-5,1.1-6.3,1.2c-0.7,0-5,0.5-5,0.5s-1.8,0.2-1.9,1.9c0,0.4,0,1.5,0.1,1.7c0,0,1.6-0.5,3.7-0.9 c0.7-0.2,1.7-0.2,1.9-0.2c0,0,0.3,7.9,0.2,8.2c0,0,0.1,1.2-1.2,0.7c0,0-1.4-0.9-2.7-0.8c0,0-0.1,0.2,0.2,0.5c0.3,0.3,2.2,1.9,3.1,3 c0.3,0.4,3.5,1.6,3.7-1.9c0-0.6-0.7-6.7-0.7-7.1c-0.1-0.4-0.2-2.8,0-2.9c0,0,5.2-0.7,6.2-1.9C178.8,10,178.4,8.9,177.1,8.3"
          />
          <path
            fill="#003B78"
            d="M130.6,19c0,0-2.5,0.4-2.5,0.3c0-0.1,0.3-0.4,0.7-0.7c1.1-0.8,1.5-1.4,1.5-1.4c0.7-1.5-0.1-1.4-0.1-1.4 c-0.7-0.2-1.2,0.4-1.3,0.6c-1.2,1.7-1.2,1.5-1.2,1.5c-0.2-1-0.1-3-0.1-3l1.8-1c0.5-0.2,0.6-1.3,0.3-1.5c-0.3-0.2-2,0-2,0 s-0.2,0.1-0.3,0c-0.1-0.1,0-0.8,0-0.8l1.5-0.7c0.4-0.3,0.3-1.2,0.3-1.2c-0.3-0.4-1.1-0.5-1.1-0.5l-2.2,0c0,0-0.6,0.2-0.5-0.2 C125.5,8.4,127,7,127,7c0.8,0,1.9,0.8,2.1,1c0.8,0.8,1.7,1.3,1.7,1.3c0.1-3.8-1.6-4.4-1.9-4.6c-0.3-0.2-0.3-0.5-0.3-0.5 c0.9-0.6,0.9-0.8,0.9-0.8c-1-2.5-2.7-1.9-2.7-1.9c0,0.1-1,2.1-1.4,2.8c-2.7,4.9-7.2,8.5-7.4,8.6c-0.2,0.2-1.7,0.9-1.7,0.9 c0.8,2,2.7,1.6,3.1,1.6c1.2-0.3,4.2-4.1,4.2-4.1c0.1,0.2,0.6,0.2,0.8,0.3c0.8,0.2,1.5,0.2,1.5,0.2l0.1,1.1l-1.8,0.5 c0,0-0.8,0.2-0.8,1.1c-0.1,1.8,1.3,1.3,1.3,1.3l1.5-0.4c0.1,0.1,0.2,2.3,0.2,2.3l-1.6-1c-0.9,0.5-1,1.4-1,1.4 c0.4,1.2,1.2,1.3,1.6,1.4c0.3,0.1,0.2,0.4,0,0.6c-3.8,2-4.1,1.9-4.1,1.9l-0.3,0.7c0,1.8,2.4,1.2,2.5,1.1c3.9-2.1,6.6-2.8,6.6-2.8 c0.5,0,0.9-0.9,0.9-0.9l0.4-0.6C131.4,18.9,130.6,19,130.6,19"
          />
          <path
            fill="#003B78"
            d="M141.7,17.1c-1.3-0.4-2.7-1.4-2.7-1.4c0.1-0.1,4.7-2.8,4.7-2.8c-1.1-1.4-2.6-2.1-2.6-2.1c-2.5,4-6,4.3-6.6,4.3 c-0.6,0-0.7,0-0.7-0.5c-0.1-1.7,0.2-1.8,0.2-1.8s0.4,0,0.7,0.3c0.6,0.6,1.9,0.1,1.9,0.1l0.9-0.8c1-1.1,1.1-1.4,1.1-2.4 c0.2-2.2,0.6-3.1,0.8-3.8c0.6-1.8,0.6-2.2,0.6-2.2c-0.1-1.9-2-1.3-2.3-1.2c-1.5,0.6-3.4,0.8-3.9,1c-1.5,0.5-1.3,0.8-1.3,0.8 l-0.1,1.5c0,0-0.3,8-0.3,8.6c-0.2,6.2,0.2,9.2,0.2,9.2c0,0.5,0.7,0.8,0.7,0.8c2.2-0.1,4.1-4.2,4.2-4.7c0.7-2.5,0.9-2.2,0.9-2.2 c1.8,0.7,3.9,3.2,4,3.3c0.1,0.1,0.3,0.1,0.5-0.3c0.2-0.3,1.3-1.8,1.3-1.8C144,18.7,142.4,17.4,141.7,17.1 M134.4,5.8 c0.1-0.4,2.5-0.4,2.7-0.3c0.3,0.1,0.3,0.9,0.3,0.9c-0.2,1.2-0.4,1.1-0.4,1.1c-1.4,0.3-2.7,0.1-2.7,0.1 C134.2,7.1,134.4,5.8,134.4,5.8 M133.9,9.5l0.2-0.3l2.8-0.1c0,0,0.2,0.1,0.1,0.5c-0.1,0.4-0.5,1.7-1.6,1.7c0,0-1.5,0.3-1.6-0.2 L133.9,9.5z M135.4,19.5c-0.8,0.4-1.2,0.1-1.2,0.1s-0.7-1.4-0.5-3.6c0,0,0.2-0.1,0.3-0.1c0,0,1.5,0.2,3.4,1.3 C137.4,17.3,137.6,18.5,135.4,19.5"
          />
          <path
            fill="#003B78"
            d="M40.5,31.4h2c0.6,0,1.1,0.2,1.1,0.8c0,0.6-0.4,0.9-1.2,0.9h-1.9V31.4z M39,34.1h3.2c1.5,0,1.9-0.2,2.4-0.6 c0.4-0.3,0.6-0.8,0.6-1.3c0-0.6-0.2-1.2-1.2-1.5c0.3-0.1,0.9-0.4,0.9-1.3c0-0.6-0.5-1.6-2.3-1.6H39V34.1z M40.5,29h1.8 c0.7,0,1.1,0.2,1.1,0.7c0,0.5-0.5,0.7-1.1,0.7h-1.8V29z"
          />
          <path
            fill="#003B78"
            d="M49.1,29.3L49.1,29.3l0.9,2.5h-1.9L49.1,29.3z M47.7,32.9h2.7l0.5,1.3h1.7L50,27.9h-1.8l-2.7,6.2h1.6 L47.7,32.9z"
          />
          <polygon
            fill="#003B78"
            points="58.2,27.9 59.6,27.9 59.6,34.1 58.1,34.1 55,29.7 55,29.7 55,34.1 53.6,34.1 53.6,27.9 55.2,27.9 58.2,32.3 58.2,32.3"
          />
          <polygon
            fill="#003B78"
            points="62.8,34.1 61.3,34.1 61.3,27.9 62.8,27.9 62.8,30.5 65.7,27.9 67.7,27.9 64.6,30.5 67.8,34.1 65.8,34.1 63.5,31.4 62.8,32"
          />
          <path
            fill="#003B78"
            d="M75.6,31c0-1.7,1.2-2.2,2-2.2c0.8,0,2,0.4,2,2.2c0,1.7-1.2,2.2-2,2.2C76.8,33.2,75.6,32.8,75.6,31 M74.1,31 c0,2.9,2.6,3.3,3.6,3.3c1,0,3.6-0.4,3.6-3.3c0-2.9-2.6-3.3-3.6-3.3C76.7,27.8,74.1,28.1,74.1,31"
          />
          <polygon
            fill="#003B78"
            points="84,34.1 82.5,34.1 82.5,27.9 87.8,27.9 87.8,29 84,29 84,30.4 87.3,30.4 87.3,31.5 84,31.5"
          />
          <path
            fill="#003B78"
            d="M98.9,30c-0.1-0.4-0.4-1.1-1.7-1.1c-0.7,0-1.8,0.4-1.8,2.2c0,1.1,0.5,2.1,1.8,2.1c0.9,0,1.5-0.4,1.7-1.2h1.6 c-0.3,1.3-1.4,2.3-3.2,2.3c-2,0-3.4-1.1-3.4-3.3c0-2.2,1.5-3.3,3.4-3.3c2.2,0,3.1,1.3,3.2,2.2H98.9z"
          />
          <path
            fill="#003B78"
            d="M102.8,31c0-1.7,1.2-2.2,2-2.2c0.8,0,2,0.4,2,2.2c0,1.7-1.2,2.2-2,2.2C104,33.2,102.8,32.8,102.8,31 M101.3,31 c0,2.9,2.6,3.3,3.6,3.3c1,0,3.6-0.4,3.6-3.3c0-2.9-2.6-3.3-3.6-3.3C103.9,27.8,101.3,28.1,101.3,31"
          />
          <polygon
            fill="#003B78"
            points="116.8,34.1 115.4,34.1 115.4,28.9 115.4,28.9 114,34.1 112.4,34.1 111.1,28.9 111.1,28.9 111.1,34.1 109.6,34.1 109.6,27.9 111.9,27.9 113.2,32.8 113.2,32.8 114.6,27.9 116.8,27.9"
          />
          <polygon
            fill="#003B78"
            points="125.5,34.1 124,34.1 124,28.9 124,28.9 122.6,34.1 121.1,34.1 119.7,28.9 119.7,28.9 119.7,34.1 118.3,34.1 118.3,27.9 120.5,27.9 121.9,32.8 121.9,32.8 123.2,27.9 125.5,27.9"
          />
          <path
            fill="#003B78"
            d="M132.9,32c0,1.6-1.2,2.3-3.1,2.3c-0.7,0-1.7-0.1-2.4-0.8c-0.4-0.4-0.6-0.9-0.6-1.5v-4.1h1.6v4 c0,0.9,0.6,1.2,1.3,1.2c1.1,0,1.5-0.4,1.5-1.2v-4.1h1.6V32z"
          />
          <polygon
            fill="#003B78"
            points="139,27.9 140.4,27.9 140.4,34.1 138.9,34.1 135.9,29.7 135.8,29.7 135.8,34.1 134.4,34.1 134.4,27.9 136,27.9 139,32.3 139,32.3"
          />
          <rect x="141.8" y="27.9" fill="#003B78" width="1.6" height="6.2" />
          <path
            fill="#003B78"
            d="M149.6,30c-0.1-0.4-0.4-1.1-1.7-1.1c-0.7,0-1.8,0.4-1.8,2.2c0,1.1,0.5,2.1,1.8,2.1c0.9,0,1.5-0.4,1.7-1.2h1.6 c-0.3,1.3-1.4,2.3-3.2,2.3c-2,0-3.4-1.1-3.4-3.3c0-2.2,1.5-3.3,3.4-3.3c2.2,0,3.1,1.3,3.2,2.2H149.6z"
          />
          <path
            fill="#003B78"
            d="M155.3,29.3L155.3,29.3l0.9,2.5h-1.9L155.3,29.3z M153.9,32.9h2.8l0.5,1.3h1.7l-2.6-6.2h-1.8l-2.7,6.2h1.6 L153.9,32.9z"
          />
          <polygon
            fill="#003B78"
            points="162,34.1 160.5,34.1 160.5,29 158.2,29 158.2,27.9 164.3,27.9 164.3,29 162,29"
          />
          <rect x="165.1" y="27.9" fill="#003B78" width="1.6" height="6.2" />
          <path
            fill="#003B78"
            d="M169.3,31c0-1.7,1.2-2.2,2-2.2c0.8,0,2,0.4,2,2.2c0,1.7-1.2,2.2-2,2.2C170.5,33.2,169.3,32.8,169.3,31 M167.8,31c0,2.9,2.6,3.3,3.6,3.3c1,0,3.6-0.4,3.6-3.3c0-2.9-2.6-3.3-3.6-3.3C170.4,27.8,167.8,28.1,167.8,31"
          />
          <polygon
            fill="#003B78"
            points="180.7,27.9 182.2,27.9 182.2,34.1 180.6,34.1 177.6,29.7 177.6,29.7 177.6,34.1 176.1,34.1 176.1,27.9 177.7,27.9 180.7,32.3 180.7,32.3"
          />
          <path
            fill="#003B78"
            d="M184.8,32.2c0,0.4,0.2,1,1.6,1c0.7,0,1.6-0.1,1.6-0.8c0-0.5-0.6-0.6-1.3-0.8l-0.8-0.2 c-1.2-0.2-2.4-0.5-2.4-1.8c0-0.7,0.4-1.9,2.9-1.9c2.3,0,2.9,1.2,2.9,2h-1.5c0-0.3-0.2-0.9-1.5-0.9c-0.6,0-1.3,0.2-1.3,0.7 c0,0.5,0.5,0.6,0.8,0.7l1.8,0.4c1,0.2,1.9,0.6,1.9,1.7c0,1.9-2.3,2-2.9,2c-2.7,0-3.2-1.3-3.2-2.1H184.8z"
          />
        </g>
      </svg>
    );
  }
}

export default BrandLogoIcon;