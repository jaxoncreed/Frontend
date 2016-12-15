import React from 'react';
import {Link} from 'react-router'
import CreateUserForm from '../login/CreateUserForm.jsx'
import LoginForm from '../login/LoginForm.jsx'

const Layout = React.createClass({
  render() {
    return (
      <div className="layout">
        <header>
          <h1 className="expanded"><Link to='/'>zenow</Link></h1>
          <h1 className="condensed"><Link to='/'>z</Link></h1>
          <nav>
            <ul>
              <li><Link to="/">
                <i className="fa fa-table"></i>data sets
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-file-text"></i>data types
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-book"></i>documentation
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-sign-in"></i>log in
              </Link></li>
            </ul>
          </nav>
        </header>
        <div className="subHeaderContent">
          <div className="signUpContainer clickableShadow">
            <h1>zenow</h1>
            <p>create and share data</p>
            <CreateUserForm />
            <br />
            <LoginForm />
          </div>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
});

export default Layout;
