import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      maxChars: 280,
      currentChars: 0,
      value: ''
    };
  }

  handleMessage = (event) => {
    const value = event.target.value
    this.setState( prevState => ({
      value,
      currentChars: prevState.currentChars + 1
    }))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
    <p>{this.state.maxChars - this.state.currentChars}</p>
        <input
          type="text"
          name="message"
          id="message"
          onChange={ event => this.handleMessage(event) }
          value={this.state.value}
        />
      </div>
    );
  }
}

export default TwitterMessage;
