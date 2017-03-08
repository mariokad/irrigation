import React from 'react';
import ProjectListItem from './ProjectListItem.jsx';

export default class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-list">
        {
          this.props.projects.map((event, i) => (
            <ProjectListItem token={this.props.token} key={i} eventItem={event}/>
          ))
        }
      </div>
    );
  }
};