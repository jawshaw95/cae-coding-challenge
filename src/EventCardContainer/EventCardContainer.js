import React, { useState, useEffect } from "react";
import { fetchEvents } from "../client/meetupApiClient";
import EventCard from "../EventCard/EventCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardContainer: {
    textDecoration: "none",
    paddingTop: '.5em'
  }
}));

export default function EventCardContainer() {
  const classes = useStyles();
  const [events, setEvents] = useState();

  async function fetchEventsData() {
    const response = await fetchEvents("reactjs-dallas");
    const eventData = await response.data;
    setEvents(eventData);
  }

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <Container>
      <Grid justify='center' className={classes.cardContainer} container spacing={2}>
        {events ? (
          events.map((event, index) => (
            <Grid item key={`${event.id}~${index}`}>
              <EventCard event={event} />
            </Grid>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Grid>
    </Container>
  );
}
