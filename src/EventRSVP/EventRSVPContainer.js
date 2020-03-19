import React from "react";
import ParticipantCard from "../ParticipantCard/ParticipantCard";

function participantReducer(participantCount, rsvp) {
  return participantCount + 1 + rsvp.guests;
}

function getParticipants(rsvps) {
  return rsvps
    .filter(rsvp => rsvp.response === "yes")
    .reduce(participantReducer, 0);
}

export default function EventRSVP({ host, RSVPs }) {
  return RSVPs ? (
    <>
      <div> Participants {getParticipants(RSVPs)}</div>
      <ParticipantCard participant={host} />

      {RSVPs.filter(rsvp => rsvp.member.event_context.host === false).map(
        (participant, index) => (
          <ParticipantCard
            key={`${participant.id}~${index}`}
            participant={participant}
          />
        )
      )}
    </>
  ) : (
    <div>Loading</div>
  );
}
