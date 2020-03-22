import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    paddingRight: "8px",
    paddingLeft: "8px"
  },
  link: {
    ...theme.link
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar} variant="dense">
          <Typography className={classes.link} component={Link} to="/" variant="h3" color="inherit">
            ReactJS Event Viewer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
