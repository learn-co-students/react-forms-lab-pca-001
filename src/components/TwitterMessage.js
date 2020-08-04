import React from "react"

class TwitterMessage extends React.Component {
  constructor(props) {
    super()

    this.state = {
      remainingCharacters: props.maxChars,
      value: ""
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      remainingCharacters: this.props.maxChars - event.target.value.length
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
            onChange={event=> this.handleChange(event)}
            value={this.state.value} />

    <p>{this.state.remainingCharacters} characters remaining.</p>

      </div>
    )
  }
}

export default TwitterMessage
