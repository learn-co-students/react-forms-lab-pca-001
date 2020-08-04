import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler}  value={this.state.message} name="message" id="message" />
        {/* value should be saved in the component's state and should update on every change to the input. */}
        {/* Show the remaining characters in the component */}
        {this.props.maxChars - this.state.message.length}
        {/* maxChars which is a number — the maximum amount of characters a message can have.
        This prop is being passed in from the App component with the value 280. */}
      </div>
    );
  }
}

export default TwitterMessage;
