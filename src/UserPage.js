import React, { Component } from "react";
import "./App.css";
import Event from "./Event";

class UserPage extends Component {
  renderEvents = () => {
    return this.props.events.map(event => {
      return <Event event={event} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Add an Event</h1>
        <form>
          <label>
            Title: <input type="text" />
          </label>
          <label>
            Content: <input type="text" />
          </label>
          <label>
            Image URL:
            <input type="text" />
          </label>
          <label>
            Mood: <input type="text" />
          </label>
        </form>
        <div>{this.renderEvents()}</div>;
      </div>
    );
  }
}

export default UserPage;
