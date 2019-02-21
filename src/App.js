import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Home, Post, About } from './views';
import { Header, Footer } from './components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="main-wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/timeline' component={Home} />
            <Route exact path='/article/:id' component={Post} />
            <Route exact path='/about' component={About} />
            <Route path='*' component={(props) => <h3>Not Found! </h3>} />
          </Switch>
        </div>

        <Footer />
      </Fragment >
    );
  }
}

export default App;
