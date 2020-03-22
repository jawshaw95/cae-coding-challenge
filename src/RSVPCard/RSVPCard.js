import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100px",
    width: "100%",
    background: theme.palette.common.honeydew
  },
  media: {
    height: 100,
    width: 100
  }
}));

export default function RSVPCard({ rsvp }) {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={rsvp.member.photo ? rsvp.member.photo.photo_link : ""}
        title="profile pic"
      />
      <CardContent>
        <Typography className={classes.padding} variant="h2" component={"p"}>
          {rsvp.member.name}
        </Typography>
        <Typography variant="h6">
          {rsvp.member.event_context.host ? "Organizer" : "Member"}
        </Typography>
      </CardContent>
    </Card>
  );
}
