import React from "react";
import EventHeader from "../EventHeader/EventHeader";
import EventDetails from "../EventDetails/EventDetails";
import EventRSVPContainer from "../EventRSVP/EventRSVPContainer";

export default function Event({ event, host, RSVPs }) {
  const { address_1, address_2, city, state, zip } = event.venue;
  const { local_time, local_date, name, description } = event;

  const address = `${address_1} ${address_2}, ${city}, ${state.toUpperCase()} ${zip}`;
  const eventDate = new Date(`${local_time} ${local_date}`);

  return (
    <>
      <EventHeader
        eventDate={eventDate.toLocaleString()}
        eventName={name}
        address={address}
        host={host}
      />
      <EventDetails description={description} />
      {RSVPs.length > 0 && <EventRSVPContainer host={host} RSVPs={RSVPs}/>}
    </>
  );
}
