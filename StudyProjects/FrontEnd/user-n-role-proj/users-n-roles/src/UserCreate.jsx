import React from "react";

import api from "./api";

class UserCreate extends React.Component {
  state = {
    userName: "",
    age: "",
    role: {
      userRole: ""
    }
  };

  componentDidMount() {}

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    // this.setState({[e.target.name]: e.target.value})
    // this.setState({ userName: e.target.value });
    // this.setState({ age: e.target.value });
    // this.setState(prevState => ({
    //   ...prevState.role, role[userRole]: e.target.value
    // }))

    if(e.target.name === "userRole"){
      let role = {...this.state.role}
      role.userRole = e.target.value;
      this.setState({role})
    } else if(e.target.name === "userName"){
      let userName = {...this.state.userRole}
      userName = e.target.value;
      this.setState({userName})
    } else if(e.target.name === "age"){
      let age = {...this.state.age}
      age = e.target.value;
      this.setState({age})
    }
    

  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.post("/users", this.state).then((response) => {
      console.log(response);
    });

    this.setState({
      userName: "",
      age: "",
      role: {
        userRole: ""
      }
    });
  };

  render() {
    const { userName, age, role } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>User Name</label>
          <div>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleChange}
            />
          </div>
          <label>Age</label>
          <div>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <label>Role</label>
          <div>
            <input
              type="text"
              name="userRole"
              value={role.userRole}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserCreate;
