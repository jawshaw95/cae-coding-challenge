import React from "react";
import { Parser } from "html-to-react";

const htmlToReactParser = new Parser();

export default function EventDetails({ description }) {
  return <>{htmlToReactParser.parse(description)}</>;
}
