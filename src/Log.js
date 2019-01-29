import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";

class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  // logovan() {
  //   if (this.state.username && this.state.password) {
  //     alert("Logovan si");
  //   } else if (this.state.password && this.state.username === "") {
  //     alert("Nisi uneo username");
  //   } else if (this.state.username && this.state.password === "") {
  //     alert("Nisi uneo password");
  //   } else {
  //     alert("Nisi uneo username i password");
  //   }
  // }

  logovan() {
    if (this.state.username && this.state.password) {
      alert("Logovan si");
    } else if (!this.state.password && !this.state.username) {
      alert("Nisi uneo username i password");
    } else if (!this.state.username) {
      alert("Nisi uneo username");
    } else {
      alert("Nisi uneo password");
    }
  }

  // logovan() {
  //   if (this.state.username && this.state.password === "") {
  //     alert("Nisi uneo username i password");
  //   } else if (this.state.username === "") {
  //     alert("Nisi uneo username");
  //   } else if (this.state.password === "") {
  //     alert("Nisi uneo password");
  //   } else {
  //     alert("Logovan si");
  //   }
  // }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login - MenuAppBar" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <br />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              onClick={this.logovan.bind(this)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default Log;