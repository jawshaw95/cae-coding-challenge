import React, { useState, useEffect } from "react";
import { fetchEventRSVPS } from "../client/meetupApiClient";
import ParticipantCard from '../ParticipantCard/ParticipantCard'

async function fetchData() {
  const response = await fetchEventRSVPS("reactjs-dallas", "mrkxmrybcgbsb");
  return response.data;
}

function participantReducer(participantCount, rsvp) {
    return participantCount + 1 + rsvp.guests;
}

function getParticipants(rsvps) {
  return rsvps
    .filter(rsvp => rsvp.response === "yes")
    .reduce(participantReducer, 0);
}

export default function EventRSVP() {
  const [RSVPs, setRSVPs] = useState([]);

  useEffect(() => {
    fetchData().then(data => setRSVPs(data));
  }, []);

  return (
    <>
      <div> Participants {getParticipants(RSVPs)}</div>
      {RSVPs.map((participant, index) => (
        <ParticipantCard key={`${participant.id}~${index}`} participant={participant} />
      ))

      }
      
    </>
  );
}
