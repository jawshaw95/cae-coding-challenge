import React from "react";
import { Parser } from "html-to-react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Map from "../MapContainer/MapContainer";

const htmlToReactParser = new Parser();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function EventDetails({ description, event }) {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const { address_1, address_2, city, state, zip } = event.venue;

  return (
    <Grid
      container
      className={classes.root}
      direction={smallScreen ? "column" : "row"}
      spacing={4}
      alignItems='center'
    >
      <Grid
        item
        xs={smallScreen ? "12" : "6"}
        className={classes.descriptionContainer}
      >
        <div style={{ overflowWrap: "break-word" }}>
          {htmlToReactParser.parse(description)}
        </div>
      </Grid>
      <Grid item xs={smallScreen ? "12" : "6"} className={classes.mapContainer}>
        <div
          style={{ paddingBottom: "10px" }}
        >{`${address_1} ${address_2} ${city}, ${state.toUpperCase()}, ${zip}`}</div>
        <Map
          latitude={event.venue.lat}
          longitude={event.venue.lon}
          size={`400x600`}
          zoom="10"
        />
      </Grid>
    </Grid>
  );
}
