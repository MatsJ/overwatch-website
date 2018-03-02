import React, { Component, Fragment } from 'react';

// components
import Submenu from './Submenu';
import Header from './Header';

class App extends Component {
  render() {
      return (
        <Fragment>
          <Header />
          <Submenu/>
        </Fragment>
      );
    }
  }

export default App;
