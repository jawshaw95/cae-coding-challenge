import React from "react";
import { Parser } from "html-to-react";

const htmlToReactParser = new Parser();

//TODO: Slack link in description not responsive
export default function EventDetails({ description }) {
  return <>{htmlToReactParser.parse(description)}</>;
}
