import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './components/Container';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';



const App = () => {


  //   return (
  //     <Router>
  //       <Route path="/" component={Home}>
  //         <Route path="/signup" component={Signup} />
  //         <Route path="/login" component={Login} />
  //         <Route path="/logout" component={Logout} />
  //         <Route path="/dashboard" component={Dashboard}>
  //           <Route path="/dashboard/configForm" component={ConfigForm} />
  //           <Route path="/dashboard/configDetail/:id" component={ConfigDetail} />
  //         </Route>
  //       </Route>
  //     </Router>
  //   );
  // }

  // <Router>
  //   <div>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/signup">Signup</Link>
  //       <Link to="/login">Signup</Link>
  //     </nav>
  //     <Route path="/" component={Profile} />
  //     <Route path="/signup" component={Signup} />
  //     <Route path="/login" component={Login} />
  //   </div>
  // </Router>


  // return (
  //   <div>
  //     <Signup authenticate={props.authenticate} handleUser={props.handleUser} handlePass={props.handlePass} handleSample={props.handleSample} handleSubmitSignup={props.handleSubmitSignup} handleSubmitLogin={props.handleSubmitLogin} />
  //   </div>
  // )


  //  <Login authenticate={this.authenticate} handleUser={this.handleUser} handlePass={this.handlePass} handleSample={this.handleSample} handleSubmitSignup={this.handleSubmitSignup} handleSubmitLogin={this.handleSubmitLogin} />

  return (
    <Container />
  )
}


render(<App />, document.getElementById('root'));
