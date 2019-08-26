import React, { Component } from "react";
import "../App.css";
import Event from "./Event";
import Form from "./Form";

const eventsURL = "http://localhost:3000/events";
class UserPage extends Component {
  state = {
    events: "",
    title: "",
    content: "",
    image: "",
    mood: "",
    date: "",
    time: "",
    user_id: 1
  };
  fetchEvents = () => {
    fetch(eventsURL)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ events: resp });
      });
  };

  componentDidMount() {
    this.fetchEvents();
  }

  renderEvents = () => {
    if (this.state.events) {
      return this.state.events.map(event => {
        return <Event event={event} />;
      });
    }
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNewEvent = e => {
    e.preventDefault();
    let newEvent = {
      title: this.state.title.trim(),
      content: this.state.content.trim(),
      image: this.state.image.trim(),
      mood: this.state.mood.trim(),
      date: this.state.date.trim(),
      time: this.state.time.trim(),
      user_id: 1
    };
    //Write fetch, but first add controller action
    fetch(eventsURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent)
    })
      .then(resp => resp.json())
      .then(resp => this.setState({ events: [...this.state.events, resp] }));
    // e.target.reset();
  };

  render() {
    return (
      <div>
        <Form
          handleFormInput={this.handleFormInput}
          handleNewEvent={this.handleNewEvent}
        />
        <div>{this.renderEvents()}</div>
      </div>
    );
  }
}

export default UserPage;
