import axios from "axios";
import eventRSVP from "../mock_data/eventRSVP";
import eventsResponse from "../mock_data/eventsResponse";

/*
  In development returns mock_data to avoid excessive API calls
*/
const base = "https://cors-anywhere.herokuapp.com/https://api.meetup.com";

export const fetchEvents = group => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    return axios.get(`${base}/${group}/events`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: eventsResponse }), 1);
  });
};

export const fetchEvent = (group, eventId) => {
  if (process.env.NODE_ENV === "production") {
    return axios.get(`${base}/${group}/events/${eventId}`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          data: eventsResponse.filter(event => event.id === eventId)[0]
        }),
      1
    );
  });
};

export const fetchEventRSVPS = (group, eventId) => {
  if (process.env.NODE_ENV === "production") {
    return axios.get(`${base}/${group}/events/${eventId}/rsvps`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: eventRSVP }), 1);
  });
};
