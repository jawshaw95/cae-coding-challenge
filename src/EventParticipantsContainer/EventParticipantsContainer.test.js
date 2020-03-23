import React from "react";
import { render } from "@testing-library/react";
import EventParticipantsContainer from "./EventParticipantsContainer";
import RSVPs from "../mock_data/eventRSVP";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("EventHeader", () => {
  const MOCK_PROPS = {
    RSVPs: RSVPs,
    yesCount: 54,
    eventId: "9001",
    host: {
      member: {
        name: "Ben M.",
        photo: {
          thumb_link: "thumb.png"
        },
        event_context: {
          host: true
        }
      }
    }
  };

  it("displays rsvp count, 'see all' button, and list of participants", () => {
    const history = createMemoryHistory();
    const { getByText, getAllByText } = render(
      <Router history={history}>
        <EventParticipantsContainer {...MOCK_PROPS} />
      </Router>
    );
    expect(getByText(`Participants`));
    expect(getByText(`(${MOCK_PROPS.yesCount})`));
    expect(getByText('See All'));
    MOCK_PROPS.RSVPs.forEach((participant) => {
        expect(getByText(participant.member.name));
    })
    expect(getAllByText('Member').length).toEqual(4);
    expect(getByText('Organizer'));
  });
});
