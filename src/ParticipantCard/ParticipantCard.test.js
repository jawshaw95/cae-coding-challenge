import React from "react";
import { render } from "@testing-library/react";
import ParticipantCard from "./ParticipantCard";
import RSVPs from "../mock_data/eventRSVP";

describe("EventCard", () => {
  
  it("displays name of participant and their role of member", () => {
    const MOCK_PROPS = {
        participant: RSVPs[0]
      };

    const { getByText } = render(
        <ParticipantCard {...MOCK_PROPS} />
    );
    
      expect(getByText(MOCK_PROPS.participant.member.name));
      expect(getByText('Member'));

  });

  it("displays name of participant and their role of organizer", () => {
    const MOCK_PROPS = {
        participant: RSVPs[4]
      };
    const { getByText } = render(
        <ParticipantCard {...MOCK_PROPS} />
    );
    
      expect(getByText(MOCK_PROPS.participant.member.name));
      expect(getByText('Organizer'));

  });
});
