import React from "react";
import {Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  eventName: {
    color: "black",
    fontFamily: "Arial",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.25rem"
    }
  },
  hostName: {
    fontWeight: "bold",
    fontFamily: "Arial",
    fontSize: "1.25rem"
  },
  hostedText: {
    fontSize: ".75rem",
    fontWeight: "normal"
  }
}));

export default function EventHeader({ eventDate, eventName, address, host }) {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.eventName}>{eventName}</h1>
      <Grid
        container
        justify="flex-start"
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
    </>
  );
}
