import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = (event) =>{
    this.setState({
      ...this.state,
      username: event.target.value,
    })
  }

  handlePasswordChange = (event) =>{
    this.setState({
      ...this.state,
      password: event.target.value,
    })
  }

  handleLogin = (event) =>{
    event.preventDefault()

    const username = this.state.username
    const password = this.state.password
    if (username && password){
    this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit= {this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
        <button  type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
