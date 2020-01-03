import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.2;
  }
  h1,h3{
    padding: 0;
    margin:0;
    }
  textarea, button {
    outline: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a{
    color:inherit;
    text-decoration:none;
  }

  body {
    font-family:'Roboto',Verdana, Geneva, sans-serif;
    margin:0;
  }
`;

export const HeaderWrapper = styled.div`
  padding: 0.6rem 1em;
  background: #ff6701;
  color: black;
  a {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  img {
    border: 1px white solid;
    border-radius: 2px;
    margin-right: 0.8em;
    margin-left: 0.2em;
  }
  h3 {
    font-weight: bold;
  }
`;
export const MainWrapper = styled.div`
  margin: 0 auto 4em;
  width: 1120px;
`;

export const ButtonLink = styled.a`
  margin-top: 1em;
  display: inline-block;
  padding: 0.5em 1.8em;
  background: #ff6701;
  border-radius: 2px;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  display: ${props => (props.hidden ? `none` : `inline-block`)}
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: #ffa201;
  }
`;

export const ContentWrapper = styled.div`
  background: #f6f6f0;
  padding: 0.8em 1.2em 1.5em;
  border-bottom: 2px solid #f68423;
`;

