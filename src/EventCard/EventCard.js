import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { formatDateTime } from "../util/dateUtil";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100px",
    width: "350px",
    textAlign: "center"
  },
  cardButton: {
    textDecoration: "none",
    textTransform: "none",
    color: "black"
  },
  overFlow: {
    whiteSpace: "noWrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

//Clickable card to display high level event information
export default function EventCard({ event }) {
  const classes = useStyles();

  const { name, local_date, local_time, venue } = event;
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea component={Link} to={`/${event.id}`}>
          <CardContent className={classes.cardButton}>
            <Typography variant="h6">
              {formatDateTime(local_time, local_date)}
            </Typography>
            <Typography className={classes.overFlow} variant="h2">
              {name}
            </Typography>
            <Typography variant="h3">{venue.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
