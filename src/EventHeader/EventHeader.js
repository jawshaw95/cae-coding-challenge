import React from "react";
import { Typography, Paper } from "@material-ui/core";

export default function EventHeader(props) {
  const { eventDate, eventName, address } = props;

  return (
    <>
      <Paper>
        <Typography color="textSecondary">{address}</Typography>
        <Typography variant="h4">{eventName}</Typography>
        <Typography color="textSecondary" variant="h6">
          {eventDate}
        </Typography>
      </Paper>
    </>
  );
}
