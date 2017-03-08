import React from 'react';
import DataStream from './DataStream.jsx';

export default class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      clicked: true
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return(
      this.state.clicked ?
      <DataStream token={this.props.token} projectId={this.props.eventItem.id} />
      :
      <div className="project-list-item">
        <p className="project-name" onClick={this.onClick} >{this.props.eventItem.name}</p>
        <p className="project-organization">Organization: {this.props.eventItem.org}</p>
      </div>
    );
  }
};