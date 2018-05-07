import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, Hello, Friends } from './components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/hello">Hello</Link>
        <Route exact path="/" component={Home}></Route>
        <Route path="/friends" component={Friends}></Route>
        <Route path="/hello" component={Hello}></Route>
      </div>
    );
  }
}

export default App;
