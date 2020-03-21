import axios from "axios";
import eventRSVP from "../mock_data/eventRSVP";
import eventsResponse from "../mock_data/eventsResponse";

/*
  In development returns mock_data to avoid excessive API calls
*/
const base = "https://cors-anywhere.herokuapp.com/https://api.meetup.com";

export const fetchEvents = group => {
  if(process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: eventsResponse }), 1);
    });
  }
  return axios.get(`${base}/${group}/events`);
};

export const fetchEvent = (group, eventId) => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: eventsResponse.filter(event => event.id ===
        eventId)[0] }), 1);
    });
  }
  return axios.get(`${base}/${group}/events/${eventId}`);
};

export const fetchEventRSVPS = (group, eventId) => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: eventRSVP }), 1);
    });
  }
  return axios.get(`${base}/${group}/events/${eventId}/rsvps`);
};
