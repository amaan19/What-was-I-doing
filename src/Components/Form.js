import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Add an Event</h1>
        <form onSubmit={this.props.handleNewEvent}>
          <label>
            Title:{" "}
            <input
              onChange={this.props.handleFormInput}
              name="title"
              type="text"
            />
          </label>
          <label>
            Content:{" "}
            <input
              onChange={this.props.handleFormInput}
              name="content"
              type="text"
            />
          </label>
          <label>
            Image URL:
            <input
              onChange={this.props.handleFormInput}
              name="image"
              type="text"
            />
          </label>
          <label>
            Mood:{" "}
            <input
              onChange={this.props.handleFormInput}
              name="mood"
              type="text"
            />
          </label>
          <input
            onChange={this.props.handleFormInput}
            type="date"
            name="date"
          />
          <input
            onChange={this.props.handleFormInput}
            type="time"
            name="time"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
