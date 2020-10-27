import React, { Component } from 'react';
import './App.scss';
import Students from './components/Students/Students';
import Group from './components/Group/Group';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <Students />
      </div>
    );
  }
}

export default App;
