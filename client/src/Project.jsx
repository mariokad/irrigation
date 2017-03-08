import React from 'react';
import axios from 'axios';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.getProjects();
  }

  getProjects() {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + this.props.token;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.get('https://iotile.cloud/api/v1/project/')
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.error(error);
            alert('Cannot retrieve projects');
         })
  }

  render() {
    return (
      <div>sup</div>
    );
  }
};