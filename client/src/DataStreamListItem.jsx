import React from 'react';

export default class DataStreamListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('stream', this.props.stream);
    return(
      <div className="datastream-list-item">
      hi
      </div>
    );
  }
};