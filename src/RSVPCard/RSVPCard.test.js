import React from "react";
import { render } from "@testing-library/react";
import RSVPCard from "./RSVPCard";
import RSVPs from "../mock_data/eventRSVP";
describe("RSVPCard", () => {
  const MOCK_PROPS = {
    rsvp: RSVPs[0]
  };

  it("displays profile pic, member name, and event_context is member", () => {
    const { getByText, getByTitle } = render(<RSVPCard {...MOCK_PROPS} />);

    expect(getByTitle("profile pic"));
    expect(getByText(MOCK_PROPS.rsvp.member.name));
    expect(getByText("Member"));
  });
});
