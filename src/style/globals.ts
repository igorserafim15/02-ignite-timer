import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  a {
  text-decoration: none;
  }

  /**
  * Remove list-style
  */
  ol, ul {
    list-style: none;
  }

  html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  h1, h2, h3, h4, h5, h6, p, a, ul {
    font-weight: normal;
  }

  img {
    max-width: 100%;
    display: block;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  @media only screen and (max-width: 600px) {
    html {
      font-size: 55%;
    }
  }

  body {
    font-weight: 400;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme['gray-900']};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline-offset: 0.25rem;
  }

  img,
  iframe,
  object,
  embed,
  video {
    max-width: 100%;
  }

  img[width],
  iframe[width],
  object[width],
  embed[width],
  video[width] {
    width: auto;
    /* Defer to max-width */
  }

  img[width][height],
  iframe[width][height],
  object[width][height],
  embed[width][height],
  video[width][height] {
    height: auto;
    /* Preserve aspect ratio */
  }

  label {
    cursor: pointer;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  :focus:not(:focus-visible) {
    box-shadow: none;
    outline: 0;
  }

  :focus-visible {
    outline-color: ${(props) => props.theme['green-500']};
  }

  ::-moz-selection {
    background-color: ${(props) => props.theme['green-500']};
  }

  ::selection {
    background-color: ${(props) => props.theme['green-500']};
  }

  ::marker {
    color: ${(props) => props.theme['green-500']};
  }

  ::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme['green-500']};
  }

  ::-webkit-clear-button {
    color: ${(props) => props.theme['green-500']};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    color: ${(props) => props.theme['green-500']};
  }

  .container {
    max-width: 73.6rem;
    margin: 0 auto;
    padding: 0 2.4rem;
  }
`
