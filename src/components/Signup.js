import React, { PropTypes } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const Signup = (props) => {
  return (
    <div><form onSubmit={props.handleSubmitSignup}>
      <label>
        Username:
        <input type="text" value={props.username} onChange={props.handleUser} />
      </label>
      <label>
        Password:
        <input type="text" value={props.password} onChange={props.handlePass} />
      </label>
      <label>
        Samples:
        <input type="text" value={props.samples} onChange={props.handleSample} />
      </label>
      <input type="submit" value="Submit" />
    </form></div>
  );
}

export default Signup;