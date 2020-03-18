import React, { useState, useEffect } from "react";
import "./App.css";
import Event from "./Event/Event";
import { Container } from "@material-ui/core";
import { fetchEvent } from "./client/meetupApiClient";

async function fetchEventData() {
  const response = await fetchEvent("reactjs-dallas", "mrkxmrybcgbsb");
  return response.data;
}

function App() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventData().then(data => setEvent(data));
  }, []);

  return (
    <>
      <Container disableGutters>
        {event ? <Event event={event} /> : <div></div>}
      </Container>
    </>
  );
}

export default App;
