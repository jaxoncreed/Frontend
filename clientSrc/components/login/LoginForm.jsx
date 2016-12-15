import React from 'react';
import {Link} from 'react-router'

const LoginForm = React.createClass({
  render() {
    return (
      <form className="createUserForm">
        <h2>login</h2>
        <div className="iconTextInput">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="username / email"></input>
        </div>
        <div className="iconTextInput">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="text" placeholder="password"></input>
        </div>
        <input type="submit" className="primary-button" value="log in" />
      </form>
    );
  }
});

export default LoginForm;
