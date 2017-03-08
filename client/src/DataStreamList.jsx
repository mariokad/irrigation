import React from 'react';
import DataStreamListItem from './DataStreamListItem.jsx';

export default class DataStreamList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="datastream-list">
        {
          this.props.streams.map((stream, i) => (
            <DataStreamListItem token={this.props.token} key={i} streamItem={stream}/>
          ))
        }
      </div>
    );
  }
};