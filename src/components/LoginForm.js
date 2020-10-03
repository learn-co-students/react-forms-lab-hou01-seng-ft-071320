import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit=(e)=>{
    let username=this.state.username
    let password=this.state.password
    e.preventDefault()
   if (!username||!password) return
    this.props.handleLogin({username,password})
  }

  render() {
    // console.log(this.state.username)
    // console.log(this.state.password)
   
    return (
      <form onSubmit={
        this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e=>this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e=>this.handleInputChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
