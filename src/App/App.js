import React, { Component } from 'react';
import './App.scss';
import Students from './components/Students/Students';
import Group from './components/Group/Group';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-知识点：+ 第一层组件划分合理 */}
        <Group />
        <Students />
      </div>
    );
  }
}

export default App;
// TODO GTB-工程实践: + 有小步提交，提交信息符合语义
