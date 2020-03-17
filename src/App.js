import React, { useState, useEffect } from "react";
import "./App.css";
import Event from "./Event/Event";
import { Container } from "@material-ui/core";
import { fetchEvent } from "./client/meetupApiClient";

async function fetchData() {
  const response = await fetchEvent("reactjs-dallas", "mrkxmrybcgbsb");
  const data = await response.data;

  return data;
}

function App() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetchData().then(data => setEvents(data));
  }, []);

  return (
    <>
      <Container disableGutters>
        {events ? <Event event={events} /> : <div></div>}
      </Container>
    </>
  );
}

export default App;
