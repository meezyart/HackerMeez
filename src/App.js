import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// components
import { Header } from "./components/Header";
// containers
import { Error404 } from "./containers/Error404";
import StoryList from "./containers/StoryList";
import StoryDetail from "./containers/StoryDetail";
// styles
import { GlobalStyle, MainWrapper } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/0" />} />
            <Route path="/new/:page" component={StoryList} />
            <Route path="/item/:itemId" component={StoryDetail} />
            <Route path="/404" component={Error404} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </BrowserRouter>
      </section>
    </MainWrapper>
  );
};
