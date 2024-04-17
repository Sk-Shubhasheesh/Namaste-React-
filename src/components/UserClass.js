import React from "react";
class UserClass extends React.Component {
    constructor(props){
       super(props);
       this.state = {
        count: 0,
        count2: 2
       } 
    }
  render() {
    // desturcuting
    const {count2} = this.state
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Jaunpur</h3>
        <h4>Contact: shubhasheeshkundu@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
