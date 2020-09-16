import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars:280,
      message: "" 
    };
  }

  
  handleMessageChange = (event) =>{
    const charsLeft = this.state.remainingChars - 1
    this.setState({
      message: event.target.value,
      remainingChars: charsLeft
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleMessageChange(event)}
          value={this.state.message}
          />
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
