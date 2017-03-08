import React from 'react';
import axios from 'axios';
import Project from './Project.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginInfo = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    axios.post('https://iotile.cloud/api/v1/auth/api-jwt-auth/', loginInfo)
         .then((response) => {
              this.setState({
              token: response.data.token
            });
         })
         .catch((error) => {
            console.error(error);
            alert('Login failed');
         });
  }

  render() {
    const context = this;
    return (
      context.state.token === null ? 
      (<div className="login">
        <p className="login-header">Login</p>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input ref="username" type="email" placeholder="you@you.com" />
          <input ref="password" type="password" placeholder="password" />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>)
      :
      <Project token={this.state.token} />
    );
  }
};