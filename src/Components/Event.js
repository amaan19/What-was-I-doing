import React, { Component } from "react";
import "../App.css";

class Event extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.event.title}</h1>
        <h2>{this.props.event.mood}</h2>
        <p>{this.props.event.content}</p>
        <img src={this.props.event.image} alt="user attached" />
      </div>
    );
  }
}

export default Event;
