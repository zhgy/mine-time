import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/timeline' component={Home} />
          <Route path='*' component={(props) => <h3>Not Found! </h3>} />
        </Switch>
      </Fragment >
    );
  }
}

export default App;
