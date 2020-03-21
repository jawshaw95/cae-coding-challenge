import React from "react";
import EventHeader from "../EventHeader/EventHeader";
import EventDetails from "../EventDetails/EventDetails";
import EventRSVPContainer from "../EventRSVP/EventRSVPContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { formatDateTime } from "../util/dateUtil";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  eventHeader: {
    padding: theme.spacing(2),
    textAlign: "left",
    borderRadius: 0,
    backgroundColor: "#E9EBF8"
  },
  eventDescription: {
    padding: theme.spacing(2),
    borderRadius: 0,
    backgroundColor: "#FDFEFF"
  },
  eventRSVPs: {
    padding: theme.spacing(2),
    borderRadius: 0,
    backgroundColor: "#FFFAED"
  }
}));

export default function Event({ event, host, RSVPs }) {
  const classes = useStyles();
  const { local_time, local_date, name, description, venue, group } = event;
  const { address_1, address_2, city, state, zip } = venue;

  //Formatted Address
  const address = `${address_1}${
    address_2 ? ` ${address_2}` : ""
  }, ${city}, ${state.toUpperCase()} ${zip}`;

  //Formatted Date
  const eventDate = formatDateTime(local_time, local_date);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        className={classes.eventGrid}
        spacing={0}
      >
        <Grid item>
          <Paper className={classes.eventHeader}>
            <EventHeader
              eventDate={eventDate}
              eventName={name}
              address={address}
              host={host}
            />
          </Paper>
        </Grid>
        <Grid xs={12} item>
          <Paper className={classes.eventDescription}>
            <EventDetails
              description={description}
              event={event}
              eventDate={eventDate}
              address={address}
              group={group.name}
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.eventRSVPs}>
            {RSVPs.length > 0 && (
              <EventRSVPContainer host={host} RSVPs={RSVPs} />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
