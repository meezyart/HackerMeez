import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.2;
  }
  h1,h3{padding: 0;
    margin:0;}
  textarea, button {
    outline: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a{
    color:inherit;
  }

  body {
    font-family:'Roboto',Verdana, Geneva, sans-serif;
    margin:0;
  }
`;

export const HeaderWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.6rem 1em;
  background: #ff6701;
  text-decoration:none;
  color:black;

  img {
    border: 1px white solid;
    border-radius: 2px;
    margin-right: 0.7em;
  }
  h3 {
    font-weight: bold;
  }
`;
export const MainWrapper = styled.div`
  margin: 0 auto 4em;
  width: 900px;
`;

export const ContentWrapper = styled.div`
  background: #f6f6f0;
  padding: 1em;
`;
export const StoryListWrapper = styled(ContentWrapper)`
  .rank {
    min-width: 2.7em;
  }
`;
