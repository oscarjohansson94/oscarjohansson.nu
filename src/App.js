import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Grid from './components/Grid'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;
