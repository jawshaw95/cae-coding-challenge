import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  eventNameText: {
    marginBottom: ".3em",
  },
  eventDateText: {
    fontFamily: "arial",
    marginTop: ".3em",
  },
  hostName: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1.25rem"
  },
  hostedText: {
    fontSize: "1rem",
    fontWeight: "normal"
  }
}));

function formatDatetime(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function EventHeader({ eventDate, eventName, host }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.eventNameText} variant="h1">
          {eventName}
        </Typography>
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.hostGrid}
        >
          <Grid item>
            <Avatar alt={host.name} src={host.member.photo.thumb_link} />
          </Grid>
          <Grid item>
            <Grid container direction="column" className={classes.hostName}>
              <Grid item className={classes.hostedText}>
                The Host
              </Grid>
              <Grid item className={classes.hostName}>
                {host.member.name}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="h2" className={classes.eventDateText}>
          {formatDatetime(eventDate)}
        </Typography>
      </div>
    </>
  );
}
