import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      remainingCharacters: props.maxChars
    };
  }

  handleOnChange = e => {
    this.setState({
      value: e.target.value,
      remainingCharacters: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleOnChange(e)} value={this.state.value} type="text" name="message" id="message" />
        <em>{this.state.remainingCharacters}/{this.props.maxChars}</em>
      </div>
    );
  }
}

export default TwitterMessage;
