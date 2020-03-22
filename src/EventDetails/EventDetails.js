import React from "react";
import { Parser } from "html-to-react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../MapContainer/MapContainer";

//util to render HTML from event Payload
const htmlToReactParser = new Parser();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mapContainer: {
    textAlign: "center"
  }
}));

//Grid for Event details and Map
export default function EventDetails({
  description,
  event,
  eventDate,
  address,
  group
}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography variant="h2">Info</Typography>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={6} className={classes.descriptionContainer}>
          <div style={{ overflowWrap: "break-word" }}>
            {htmlToReactParser.parse(description)}
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.mapContainer}>
          <Typography variant="h4">Who</Typography>
          <Typography variant="h6" style={{ paddingBottom: "10px" }}>
            {group}
          </Typography>
          <Typography variant="h4">When</Typography>
          <Typography variant="h6" style={{ paddingBottom: "10px" }}>
            {eventDate}
          </Typography>
          <Typography variant="h4">Where</Typography>
          <Typography variant="h6" style={{ paddingBottom: "10px" }}>
            {address}
          </Typography>
          <Map
            latitude={event.venue.lat}
            longitude={event.venue.lon}
            size={`400x400`}
          />
        </Grid>
      </Grid>
    </div>
  );
}
