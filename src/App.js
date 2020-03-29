import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Article,
  Category,
  HomePage,
  Profile,
  Gallery
} from './views';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/category/:id/:type?' component={Category} />
          <Route exact path='/article/:id' component={Article} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/gallery' component={Gallery} />
          <Route path='*' component={(props) => <h3>Not Found! </h3>} />
        </Switch>
      </Fragment >
    );
  }
}

export default App;
