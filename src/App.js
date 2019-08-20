import React, { Component } from "react";
import Signup from "../src/Signup";
import "./App.css";
import UserPage from "./UserPage";
import events from "./data";

class App extends Component {
  state = {
    username: "",
    events: events
  };

  renderComponent = () => {
    return this.state.username ? (
      <UserPage events={this.state.events} />
    ) : (
      <Signup handleForm={this.handleFormInput} />
    );
  };

  //Handle Signup/Login

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return <div className="App">{this.renderComponent()}</div>;
  }
}

export default App;
