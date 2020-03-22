import React from "react";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  participantText: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  link: {
    ...theme.link
  }
}));

//Grid to contain event participant cards
export default function EventParticipationContainer({ host, RSVPs, eventId, yesCount }) {
  const classes = useStyles();
  return RSVPs ? (
    <>
      <Grid container justify="space-between" spacing={2} direction="row">
        <Grid item>
          <Typography variant="h2" className={classes.hostedText}>
            Participants <span>{`(${yesCount})`}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size="large"
            component={Link}
            to={`${eventId}/rsvps`}
            className={classes.link}
          >
            See All
          </Button>
        </Grid>
      </Grid>

      <Grid justify="flex-start" container spacing={4}>
        <Grid item>
          <ParticipantCard participant={host} />
        </Grid>
        {RSVPs.slice(0, 10)
          .filter(rsvp => rsvp.member.event_context.host === false)
          .map((participant, index) => (
            <Grid item key={`${participant.id}~${index}`}>
              <ParticipantCard participant={participant} />
            </Grid>
          ))}
      </Grid>
    </>
  ) : (
    <div>Loading</div>
  );
}
