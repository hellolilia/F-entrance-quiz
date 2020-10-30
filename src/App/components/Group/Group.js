import React, { Component } from 'react';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  update() {
    // TODO GTB-工程实践: * 建议把数据请求提取到单独的service
    // TODO GTB-工程实践: * 建议把URL定义为常量
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
        {/* TODO GTB-知识点： - 这里的button type 应该是button */}
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
