import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventContainer from "./EventContainer";
import * as meetupApiClient from "../client/meetupApiClient";
import events from "../mock_data/eventsResponse";
import eventRSVP from "../mock_data/eventRSVP";

jest.mock("../client/meetupApiClient");

describe("Event Container", () => {
  const MOCK_PROPS = {
    match: {
      params: {
        id: 1234
      }
    }
  };
  it("should fetch data and render event", async () => {
    const history = createMemoryHistory();
    meetupApiClient.fetchEvent.mockResolvedValue({ data: events[0] });
    meetupApiClient.fetchEventRSVPS.mockResolvedValue({ data: eventRSVP });

    const expectedDate = "Tuesday, April 14, 2020";

    const { getByText, getAllByText } = render(
      <Router history={history}>
        <EventContainer {...MOCK_PROPS} />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText(events[0].name));
    await waitForElement(() => getAllByText(expectedDate));
  });

  it("renders error message on failure to load events", async () => {
    const history = createMemoryHistory();
    meetupApiClient.fetchEvent.mockRejectedValue(new Error("loading error"));

    const { getByText } = render(
      <Router history={history}>
        <EventContainer {...MOCK_PROPS} />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText('Something went wrong.'));
  });
});
