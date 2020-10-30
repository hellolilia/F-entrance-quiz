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
    // TODO GTB-工程实践: * 建议把数据请求提取到单独的service
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
            // TODO GTB-工程实践: * 建议将这里提取共用组件，在Group中以便复用
            return (
              <li key={item} className="student">
                {item.id}.{item.name}
              </li>
            );
          })}
          <li className="addstudent">
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
