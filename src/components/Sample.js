import React, { PropTypes } from 'react';

// stateless functions don't have a this keyword

const Sample = (props) => {
// var image = getElementByTag('img');

// image.onload(

// );

// image.setAttribute = ('src', `{props.url}`);

  return (
    <div style={styles.container}>
      <img src={props.url} width="304" height="236" />
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingLeft: 45
  },
};

export default Sample;