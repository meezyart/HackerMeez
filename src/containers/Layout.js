import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../components/Header";
import StoryList from "../containers/StoryList";
import StoryDetail from "../containers/StoryDetail";

import { GlobalStyle, MainWrapper } from "../styles/GlobalStyle";

export const Layout = () => {
  return (
    <MainWrapper>
      <GlobalStyle/>
      <Header />
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/0" />} />
            <Route path="/new/:page" component={StoryList} />
            <Route path="/item/:itemId" component={StoryDetail} />
            <Route render={() => <Redirect to="/new/0" />} />
          </Switch>
        </BrowserRouter>
      </section>
    </MainWrapper>
  );
};
