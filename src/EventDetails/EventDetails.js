import React from "react";
import { Parser } from "html-to-react";

const htmlToReactParser = new Parser();

export default function EventDetails({ description }) {
  return <div style={{'overflow-wrap': 'break-word'}}>{htmlToReactParser.parse(description)}</div>;
}
