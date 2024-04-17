import React from "react";
class UserClass extends React.Component {
    constructor(props){
       super(props);
       this.state = {
        count: 0,
        count2: 2
       } 
       console.log("Child Constructor");
    }
  componentDidMount(){
    console.log("Child Component Did Mount");
  }

  
  render() {
    // desturcuting
    const {count} = this.state
    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
           // Never update State variable directly
            this.setState({
                count: this.state.count+1,
            })
        }}>Count Increase</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Jaunpur</h3>
        <h4>Contact: shubhasheeshkundu@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
