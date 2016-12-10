import React from 'react';
import SetSearch from '../search/SetSearch.jsx'

const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="banner-container">
          <h1>zenow</h1>
          <p>social data sharing</p>
          <div className="buttonNavigation">
            <a href="https://medium.com/search?q=%40JacksonMorgan%20tech" className="primary-button">
              get a developer account
            </a>
            <a href="https://medium.com/search?q=%40JacksonMorgan%20politics" className="secondary-button">
              log in
            </a>
          </div>
        </div>
        <div className="search-container">
          {<SetSearch />}
        </div>
      </div>
    );
  }
});

export default Home;
