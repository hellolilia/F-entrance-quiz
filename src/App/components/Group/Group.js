import React, { Component } from 'react';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  update() {
    fetch('http://localhost:8080/students/group', {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          groups: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>分组列表</h2>
        <button type="submit" onClick={this.update}>
          分组学员
        </button>

        <ul className="groups">
          {this.state.groups.map((item, key) => {
            return (
              <li key={item} className="group">
                <p>{key + 1} 组</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Group;
