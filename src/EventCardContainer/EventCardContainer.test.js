import React from "react";
import { Router } from "react-router-dom";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventCardContainer from "./EventCardContainer";
import * as meetupApiClient from "../client/meetupApiClient";
import events from "../mock_data/eventsResponse";
import { createMemoryHistory } from "history";

jest.mock("../client/meetupApiClient");

describe(EventCardContainer, () => {
  let history;
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it("loads event card data, then displays event cards", async () => {
    meetupApiClient.fetchEvents.mockResolvedValue({ data: [events[0]] });

    const expectedDate = "Tuesday, April 14, 2020";
    const expectedVenue = "Virgin Pulse";

    const { getByText } = render(
      <Router history={history}>
        <EventCardContainer />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText(events[0].name));
    await waitForElement(() => getByText(expectedDate));
    await waitForElement(() => getByText(expectedVenue));
  });

  it("renders error message on failure to load events", async () => {
    meetupApiClient.fetchEvents.mockRejectedValue(new Error("loading error"));

    const { getByText } = render(
      <Router history={history}>
        <EventCardContainer />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText("An error ocurred loading events"));
  });
});
