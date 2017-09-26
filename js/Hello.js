import React from './react/react';
const Hello = (props) => {
  return React.createElement('div', null, `Helloooo ${props.name}!`);
}

export default Hello;
