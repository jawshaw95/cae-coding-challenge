import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import * as meetupApiClient from './client/meetupApiClient';
import events from './mock_data/eventsResponse'
import eventRSVP from './mock_data/eventRSVP'

jest.mock('./client/meetupApiClient');

test("full app navigation test", async() => {
  //Setup
  const history = createMemoryHistory();

  meetupApiClient.fetchEvents.mockResolvedValue({data: [events[0]]})
  meetupApiClient.fetchEvent.mockResolvedValue({data: events[0]})
  meetupApiClient.fetchEventRSVPS.mockResolvedValue({data: eventRSVP})
  
  //Expected
  const expectedText = 'View All Events';
  const eventName = "ReactJS @ Virgin Pulse";
  const group = 'reactjs-dallas' 
  const seeAllParticipantText = 'See All' 
  const goingText = 'Going' 
  
  //Render
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  //asserts
  expect(getByText(expectedText))
  const eventCard = await waitForElement(() => getByText(eventName))
  expect(meetupApiClient.fetchEvents).toHaveBeenCalledTimes(1);
  expect(meetupApiClient.fetchEvents).toHaveBeenCalledWith(group)

  //Navigate to event page
  fireEvent.click(eventCard);

  const seeAllLink = await waitForElement(() => getByText(seeAllParticipantText))
  // expect(meetupApiClient.fetchEvent).toHaveBeenCalledTimes(1);
  expect(meetupApiClient.fetchEvent).toHaveBeenCalledWith(group, events[0].id)

  //navigate to view all participants page
  fireEvent.click(seeAllLink);

  await waitForElement(() => getByText(goingText))
  expect(meetupApiClient.fetchEventRSVPS).toHaveBeenCalledTimes(2);
  expect(meetupApiClient.fetchEventRSVPS).toHaveBeenCalledWith(group, events[0].id)

});
