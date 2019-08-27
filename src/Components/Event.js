import React, { Component } from "react";
import "../App.css";

class Event extends Component {
  render() {
    return (
      <div className="event-card">
        <img src={this.props.event.image} alt="user attached" />
        <div id="card-text">
          <h3>{this.props.event.title}</h3>
          <div id="mood-text">
            I felt: <p id="mood">{this.props.event.mood}</p>
          </div>
          <p>{this.props.event.content}</p>
        </div>
      </div>
    );
  }
}

export default Event;
