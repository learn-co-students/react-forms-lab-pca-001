import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = event =>{
    this.setState({
      username: event.target.value
    });
  }

  handlePassword = event =>{
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={event =>{
        const {username, password} = this.state;
        event.preventDefault();
        if(username.length > 0 && password.length > 0){ this.props.handleLogin(event) }
      }}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={event =>this.handleUsername(event)}
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={event => this.handlePassword(event)}
              value={this.state.password}
            />
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
