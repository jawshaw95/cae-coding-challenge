import React, { Component } from "react";
import Event from "../Event/Event";
import { fetchEvent, fetchEventRSVPS } from "../client/meetupApiClient";

//Controls data fetching for event
class EventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      event: null,
      host: null,
      RSVPs: null
    };
  }

  async fetchEventData(id) {
    try {
      const response = await fetchEvent("reactjs-dallas", id);
      const eventData = await response.data;
      this.setState({ event: eventData });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  async fetchEventRSVPData(id) {
    try {
      const response = await fetchEventRSVPS("reactjs-dallas", id);
      const RSVPList = await response.data;
      this.setState({ RSVPs: RSVPList });

      //Extracting host so they can be first card
      this.setState({
        host: RSVPList.filter(
          rsvp => rsvp.member.event_context.host === true
        )[0]
      });
    } catch (e) {
      this.setState({ error: true });
    }
  }

  componentDidMount = () => {
    //Fetch data needed for event
    this.fetchEventData(this.props.match.params.id);
    this.fetchEventRSVPData(this.props.match.params.id);
  };

  render() {
    const { event, host, RSVPs } = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return event && host && RSVPs ? (
      <Event event={event} host={host} RSVPs={RSVPs} />
    ) : (
      <div>Loading...</div>
    );
  }
}

export default EventContainer;
