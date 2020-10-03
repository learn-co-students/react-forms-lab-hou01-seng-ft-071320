import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      char: [],
    };
  }
  handleChange=(e)=>{
    this.setState({
      char: e.target.value,
    })
  }

  render() {
   let counter=this.props.maxChars-this.state.char.length
    console.log(this.state.char)
    console.log(this.state.counter)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e=>this.handleChange(e)} value={this.state.char}/>
        {counter}
      </div>
    );
  }
}

export default TwitterMessage;
