import React, { useState, useEffect } from "react";
import "./App.css";
import Event from "./Event/Event";
import { Container } from "@material-ui/core";
import { fetchEvent, fetchEventRSVPS } from "./client/meetupApiClient";

function App() {
  const [event, setEvent] = useState(null);
  const [host, setHost] = useState(null);
  const [RSVPs, setRSVPs] = useState([]);

  async function fetchEventData() {
    const response = await fetchEvent("reactjs-dallas", "mrkxmrybcgbsb");
    const eventData = await response.data;
    setEvent(eventData);
  }

  async function fetchEventRSVPData() {
    const response = await fetchEventRSVPS("reactjs-dallas", "mrkxmrybcgbsb");
    const RSVPList = await response.data;
    setRSVPs(RSVPList);
    setHost(
      RSVPList.filter(rsvp => {
        if(rsvp.member.event_context.host === true) {
          return rsvp
        };
      })[0]
    );
  }

  useEffect(() => {
    fetchEventData();
  }, []);

  useEffect(() => {
    fetchEventRSVPData();
  }, []);

  return (
    <>
      <Container disableGutters>
        {event && host ? (
          <Event event={event} host={host} RSVPs={RSVPs} />
        ) : (
          <div>Loading</div>
        )}
      </Container>
    </>
  );
}

export default App;
