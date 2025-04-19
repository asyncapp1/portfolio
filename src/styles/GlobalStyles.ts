import { createGlobalStyle } from 'styled-components';
import { colors, fontSizes } from './theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
    background-color: ${colors.background};
    color: ${colors.dark};
    font-size: ${fontSizes.md};
    line-height: 1.6;
  }

  body {
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
    transition: color 0.2s ease-in-out;
    
    &:hover {
      color: ${colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: ${colors.white};
  }

  h1 {
    font-size: ${fontSizes.heading};
  }

  h2 {
    font-size: ${fontSizes.subheading};
  }

  h3 {
    font-size: ${fontSizes.xxl};
  }

  h4 {
    font-size: ${fontSizes.xl};
  }

  h5 {
    font-size: ${fontSizes.lg};
  }

  h6 {
    font-size: ${fontSizes.md};
  }

  p {
    margin-bottom: 1rem;
    color: ${colors.dark};
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    color: ${colors.dark};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  section {
    padding: 4rem 0;
    background-color: ${colors.background};
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    html, body {
      font-size: 14px;
    }
    
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles; 