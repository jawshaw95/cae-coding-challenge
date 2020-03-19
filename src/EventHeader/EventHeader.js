import React from "react";
import { Typography, Paper } from "@material-ui/core";

export default function EventHeader({ eventDate, eventName, address, host }) {

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
