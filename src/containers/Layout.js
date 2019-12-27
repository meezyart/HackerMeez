import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import StoryList from "../containers/StoryList";
import StoryDetail from "../containers/StoryDetail";


export const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/new/1" />} />
            <Route path="/new/:page" component={StoryList} />
            <Route path="/item/:itemId" component={StoryDetail} />
          </Switch>
        </BrowserRouter>
      </section>
    </>
  );
};
