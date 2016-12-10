import React from 'react';
import {Link} from 'react-router'


const Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1 className="expanded"><Link to='/'>zenow</Link></h1>
          <h1 className="condensed"><Link to='/'>z</Link></h1>
          <nav>
            <ul>
              <li><a href="https://twitter.com/OisForOh">
                <i className="fa fa-twitter linkIcon"></i>
              </a></li>
            </ul>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
});

export default Layout;
