import React from 'react';
import axios from 'axios';
import ProjectList from './ProjectList.jsx';
import ErrorMsg from './Error.jsx';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  getProjects() {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + this.props.token;
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.get('https://iotile.cloud/api/v1/project/')
         .then((response) => {
          console.log(response.data.results);
            this.setState({
              projects: response.data.results
            });
         })
         .catch((error) => {
            console.error(error);
            alert('Cannot retrieve projects');
         });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    const context = this;
    return (
      context.state.projects ?
      <ProjectList token={this.props.token} projects={this.state.projects} />
      :
      <ErrorMsg error="getting projects" />
    );
  }
};