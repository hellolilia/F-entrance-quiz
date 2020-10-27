import React, { Component } from 'react';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/students/list', {
      method: 'GET',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <ul>
          {this.state.students.map((item) => {
            return (
              <li key={item}>
                {item.id}.{item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
