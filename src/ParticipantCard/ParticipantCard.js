import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 120,
    minHeight: 50,
    textAlign: "center"
  },
  center: {
    // marginLeft: "auto",
    // marginRight: "auto"
  },
  media: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 60,
    width: 60,
    borderRadius: "50%",
    marginTop: "10px"
  },
}));

export default function ParticipantCard({ participant }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          participant.member.photo ? participant.member.photo.thumb_link : ""
        }
        title="profile pic"
      ></CardMedia>
      <CardContent>
        <Typography className={classes.padding} variant="h6" component={"p"}>
          {participant.member.name}
        </Typography>
        <Typography variant="subtitle1">
          {participant.member.event_context.host ? "Organizer" : "Member"}
        </Typography>
      </CardContent>
    </Card>
  );
}
