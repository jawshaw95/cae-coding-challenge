import React from "react";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  participantText: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  }
}));

function participantReducer(participantCount, rsvp) {
  return participantCount + 1 + rsvp.guests;
}

function getParticipants(rsvps) {
  return rsvps
    .filter(rsvp => rsvp.response === "yes")
    .reduce(participantReducer, 0);
}

export default function EventRSVP({ host, RSVPs }) {
  const classes = useStyles();
  return RSVPs ? (
    <>
      <Grid container justify="space-between" direction="row">
        <Grid item>
          <h2 className={classes.hostedText}>
            Participants <span>{`(${getParticipants(RSVPs)})`}</span>
          </h2>
        </Grid>
        <Grid item>
          <h2 className={classes.hostedText}>
            See All
          </h2>
        </Grid>
      </Grid>

      <Grid direction="row" container spacing={2}>
        <Grid item>
          <ParticipantCard participant={host} />
        </Grid>

        {RSVPs.filter(rsvp => rsvp.member.event_context.host === false).map(
          (participant, index) => (
            <Grid item key={`${participant.id}~${index}`} >
              <ParticipantCard participant={participant} />
            </Grid>
          )
        )}
      </Grid>
    </>
  ) : (
    <div>Loading</div>
  );
}
