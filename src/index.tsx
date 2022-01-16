/* eslint-disable default-param-last */
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import NotoBoldWoff from "./assests/fonts/noto-sans-v21-latin-700.woff";
import NotoBoldWoff2 from "./assests/fonts/noto-sans-v21-latin-700.woff2";
import NotoWoff from "./assests/fonts/noto-sans-v21-latin-regular.woff";
import NotoWoff2 from "./assests/fonts/noto-sans-v21-latin-regular.woff2";

const Global = createGlobalStyle`
  *{
    @font-face {
      font-family: 'Roboto';
      src: url(${NotoBoldWoff2}) format('woff2'),
           url(${NotoBoldWoff}) format('woff');
      font-weight: 700;
      font-style: bold;
    }
    @font-face {
      font-family: 'Noto-Sans';
      src: url(${NotoWoff2}) format('woff2'),
           url(${NotoWoff}) format('woff');
      font-weight: 400;
      font-style: normal;
    }
    margin: 0;
    paddnig: 0;
    box-sizing: border-box;
    font-family: Noto-Sans;
    font-size: 14px;
  }
`;

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById(`root`)
);
