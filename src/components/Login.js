import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const Login = (props) => {
  console.log("***");
  console.log(props);
  return (
    
    <form onSubmit={props.handleSubmitLogin}>
      <label>
        Username:
        <input type="text" value={props.username} onChange={props.handleUser} />
      </label>
      <label>
        Password:
        <input type="text" value={props.password} onChange={props.handlePass} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;