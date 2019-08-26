import React, { Component } from "react";
import "../App.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Username
            <input
              onChange={this.props.handleForm}
              type="text"
              name="username"
            />
          </label>
          <br />
          <label>
            Password
            <input type="password" name="username" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
