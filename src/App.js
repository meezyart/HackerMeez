import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { Error404 } from "./containers/Error404";
import StoryList from "./containers/StoryList";
import StoryDetail from "./containers/StoryDetail";

import { GlobalStyle, MainWrapper, ContentWrapper } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/0" />} />
            <Route path="/new/:page(\d+)" component={StoryList} />
            <Route path="/item/:itemId(\d+)" component={StoryDetail} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </ContentWrapper>
    </MainWrapper>
  );
};
