import React, { Component } from 'react';

import './homepage.style.scss';

import Directory from '../../components/directory/directory.component.jsx';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
