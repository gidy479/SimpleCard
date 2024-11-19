import React, { Component } from 'react';

class Description extends Component {
  render() {
    return <p className="text-2xl font-bold mb-2 -ml-96">{this.props.text}</p>;
  }
}

export default Description;
