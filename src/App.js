import React from "react";
import EventContainer from "./EventContainer/EventContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventCardContainer from "./EventCardContainer/EventCardContainer";
import AppBar from "./AppBar/AppBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route path="/:id" component={EventContainer} />
          <Route path="/" component={EventCardContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
