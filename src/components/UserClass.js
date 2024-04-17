import React from "react";
class UserClass extends React.Component {
    constructor(props){
       super(props);
       this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
        }
       } 
      // console.log(this.props.name + "Child Constructor");
    }
  async componentDidMount(){
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/Sk-Shubhasheesh");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json,
    })
  }

 componentDidUpdate(){
    console.log("Component Did Update");
 }
 componentWillUnmount(){
    console.log("Component will Unmount");
 }
  render() {
    // console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: shubhasheeshkundu@gmail.com</h4>
        <img src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}

export default UserClass;
