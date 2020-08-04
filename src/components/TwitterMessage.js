import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      input: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.input}/>
        <p>{this.state.remainingChars} / {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
