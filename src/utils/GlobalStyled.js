import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
  font-family: "Manrope", sans-serif;
  font-family: "Raleway", sans-serif;
    min-height: 100vh;
  }
  code {
    font-family: "Inter", sans-serif;
  font-family: "Manrope", sans-serif;
  font-family: "Raleway", sans-serif;

  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  address {
    font-style: normal;
  }
img {
  vertical-align: top;
}
img,
svg {
  max-width: 100%;
  height: auto;
}
  button {
    cursor: pointer;
    padding:0;
    margin:0;
  }
  li{
     list-style: none;
  }
  article {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }
`;

export default GlobalStyles;
