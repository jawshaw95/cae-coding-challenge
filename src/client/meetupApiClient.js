import axios from "axios";

const base = "https://cors-anywhere.herokuapp.com/https://api.meetup.com";

export const fetchEvents = group => axios.get(`${base}/${group}/events`);

export const fetchEvent = (group, eventId) =>
  axios.get(`${base}/${group}/events/${eventId}`);

export const fetchEventRSVPS = (group, eventId) =>
  axios.get(`${base}/${group}/events/${eventId}/rsvps`);
