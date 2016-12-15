import React from 'react';
import {Link} from 'react-router'

const CreateUserForm = React.createClass({
  render() {
    return (
      <form className="createUserForm">
        <h2>create a developer account</h2>
        <div className="iconTextInput">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="username"></input>
        </div>
        <div className="iconTextInput">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input type="text" placeholder="email"></input>
        </div>
        <div className="iconTextInput">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="text" placeholder="password"></input>
        </div>
        <div className="iconTextInput">
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="text" placeholder="confirm password"></input>
        </div>
        <input type="submit" className="primary-button" value="create account" />
      </form>
    );
  }
});

export default CreateUserForm;
