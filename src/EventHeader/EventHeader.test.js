import React from "react";
import { render } from "@testing-library/react";
import EventHeader from "./EventHeader";

describe("EventHeader", () => {
  const MOCK_PROPS = {
    description: "I am described",
    eventName: "Eventful!",
    eventDate: "Tuesday, April 14, 2020",
    host: {
        member: {
            name: "Rusty",
            photo: {
                thumb_link: "thumb.png"
            }
        }
    }
  };

  it("displays name of event, formatted event date, host and host image", () => {
    const { getByText, getByAltText } = render(<EventHeader {...MOCK_PROPS} />);

    expect(getByText(MOCK_PROPS.eventName));
    expect(getByText(MOCK_PROPS.eventDate));
    expect(getByText('The Host'));
    expect(getByText(MOCK_PROPS.host.member.name));
    expect(getByAltText("Rusty"));
  });
});
