import React from "react";
import EventHeader from "../EventHeader/EventHeader";
import EventDetails from "../EventDetails/EventDetails";
import EventRSVPContainer from "../EventRSVP/EventRSVPContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  eventHeader: {
    padding: theme.spacing(2),
    borderRadius: 0,
    textAlign: 'left',
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

  const { address_1, address_2, city, state, zip } = event.venue;
  const { local_time, local_date, name, description } = event;

  const address = `${address_1} ${address_2}, ${city}, ${state.toUpperCase()} ${zip}`;
  const eventDate = new Date(`${local_time} ${local_date}`);

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" className={classes.eventGrid} spacing={0}>
        {/* <div className={classes.eventHeader}> */}
          <Grid xs={12} item>
            <Paper className={classes.eventHeader}>
              <EventHeader
                eventDate={eventDate.toLocaleString()}
                eventName={name}
                address={address}
                host={host}
              />
            </Paper>
          </Grid>
        <Grid xs={12} item>
            <Paper className={classes.eventDescription}>
              <EventDetails description={description} />
            </Paper>
        </Grid>
        <Grid xs={12} item>
          <Paper className={classes.eventRSVPs}>
            {RSVPs.length > 0 && <EventRSVPContainer host={host} RSVPs={RSVPs} />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
