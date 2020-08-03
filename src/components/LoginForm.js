import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = e => {
    this.setState({password: e.target.value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    if(this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input onChange={e => this.handleUsernameChange(e)} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.handlePasswordChange(e)} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
