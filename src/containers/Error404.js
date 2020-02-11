import React from "react";
import { ButtonLink } from "../styles/GlobalStyle";

export const Error404 = ({message}) => {
  return (
    <>
      <h1>{message || 'Page not Found'}</h1>
      <ButtonLink to="/new/0">Back to News</ButtonLink>
    </>
  );
};
