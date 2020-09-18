import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      remaningChars: 280,
      message: ""
    };
  }

  handleChange = (event) => {
    const charsLeft = this.state.remaningChars - 1
    this.setState({
      remaningChars: charsLeft,
      message: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        <div>
          {this.state.remaningChars}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
