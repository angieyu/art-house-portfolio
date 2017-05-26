import React, { Component } from 'react';
import data from './assets/jamesjean.json';
import Sample from './Sample';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.username);
    let samplesArr = [];
    let inputArr = [];
    let displayName;
    if(this.props.username === undefined){
      inputArr = data;
      displayName = 'jamesjean';
    }else{
      inputArr = this.props.samples;
      displayName = this.props.username;
    }

    for (let i = 0; i < inputArr.length; i += 1) {
      samplesArr.push(<Sample url={inputArr[i]} />)
    }

    return (
      <div id="Profile Info">
        <h5>James J.</h5>
        <div style={styles.container}>{samplesArr}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    flexFlow: 'row wrap',
    alignItems: 'center',
    padding: '10px',
    marginRight: '20px'
  },
};

export default Profile;
