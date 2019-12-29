import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.2;
  }
  textarea, button {
    outline: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family:'Roboto',Verdana, Geneva, sans-serif;
  }
`;

export const MainWrapper = styled.div`
  margin: 1em auto 4em;
  width: 900px;
`;

export const ContentWrapper = styled.div`
  background: #f6f6f0;
  padding: 1em;

`;
export const StoryListWrapper = styled(ContentWrapper)`
  .rank{
    min-width:2.7em;
  }
`;