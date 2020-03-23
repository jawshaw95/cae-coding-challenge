import React from "react";
import { render } from "@testing-library/react";
import EventDetails from "./EventDetails";

describe("EventDetails", () => {
  const MOCK_PROPS = {
    description: "I am described",
    event: {
      venue: {
        lat: "12.2312",
        lon: "12.312"
      }
    },
    eventDate: "Tuesday, April 14, 2020",
    address: "10670 N Central Expy Suite 400, Dallas, TX 75231"
  };

  it("displays name of event, formatted event date, and venue name, google map", () => {
    const { getByText, getByAltText } = render(<EventDetails {...MOCK_PROPS} />);

    expect(getByText(MOCK_PROPS.description));
    expect(getByText(MOCK_PROPS.eventDate));
    expect(getByText(MOCK_PROPS.address));
    expect(getByAltText('event location'));

  });
});
