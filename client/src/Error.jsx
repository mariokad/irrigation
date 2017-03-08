import React from 'react';

export default class ErrorMsg extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>Error {this.props.error}</div>
    );
  }
};