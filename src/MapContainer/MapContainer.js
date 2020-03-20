import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: "100%",
    height: "auto"
  }
}));

export default function Map({ latitude, longitude, zoom, size }) {
  const classes = useStyles();
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&markers=red:blue|${latitude},${longitude}&size=${size}&zoom=${14}&key=${
    process.env.REACT_APP_MAPS_API_KEY
  }`;

  return (
    <>
      <img className={classes.image} alt="event location" src={imageUrl} />
    </>
  );
}
