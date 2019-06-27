import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Article,
  Category,
  Home,
  Profile
} from './views';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:id' component={Category} />
          <Route exact path='/article/:id' component={Article} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route path='*' component={(props) => <h3>Not Found! </h3>} />
        </Switch>
      </Fragment >
    );
  }
}

export default App;
