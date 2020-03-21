import React from "react";
import { Parser } from "html-to-react";
import { Grid, useMediaQuery, Typography } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
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

export default function EventDetails({ description, event, eventDate, address, group }) {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Typography variant="h2">Info</Typography>
      <Grid
        container
        direction={smallScreen ? "column" : "row"}
        spacing={4}
        justify="center"
      >
        <Grid
          item
          xs={smallScreen ? 12 : 6}
          className={classes.descriptionContainer}
        >
          <div style={{ overflowWrap: "break-word" }}>
            {htmlToReactParser.parse(description)}
          </div>
        </Grid>
        <Grid item xs={smallScreen ? 12 : 6} className={classes.mapContainer}>
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
            zoom="10"
          />
        </Grid>
      </Grid>
    </div>
  );
}
