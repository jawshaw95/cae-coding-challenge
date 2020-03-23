import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventRSVPContainer from "./EventRSVPContainer";
import * as meetupApiClient from "../client/meetupApiClient";
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
  it("should fetch data, render return link and going RSVPs", async () => {
    const history = createMemoryHistory();
    meetupApiClient.fetchEventRSVPS.mockResolvedValue({ data: eventRSVP });

    const { getByText } = render(
      <Router history={history}>
        <EventRSVPContainer {...MOCK_PROPS} />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText(eventRSVP[0].event.name));
    await waitForElement(() => getByText('Going'));
    await waitForElement(() => getByText(eventRSVP[0].member.name))
    const notGoing = await waitForElement(() => getByText('Not Going'))
    fireEvent.click(notGoing);

    await waitForElement(() => getByText(eventRSVP[2].member.name))

  });


  it("renders error message on failure to load events", async () => {
    const history = createMemoryHistory();
    meetupApiClient.fetchEventRSVPS.mockRejectedValue(new Error("loading error"));

    const { getByText } = render(
      <Router history={history}>
        <EventRSVPContainer {...MOCK_PROPS} />
      </Router>
    );

    expect(getByText("Loading..."));
    await waitForElement(() => getByText('Something went wrong.'));
  });
});
