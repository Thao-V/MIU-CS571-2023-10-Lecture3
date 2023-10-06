import React from "react";
// export default function Message({msg}){
//   return <h1>{msg}</h1>
// }

export default class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msg: this.props.msg
    }
  }

  changeMessage = () => {
    this.setState({msg: this.state.msg + "Changed1", number: 123});
    this.setState({msg: this.state.msg + "Changed"});
    
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.msg} - {this.state.number}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    )
  }
}