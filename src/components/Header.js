import React from "react";

import { HeaderWrapper } from '../styles/GlobalStyle'

export const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <img src="../favicon-32x32.png" alt="Hacker-meez" height="20" />
        <h3>HackerMeez News</h3>
      </a>
    </HeaderWrapper>
  );
};
