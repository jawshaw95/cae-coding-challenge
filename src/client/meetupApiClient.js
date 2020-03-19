import axios from "axios";
import event from "../mock_data/event";
import eventRSVP from "../mock_data/eventRSVP";
import eventsResponse from "../mock_data/eventsResponse";

/*
  In development returns mock_data to avoid excessive API calls
*/
const base = "https://cors-anywhere.herokuapp.com/https://api.meetup.com";

export const fetchEvents = group => {
  // if(process.env.NODE_ENV === 'development') {
  //      return setTimeout(() => resolve())
  // }
  // axios.get(`${base}/${group}/events`);
};

export const fetchEvent = (group, eventId) => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({"data": event}), 1);
    });
  }
  return axios.get(`${base}/${group}/events/${eventId}`);
};

export const fetchEventRSVPS = (group, eventId) => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({"data": eventRSVP}), 1);
    });
  }
  return axios.get(`${base}/${group}/events/${eventId}/rsvps`);
};
