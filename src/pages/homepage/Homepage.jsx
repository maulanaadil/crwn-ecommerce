import React, { Component } from 'react';

import './index.scss';

import Directory from '../../components/directory/directory.jsx';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
