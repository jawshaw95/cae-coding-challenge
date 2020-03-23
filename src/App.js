import React from "react";
import EventContainer from "./EventContainer/EventContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventCardContainer from "./EventCardContainer/EventCardContainer";
import EventRSVPContainer from './EventRSVPContainer/EventRSVPContainer'
import AppBar from "./Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Switch>
          <Route exact path="/:id" component={EventContainer} />
          <Route exact path="/:id/rsvps" component={EventRSVPContainer} />
          <Route exact path="/" component={EventCardContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
