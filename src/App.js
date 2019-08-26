import React, { Component } from "react";
import Signup from "../src//Components/Signup";
import "./App.css";
import UserPage from "./Components/UserPage";
// import events from "./data";

const UserURL = "http://localhost:3000/users";
class App extends Component {
  state = {
    username: ""
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
