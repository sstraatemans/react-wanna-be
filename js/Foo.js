import React from './react/react';

class Foo extends React.Component {
  constructor (props){
    super(props);
  }
  render() {
    return React.createElement('div', {onclick: this.props.onClick}, `Foo ${this.props.name}`);
  }
}

export default Foo;
