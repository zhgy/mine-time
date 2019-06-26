import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Home } from './views';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/timeline' component={Home} />
            <Route path='*' component={(props) => <h3>Not Found! </h3>} />
          </Switch>
        </div>
      </Fragment >
    );
  }
}

export default App;
