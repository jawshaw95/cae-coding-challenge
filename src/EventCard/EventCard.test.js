import React from "react";
import { render } from "@testing-library/react";
import EventCard from "./EventCard";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("EventCard", () => {
  const MOCK_PROPS = {
    event: {
      name: "ReactJS @ Virgin Pulse",
      local_date: "2020-04-14",
      local_time: "18:30",
      venue: {
        address_1: "1st Street",
        address_2: "",
        city: "Arlen",
        state: "TX",
        zip: "75777",
        name: 'The Crib'
      }
    },
    RSVPs: []
  };
  
  it("displays name of event, formatted event date, and venue name ", () => {
    const history = createMemoryHistory();
    const formattedDate = "Tuesday, April 14, 2020";
    const { getByText } = render(
      <Router history={history}>
        <EventCard {...MOCK_PROPS} />
      </Router>
    );
    
      expect(getByText(MOCK_PROPS.event.name));
      expect(getByText(MOCK_PROPS.event.venue.name));
      expect(getByText(formattedDate));

  });
});
