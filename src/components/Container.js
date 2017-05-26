import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      samples: ''
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSample = this.handleSample.bind(this);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  handleUser(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    });
  }

  handlePass(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  }

  handleSample(event) {
    event.preventDefault();
    var samplesStr = event.target.value;
    var samplesArr = samplesStr.split(',');
    this.setState({
      samples: samplesArr
    });
  }

  handleSubmitSignup(event) {
    console.log("testing");
    event.preventDefault();
    var type = 'signup';
    this.authenticate(type);
  }

  handleSubmitLogin(event) {
    event.preventDefault();
    var type = 'login';
    this.authenticate(type);
  }

  authenticate(type) {
    var url;
    var myMessage = {
      username: this.state.username,
      password: this.state.password,
      samples: this.state.samples
    }

    if (type === 'signup') url = '/register';
    if (type === 'login') url = '/login';

    const X = new XMLHttpRequest();
    X.open('POST', url, true);
    X.setRequestHeader("Content-type", "application/json");
    X.onload = () => {
      const response = JSON.parse(X.responseText);
      console.log("******");
      console.log(response);
      this.setState({
      username: response.username,
      password: response.password,
      samples: response.samples
    });
    console.log("*state after create user is*");
    console.log(this.state);
    };
    console.log(JSON.stringify(myMessage));
    X.send(JSON.stringify(myMessage));

  }

  render() {
    return (
      <div>
        <Signup authenticate={this.authenticate} handleUser={this.handleUser} handlePass={this.handlePass} handleSample={this.handleSample} handleSubmitSignup={this.handleSubmitSignup} handleSubmitLogin={this.handleSubmitLogin} />
        <br />
        <Profile />
      </div>
    );
  }
}

export default Container;