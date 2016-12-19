/* @flow */

import React, { Component } from 'react';
import 'material-components-web/dist/material-components-web.css';
import '../../styles/index.css';

class App extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

export default App;
