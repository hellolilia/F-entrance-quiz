import React, { Component } from 'react';
import './Students.css';

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
        <ul className="students">
          {this.state.students.map((item, key) => {
            return (
              <li key={item} className="student">
                {key + 1}.{item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Students;
