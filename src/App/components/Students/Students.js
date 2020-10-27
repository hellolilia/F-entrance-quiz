import React, { Component } from 'react';
import './Students.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newName: '',
    };
  }

  componentDidMount() {
    this.update();
  }

  handleChange = (event) => {
    this.setState({
      newName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/students', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json ',
        Accept: 'application/json',
        'Access-Control-Origin': '*',
      },
      body: this.state.newName,
    }).then((response) => {
      if (response.status === 201) {
        this.setState({
          newName: '',
        });
        this.update();
      }
    });
  };

  update() {
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
          {this.state.students.map((item) => {
            return (
              <li key={item} className="student">
                {item.id}.{item.name}
              </li>
            );
          })}
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="+添加学员" onChange={this.handleChange} />
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default Students;
