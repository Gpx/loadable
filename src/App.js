// @flow

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import logo from './logo.svg';
import './App.css';

const LoadableComponent = Loadable({
  loader: () => import('./Component'),
  loading: () => <div>Loading</div>,
})

LoadableComponent.preload()

class App extends Component<void> {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Route>
        <Route path="/other" component={LoadableComponent} />
      </BrowserRouter>
    );
  }
}

export default App;
