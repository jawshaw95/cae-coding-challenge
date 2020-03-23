import React, { Component } from "react";
import RSVPCard from "../RSVPCard/RSVPCard";
import { fetchEventRSVPS } from "../client/meetupApiClient";
import {
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Button,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = {
  paper: {
    background: "#F3FCF0",
    width: "100%"
  },
  tabs: {
    marginBottom: ".3em"
  },
  tab: {
    width: "50%",
    textDecoration: "none",
    textTransform: "none"
  },
  returnButtonIcon: {
    paddingRight: ".1em"
  }
};

const filters = [
  rsvp => rsvp.response === "yes",
  rsvp => rsvp.response === "no"
];

class EventRSVPContainer extends Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      hasError: false,
      RSVPs: null,
      activeTab: 0
    };
  }

  async fetchEventRSVPData(id) {
    try {
      const response = await fetchEventRSVPS("reactjs-dallas", id);
      const RSVPList = await response.data;
      this.setState({ RSVPs: RSVPList });
    } catch (e) {
      this.setState({ hasError: true });
    }
  }

  componentDidMount = () => {
    this.fetchEventRSVPData(this.props.match.params.id);
  };

  handleTabChange(event, id) {
    this.setState({ activeTab: id });
  }

  render() {
    const { classes } = this.props;
    const { RSVPs, activeTab } = this.state;
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Container maxWidth="sm" className={classes.root}>
        <Paper elevation={4} className={classes.paper}>
          {RSVPs ? (
            <>
              <Button
                className={classes.eventReturnLink}
                component={Link}
                to={`/${this.props.match.params.id}`}
              >
                <ArrowBackIcon className={classes.returnButtonIcon} />
                <Typography variant="h2">{RSVPs[0].event.name}</Typography>
              </Button>
              <Tabs
                className={classes.tabs}
                onChange={this.handleTabChange}
                value={activeTab}
                size="large"
              >
                <Tab label="Going" className={classes.tab} />
                <Tab label=" Not Going" className={classes.tab} />
              </Tabs>
              <Grid container direction="row" justify="center" spacing={1}>
                {RSVPs.filter(filters[activeTab]).map((rsvp, index) => (
                  <Grid xs={12} key={index} item>
                    <RSVPCard rsvp={rsvp} key={index} />
                  </Grid>
                ))}
              </Grid>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(EventRSVPContainer);
