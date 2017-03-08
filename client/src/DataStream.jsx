import React from 'react';
import axios from 'axios';
import DataStreamList from './DataStreamList.jsx';
import ErrorMsg from './Error.jsx';

export default class DataStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: null
    };
  }

  getDataStreams() {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + this.props.token;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    console.log(this.props.projectId);

    axios.get('https://iotile.cloud/api/v1/stream/')
         .then((response) => {
            this.setState({
              streams: response.data.results
            });
         })
         .catch((error) => {
            console.error(error);
            alert('Cannot retrieve data streams');
         });
  }

  componentDidMount() {
    this.getDataStreams();
  }

  render() {
    const context = this;
    return (
      context.state.streams ?
      <DataStreamList streams={this.state.streams} token={this.props.token} />
      :
      <ErrorMsg error="getting streams" />
    );
  }
};